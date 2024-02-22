(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // frontend/javascript/uikit.js
  var require_uikit = __commonJS({
    "frontend/javascript/uikit.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define("uikit", factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.UIkit = factory());
      })(exports, function() {
        "use strict";
        const { hasOwnProperty, toString } = Object.prototype;
        function hasOwn(obj, key) {
          return hasOwnProperty.call(obj, key);
        }
        const hyphenateRe = /\B([A-Z])/g;
        const hyphenate = memoize((str) => str.replace(hyphenateRe, "-$1").toLowerCase());
        const camelizeRe = /-(\w)/g;
        const camelize = memoize(
          (str) => (str.charAt(0).toLowerCase() + str.slice(1)).replace(camelizeRe, (_, c) => c.toUpperCase())
        );
        const ucfirst = memoize((str) => str.charAt(0).toUpperCase() + str.slice(1));
        function startsWith(str, search) {
          var _a;
          return (_a = str == null ? void 0 : str.startsWith) == null ? void 0 : _a.call(str, search);
        }
        function endsWith(str, search) {
          var _a;
          return (_a = str == null ? void 0 : str.endsWith) == null ? void 0 : _a.call(str, search);
        }
        function includes(obj, search) {
          var _a;
          return (_a = obj == null ? void 0 : obj.includes) == null ? void 0 : _a.call(obj, search);
        }
        function findIndex(array, predicate) {
          var _a;
          return (_a = array == null ? void 0 : array.findIndex) == null ? void 0 : _a.call(array, predicate);
        }
        const { isArray, from: toArray } = Array;
        const { assign } = Object;
        function isFunction(obj) {
          return typeof obj === "function";
        }
        function isObject(obj) {
          return obj !== null && typeof obj === "object";
        }
        function isPlainObject(obj) {
          return toString.call(obj) === "[object Object]";
        }
        function isWindow(obj) {
          return isObject(obj) && obj === obj.window;
        }
        function isDocument(obj) {
          return nodeType(obj) === 9;
        }
        function isNode(obj) {
          return nodeType(obj) >= 1;
        }
        function isElement(obj) {
          return nodeType(obj) === 1;
        }
        function nodeType(obj) {
          return !isWindow(obj) && isObject(obj) && obj.nodeType;
        }
        function isBoolean(value) {
          return typeof value === "boolean";
        }
        function isString(value) {
          return typeof value === "string";
        }
        function isNumber(value) {
          return typeof value === "number";
        }
        function isNumeric(value) {
          return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
        }
        function isEmpty(obj) {
          return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
        }
        function isUndefined(value) {
          return value === void 0;
        }
        function toBoolean(value) {
          return isBoolean(value) ? value : value === "true" || value === "1" || value === "" ? true : value === "false" || value === "0" ? false : value;
        }
        function toNumber(value) {
          const number = Number(value);
          return isNaN(number) ? false : number;
        }
        function toFloat(value) {
          return parseFloat(value) || 0;
        }
        function toNode(element) {
          return toNodes(element)[0];
        }
        function toNodes(element) {
          return isNode(element) ? [element] : Array.from(element || []).filter(isNode);
        }
        function toWindow(element) {
          if (isWindow(element)) {
            return element;
          }
          element = toNode(element);
          const document2 = isDocument(element) ? element : element == null ? void 0 : element.ownerDocument;
          return (document2 == null ? void 0 : document2.defaultView) || window;
        }
        function isEqual(value, other) {
          return value === other || isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each(value, (val, key) => val === other[key]);
        }
        function swap(value, a, b) {
          return value.replace(new RegExp(`${a}|${b}`, "g"), (match2) => match2 === a ? b : a);
        }
        function last(array) {
          return array[array.length - 1];
        }
        function each(obj, cb) {
          for (const key in obj) {
            if (false === cb(obj[key], key)) {
              return false;
            }
          }
          return true;
        }
        function sortBy(array, prop) {
          return array.slice().sort(
            ({ [prop]: propA = 0 }, { [prop]: propB = 0 }) => propA > propB ? 1 : propB > propA ? -1 : 0
          );
        }
        function sumBy(array, iteratee) {
          return array.reduce(
            (sum, item) => sum + toFloat(isFunction(iteratee) ? iteratee(item) : item[iteratee]),
            0
          );
        }
        function uniqueBy(array, prop) {
          const seen = /* @__PURE__ */ new Set();
          return array.filter(({ [prop]: check }) => seen.has(check) ? false : seen.add(check));
        }
        function pick(obj, props2) {
          return props2.reduce((res, prop) => ({ ...res, [prop]: obj[prop] }), {});
        }
        function clamp(number, min = 0, max = 1) {
          return Math.min(Math.max(toNumber(number) || 0, min), max);
        }
        function noop() {
        }
        function intersectRect(...rects) {
          return [
            ["bottom", "top"],
            ["right", "left"]
          ].every(
            ([minProp, maxProp]) => Math.min(...rects.map(({ [minProp]: min }) => min)) - Math.max(...rects.map(({ [maxProp]: max }) => max)) > 0
          );
        }
        function pointInRect(point, rect) {
          return point.x <= rect.right && point.x >= rect.left && point.y <= rect.bottom && point.y >= rect.top;
        }
        function ratio(dimensions2, prop, value) {
          const aProp = prop === "width" ? "height" : "width";
          return {
            [aProp]: dimensions2[prop] ? Math.round(value * dimensions2[aProp] / dimensions2[prop]) : dimensions2[aProp],
            [prop]: value
          };
        }
        function contain(dimensions2, maxDimensions) {
          dimensions2 = { ...dimensions2 };
          for (const prop in dimensions2) {
            dimensions2 = dimensions2[prop] > maxDimensions[prop] ? ratio(dimensions2, prop, maxDimensions[prop]) : dimensions2;
          }
          return dimensions2;
        }
        function cover$1(dimensions2, maxDimensions) {
          dimensions2 = contain(dimensions2, maxDimensions);
          for (const prop in dimensions2) {
            dimensions2 = dimensions2[prop] < maxDimensions[prop] ? ratio(dimensions2, prop, maxDimensions[prop]) : dimensions2;
          }
          return dimensions2;
        }
        const Dimensions = { ratio, contain, cover: cover$1 };
        function getIndex(i, elements, current = 0, finite = false) {
          elements = toNodes(elements);
          const { length } = elements;
          if (!length) {
            return -1;
          }
          i = isNumeric(i) ? toNumber(i) : i === "next" ? current + 1 : i === "previous" ? current - 1 : i === "last" ? length - 1 : elements.indexOf(toNode(i));
          if (finite) {
            return clamp(i, 0, length - 1);
          }
          i %= length;
          return i < 0 ? i + length : i;
        }
        function memoize(fn) {
          const cache = /* @__PURE__ */ Object.create(null);
          return (key, ...args) => cache[key] || (cache[key] = fn(key, ...args));
        }
        function attr(element, name, value) {
          var _a;
          if (isObject(name)) {
            for (const key in name) {
              attr(element, key, name[key]);
            }
            return;
          }
          if (isUndefined(value)) {
            return (_a = toNode(element)) == null ? void 0 : _a.getAttribute(name);
          } else {
            for (const el of toNodes(element)) {
              if (isFunction(value)) {
                value = value.call(el, attr(el, name));
              }
              if (value === null) {
                removeAttr(el, name);
              } else {
                el.setAttribute(name, value);
              }
            }
          }
        }
        function hasAttr(element, name) {
          return toNodes(element).some((element2) => element2.hasAttribute(name));
        }
        function removeAttr(element, name) {
          toNodes(element).forEach((element2) => element2.removeAttribute(name));
        }
        function data(element, attribute) {
          for (const name of [attribute, `data-${attribute}`]) {
            if (hasAttr(element, name)) {
              return attr(element, name);
            }
          }
        }
        function addClass(element, ...classes) {
          for (const node of toNodes(element)) {
            const add = toClasses(classes).filter((cls) => !hasClass(node, cls));
            if (add.length) {
              node.classList.add(...add);
            }
          }
        }
        function removeClass(element, ...classes) {
          for (const node of toNodes(element)) {
            const remove2 = toClasses(classes).filter((cls) => hasClass(node, cls));
            if (remove2.length) {
              node.classList.remove(...remove2);
            }
          }
        }
        function removeClasses(element, clsRegex) {
          clsRegex = new RegExp(clsRegex);
          for (const node of toNodes(element)) {
            node.classList.remove(...toArray(node.classList).filter((cls) => cls.match(clsRegex)));
          }
        }
        function replaceClass(element, oldClass, newClass) {
          newClass = toClasses(newClass);
          oldClass = toClasses(oldClass).filter((cls) => !includes(newClass, cls));
          removeClass(element, oldClass);
          addClass(element, newClass);
        }
        function hasClass(element, cls) {
          [cls] = toClasses(cls);
          return toNodes(element).some((node) => node.classList.contains(cls));
        }
        function toggleClass(element, cls, force) {
          const classes = toClasses(cls);
          if (!isUndefined(force)) {
            force = !!force;
          }
          for (const node of toNodes(element)) {
            for (const cls2 of classes) {
              node.classList.toggle(cls2, force);
            }
          }
        }
        function toClasses(str) {
          return str ? isArray(str) ? str.map(toClasses).flat() : String(str).split(/[ ,]/).filter(Boolean) : [];
        }
        const voidElements = {
          area: true,
          base: true,
          br: true,
          col: true,
          embed: true,
          hr: true,
          img: true,
          input: true,
          keygen: true,
          link: true,
          meta: true,
          param: true,
          source: true,
          track: true,
          wbr: true
        };
        function isVoidElement(element) {
          return toNodes(element).some((element2) => voidElements[element2.tagName.toLowerCase()]);
        }
        function isVisible(element) {
          return toNodes(element).some(
            (element2) => element2.offsetWidth || element2.offsetHeight || element2.getClientRects().length
          );
        }
        const selInput = "input,select,textarea,button";
        function isInput(element) {
          return toNodes(element).some((element2) => matches(element2, selInput));
        }
        const selFocusable = `${selInput},a[href],[tabindex]`;
        function isFocusable(element) {
          return matches(element, selFocusable);
        }
        function parent(element) {
          var _a;
          return (_a = toNode(element)) == null ? void 0 : _a.parentElement;
        }
        function filter$1(element, selector) {
          return toNodes(element).filter((element2) => matches(element2, selector));
        }
        function matches(element, selector) {
          return toNodes(element).some((element2) => element2.matches(selector));
        }
        function closest(element, selector) {
          var _a;
          return (_a = toNode(element)) == null ? void 0 : _a.closest(startsWith(selector, ">") ? selector.slice(1) : selector);
        }
        function within(element, selector) {
          return isString(selector) ? !!closest(element, selector) : toNode(selector).contains(toNode(element));
        }
        function parents(element, selector) {
          const elements = [];
          while (element = parent(element)) {
            if (!selector || matches(element, selector)) {
              elements.push(element);
            }
          }
          return elements;
        }
        function children(element, selector) {
          element = toNode(element);
          const children2 = element ? toArray(element.children) : [];
          return selector ? filter$1(children2, selector) : children2;
        }
        function index(element, ref) {
          return ref ? toNodes(element).indexOf(toNode(ref)) : children(parent(element)).indexOf(element);
        }
        function isSameSiteAnchor(el) {
          el = toNode(el);
          return el && ["origin", "pathname", "search"].every((part) => el[part] === location[part]);
        }
        function getTargetedElement(el) {
          if (isSameSiteAnchor(el)) {
            el = toNode(el);
            const id2 = decodeURIComponent(el.hash).substring(1);
            return document.getElementById(id2) || document.getElementsByName(id2)[0];
          }
        }
        function query(selector, context) {
          return find(selector, getContext(selector, context));
        }
        function queryAll(selector, context) {
          return findAll(selector, getContext(selector, context));
        }
        function find(selector, context) {
          return toNode(_query(selector, toNode(context), "querySelector"));
        }
        function findAll(selector, context) {
          return toNodes(_query(selector, toNode(context), "querySelectorAll"));
        }
        const contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
        const isContextSelector = memoize((selector) => selector.match(contextSelectorRe));
        function getContext(selector, context = document) {
          return isString(selector) && isContextSelector(selector) || isDocument(context) ? context : context.ownerDocument;
        }
        const contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
        const sanatize = memoize((selector) => selector.replace(contextSanitizeRe, "$1 *"));
        function _query(selector, context = document, queryFn) {
          if (!selector || !isString(selector)) {
            return selector;
          }
          selector = sanatize(selector);
          if (isContextSelector(selector)) {
            const split = splitSelector(selector);
            selector = "";
            for (let sel of split) {
              let ctx = context;
              if (sel[0] === "!") {
                const selectors = sel.substr(1).trim().split(" ");
                ctx = parent(context).closest(selectors[0]);
                sel = selectors.slice(1).join(" ").trim();
                if (!sel.length && split.length === 1) {
                  return ctx;
                }
              }
              if (sel[0] === "-") {
                const selectors = sel.substr(1).trim().split(" ");
                const prev = (ctx || context).previousElementSibling;
                ctx = matches(prev, sel.substr(1)) ? prev : null;
                sel = selectors.slice(1).join(" ");
              }
              if (ctx) {
                selector += `${selector ? "," : ""}${domPath(ctx)} ${sel}`;
              }
            }
            if (!isDocument(context)) {
              context = context.ownerDocument;
            }
          }
          try {
            return context[queryFn](selector);
          } catch (e) {
            return null;
          }
        }
        const selectorRe = /.*?[^\\](?![^(]*\))(?:,|$)/g;
        const splitSelector = memoize(
          (selector) => selector.match(selectorRe).map((selector2) => selector2.replace(/,$/, "").trim())
        );
        function domPath(element) {
          const names = [];
          while (element.parentNode) {
            const id2 = attr(element, "id");
            if (id2) {
              names.unshift(`#${escape(id2)}`);
              break;
            } else {
              let { tagName } = element;
              if (tagName !== "HTML") {
                tagName += `:nth-child(${index(element) + 1})`;
              }
              names.unshift(tagName);
              element = element.parentNode;
            }
          }
          return names.join(" > ");
        }
        function escape(css2) {
          return isString(css2) ? CSS.escape(css2) : "";
        }
        function on(...args) {
          let [targets, types, selector, listener, useCapture = false] = getArgs(args);
          if (listener.length > 1) {
            listener = detail(listener);
          }
          if (useCapture == null ? void 0 : useCapture.self) {
            listener = selfFilter(listener);
          }
          if (selector) {
            listener = delegate(selector, listener);
          }
          for (const type of types) {
            for (const target of targets) {
              target.addEventListener(type, listener, useCapture);
            }
          }
          return () => off(targets, types, listener, useCapture);
        }
        function off(...args) {
          let [targets, types, , listener, useCapture = false] = getArgs(args);
          for (const type of types) {
            for (const target of targets) {
              target.removeEventListener(type, listener, useCapture);
            }
          }
        }
        function once(...args) {
          const [element, types, selector, listener, useCapture = false, condition] = getArgs(args);
          const off2 = on(
            element,
            types,
            selector,
            (e) => {
              const result = !condition || condition(e);
              if (result) {
                off2();
                listener(e, result);
              }
            },
            useCapture
          );
          return off2;
        }
        function trigger(targets, event, detail2) {
          return toEventTargets(targets).every(
            (target) => target.dispatchEvent(createEvent(event, true, true, detail2))
          );
        }
        function createEvent(e, bubbles = true, cancelable = false, detail2) {
          if (isString(e)) {
            e = new CustomEvent(e, { bubbles, cancelable, detail: detail2 });
          }
          return e;
        }
        function getArgs(args) {
          args[0] = toEventTargets(args[0]);
          if (isString(args[1])) {
            args[1] = args[1].split(" ");
          }
          if (isFunction(args[2])) {
            args.splice(2, 0, false);
          }
          return args;
        }
        function delegate(selector, listener) {
          return (e) => {
            const current = selector[0] === ">" ? findAll(selector, e.currentTarget).reverse().find((element) => element.contains(e.target)) : e.target.closest(selector);
            if (current) {
              e.current = current;
              listener.call(this, e);
              delete e.current;
            }
          };
        }
        function detail(listener) {
          return (e) => isArray(e.detail) ? listener(e, ...e.detail) : listener(e);
        }
        function selfFilter(listener) {
          return function(e) {
            if (e.target === e.currentTarget || e.target === e.current) {
              return listener.call(null, e);
            }
          };
        }
        function isEventTarget(target) {
          return target && "addEventListener" in target;
        }
        function toEventTarget(target) {
          return isEventTarget(target) ? target : toNode(target);
        }
        function toEventTargets(target) {
          return isArray(target) ? target.map(toEventTarget).filter(Boolean) : isString(target) ? findAll(target) : isEventTarget(target) ? [target] : toNodes(target);
        }
        function isTouch(e) {
          return e.pointerType === "touch" || !!e.touches;
        }
        function getEventPos(e) {
          var _a, _b;
          const { clientX: x, clientY: y } = ((_a = e.touches) == null ? void 0 : _a[0]) || ((_b = e.changedTouches) == null ? void 0 : _b[0]) || e;
          return { x, y };
        }
        const cssNumber = {
          "animation-iteration-count": true,
          "column-count": true,
          "fill-opacity": true,
          "flex-grow": true,
          "flex-shrink": true,
          "font-weight": true,
          "line-height": true,
          opacity: true,
          order: true,
          orphans: true,
          "stroke-dasharray": true,
          "stroke-dashoffset": true,
          widows: true,
          "z-index": true,
          zoom: true
        };
        function css(element, property, value, priority) {
          const elements = toNodes(element);
          for (const element2 of elements) {
            if (isString(property)) {
              property = propName(property);
              if (isUndefined(value)) {
                return getComputedStyle(element2).getPropertyValue(property);
              } else {
                element2.style.setProperty(
                  property,
                  isNumeric(value) && !cssNumber[property] ? `${value}px` : value || isNumber(value) ? value : "",
                  priority
                );
              }
            } else if (isArray(property)) {
              const props2 = {};
              for (const prop of property) {
                props2[prop] = css(element2, prop);
              }
              return props2;
            } else if (isObject(property)) {
              for (const prop in property) {
                css(element2, prop, property[prop], value);
              }
            }
          }
          return elements[0];
        }
        const propName = memoize((name) => vendorPropName(name));
        function vendorPropName(name) {
          if (startsWith(name, "--")) {
            return name;
          }
          name = hyphenate(name);
          const { style } = document.documentElement;
          if (name in style) {
            return name;
          }
          for (const prefix of ["webkit", "moz"]) {
            const prefixedName = `-${prefix}-${name}`;
            if (prefixedName in style) {
              return prefixedName;
            }
          }
        }
        const clsTransition = "uk-transition";
        const transitionEnd = "transitionend";
        const transitionCanceled = "transitioncanceled";
        function transition$1(element, props2, duration = 400, timing = "linear") {
          duration = Math.round(duration);
          return Promise.all(
            toNodes(element).map(
              (element2) => new Promise((resolve, reject) => {
                for (const name in props2) {
                  const value = css(element2, name);
                  if (value === "") {
                    css(element2, name, value);
                  }
                }
                const timer = setTimeout(() => trigger(element2, transitionEnd), duration);
                once(
                  element2,
                  [transitionEnd, transitionCanceled],
                  ({ type }) => {
                    clearTimeout(timer);
                    removeClass(element2, clsTransition);
                    css(element2, {
                      transitionProperty: "",
                      transitionDuration: "",
                      transitionTimingFunction: ""
                    });
                    type === transitionCanceled ? reject() : resolve(element2);
                  },
                  { self: true }
                );
                addClass(element2, clsTransition);
                css(element2, {
                  transitionProperty: Object.keys(props2).map(propName).join(","),
                  transitionDuration: `${duration}ms`,
                  transitionTimingFunction: timing,
                  ...props2
                });
              })
            )
          );
        }
        const Transition = {
          start: transition$1,
          async stop(element) {
            trigger(element, transitionEnd);
            await Promise.resolve();
          },
          async cancel(element) {
            trigger(element, transitionCanceled);
            await Promise.resolve();
          },
          inProgress(element) {
            return hasClass(element, clsTransition);
          }
        };
        const animationPrefix = "uk-animation-";
        const animationEnd = "animationend";
        const animationCanceled = "animationcanceled";
        function animate$2(element, animation, duration = 200, origin, out) {
          return Promise.all(
            toNodes(element).map(
              (element2) => new Promise((resolve, reject) => {
                trigger(element2, animationCanceled);
                const timer = setTimeout(() => trigger(element2, animationEnd), duration);
                once(
                  element2,
                  [animationEnd, animationCanceled],
                  ({ type }) => {
                    clearTimeout(timer);
                    type === animationCanceled ? reject() : resolve(element2);
                    css(element2, "animationDuration", "");
                    removeClasses(element2, `${animationPrefix}\\S*`);
                  },
                  { self: true }
                );
                css(element2, "animationDuration", `${duration}ms`);
                addClass(element2, animation, animationPrefix + (out ? "leave" : "enter"));
                if (startsWith(animation, animationPrefix)) {
                  origin && addClass(element2, `uk-transform-origin-${origin}`);
                  out && addClass(element2, `${animationPrefix}reverse`);
                }
              })
            )
          );
        }
        const inProgressRe = new RegExp(`${animationPrefix}(enter|leave)`);
        const Animation = {
          in: animate$2,
          out(element, animation, duration, origin) {
            return animate$2(element, animation, duration, origin, true);
          },
          inProgress(element) {
            return inProgressRe.test(attr(element, "class"));
          },
          cancel(element) {
            trigger(element, animationCanceled);
          }
        };
        function ready(fn) {
          if (document.readyState !== "loading") {
            fn();
            return;
          }
          once(document, "DOMContentLoaded", fn);
        }
        function isTag(element, ...tagNames) {
          return tagNames.some((tagName) => {
            var _a;
            return ((_a = element == null ? void 0 : element.tagName) == null ? void 0 : _a.toLowerCase()) === tagName.toLowerCase();
          });
        }
        function empty(element) {
          element = $(element);
          element.innerHTML = "";
          return element;
        }
        function html(parent2, html2) {
          return isUndefined(html2) ? $(parent2).innerHTML : append(empty(parent2), html2);
        }
        const prepend = applyFn("prepend");
        const append = applyFn("append");
        const before = applyFn("before");
        const after = applyFn("after");
        function applyFn(fn) {
          return function(ref, element) {
            var _a;
            const nodes = toNodes(isString(element) ? fragment(element) : element);
            (_a = $(ref)) == null ? void 0 : _a[fn](...nodes);
            return unwrapSingle(nodes);
          };
        }
        function remove$1(element) {
          toNodes(element).forEach((element2) => element2.remove());
        }
        function wrapAll(element, structure) {
          structure = toNode(before(element, structure));
          while (structure.firstElementChild) {
            structure = structure.firstElementChild;
          }
          append(structure, element);
          return structure;
        }
        function wrapInner(element, structure) {
          return toNodes(
            toNodes(element).map(
              (element2) => element2.hasChildNodes() ? wrapAll(toArray(element2.childNodes), structure) : append(element2, structure)
            )
          );
        }
        function unwrap(element) {
          toNodes(element).map(parent).filter((value, index2, self2) => self2.indexOf(value) === index2).forEach((parent2) => parent2.replaceWith(...parent2.childNodes));
        }
        const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
        function fragment(html2) {
          const matches2 = singleTagRe.exec(html2);
          if (matches2) {
            return document.createElement(matches2[1]);
          }
          const container = document.createElement("template");
          container.innerHTML = html2.trim();
          return unwrapSingle(container.content.childNodes);
        }
        function unwrapSingle(nodes) {
          return nodes.length > 1 ? nodes : nodes[0];
        }
        function apply(node, fn) {
          if (!isElement(node)) {
            return;
          }
          fn(node);
          node = node.firstElementChild;
          while (node) {
            const next = node.nextElementSibling;
            apply(node, fn);
            node = next;
          }
        }
        function $(selector, context) {
          return isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
        }
        function $$(selector, context) {
          return isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
        }
        function isHtml(str) {
          return isString(str) && startsWith(str.trim(), "<");
        }
        const dirs$1 = {
          width: ["left", "right"],
          height: ["top", "bottom"]
        };
        function dimensions$1(element) {
          const rect = isElement(element) ? toNode(element).getBoundingClientRect() : { height: height(element), width: width(element), top: 0, left: 0 };
          return {
            height: rect.height,
            width: rect.width,
            top: rect.top,
            left: rect.left,
            bottom: rect.top + rect.height,
            right: rect.left + rect.width
          };
        }
        function offset(element, coordinates) {
          if (coordinates) {
            css(element, { left: 0, top: 0 });
          }
          const currentOffset = dimensions$1(element);
          if (element) {
            const { scrollY, scrollX } = toWindow(element);
            const offsetBy = { height: scrollY, width: scrollX };
            for (const dir in dirs$1) {
              for (const prop of dirs$1[dir]) {
                currentOffset[prop] += offsetBy[dir];
              }
            }
          }
          if (!coordinates) {
            return currentOffset;
          }
          for (const prop of ["left", "top"]) {
            css(element, prop, coordinates[prop] - currentOffset[prop]);
          }
        }
        function position(element) {
          let { top, left } = offset(element);
          const {
            ownerDocument: { body, documentElement },
            offsetParent
          } = toNode(element);
          let parent2 = offsetParent || documentElement;
          while (parent2 && (parent2 === body || parent2 === documentElement) && css(parent2, "position") === "static") {
            parent2 = parent2.parentNode;
          }
          if (isElement(parent2)) {
            const parentOffset = offset(parent2);
            top -= parentOffset.top + toFloat(css(parent2, "borderTopWidth"));
            left -= parentOffset.left + toFloat(css(parent2, "borderLeftWidth"));
          }
          return {
            top: top - toFloat(css(element, "marginTop")),
            left: left - toFloat(css(element, "marginLeft"))
          };
        }
        function offsetPosition(element) {
          element = toNode(element);
          const offset2 = [element.offsetTop, element.offsetLeft];
          while (element = element.offsetParent) {
            offset2[0] += element.offsetTop + toFloat(css(element, `borderTopWidth`));
            offset2[1] += element.offsetLeft + toFloat(css(element, `borderLeftWidth`));
            if (css(element, "position") === "fixed") {
              const win = toWindow(element);
              offset2[0] += win.scrollY;
              offset2[1] += win.scrollX;
              return offset2;
            }
          }
          return offset2;
        }
        const height = dimension("height");
        const width = dimension("width");
        function dimension(prop) {
          const propName2 = ucfirst(prop);
          return (element, value) => {
            if (isUndefined(value)) {
              if (isWindow(element)) {
                return element[`inner${propName2}`];
              }
              if (isDocument(element)) {
                const doc = element.documentElement;
                return Math.max(doc[`offset${propName2}`], doc[`scroll${propName2}`]);
              }
              element = toNode(element);
              value = css(element, prop);
              value = value === "auto" ? element[`offset${propName2}`] : toFloat(value) || 0;
              return value - boxModelAdjust(element, prop);
            } else {
              return css(
                element,
                prop,
                !value && value !== 0 ? "" : +value + boxModelAdjust(element, prop) + "px"
              );
            }
          };
        }
        function boxModelAdjust(element, prop, sizing = "border-box") {
          return css(element, "boxSizing") === sizing ? sumBy(
            dirs$1[prop].map(ucfirst),
            (prop2) => toFloat(css(element, `padding${prop2}`)) + toFloat(css(element, `border${prop2}Width`))
          ) : 0;
        }
        function flipPosition(pos) {
          for (const dir in dirs$1) {
            for (const i in dirs$1[dir]) {
              if (dirs$1[dir][i] === pos) {
                return dirs$1[dir][1 - i];
              }
            }
          }
          return pos;
        }
        function toPx(value, property = "width", element = window, offsetDim = false) {
          if (!isString(value)) {
            return toFloat(value);
          }
          return sumBy(parseCalc(value), (value2) => {
            const unit = parseUnit(value2);
            return unit ? percent(
              unit === "vh" ? getViewportHeight() : unit === "vw" ? width(toWindow(element)) : offsetDim ? element[`offset${ucfirst(property)}`] : dimensions$1(element)[property],
              value2
            ) : value2;
          });
        }
        const calcRe = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g;
        const parseCalc = memoize((calc) => calc.toString().replace(/\s/g, "").match(calcRe) || []);
        const unitRe$1 = /(?:v[hw]|%)$/;
        const parseUnit = memoize((str) => (str.match(unitRe$1) || [])[0]);
        function percent(base, value) {
          return base * toFloat(value) / 100;
        }
        let vh;
        let vhEl;
        function getViewportHeight() {
          if (vh) {
            return vh;
          }
          if (!vhEl) {
            vhEl = $("<div>");
            css(vhEl, {
              height: "100vh",
              position: "fixed"
            });
            on(window, "resize", () => vh = null);
          }
          append(document.body, vhEl);
          vh = vhEl.clientHeight;
          remove$1(vhEl);
          return vh;
        }
        const inBrowser = typeof window !== "undefined";
        const isRtl = inBrowser && document.dir === "rtl";
        const hasTouch = inBrowser && "ontouchstart" in window;
        const hasPointerEvents = inBrowser && window.PointerEvent;
        const pointerDown$1 = hasPointerEvents ? "pointerdown" : hasTouch ? "touchstart" : "mousedown";
        const pointerMove$1 = hasPointerEvents ? "pointermove" : hasTouch ? "touchmove" : "mousemove";
        const pointerUp$1 = hasPointerEvents ? "pointerup" : hasTouch ? "touchend" : "mouseup";
        const pointerEnter = hasPointerEvents ? "pointerenter" : hasTouch ? "" : "mouseenter";
        const pointerLeave = hasPointerEvents ? "pointerleave" : hasTouch ? "" : "mouseleave";
        const pointerCancel = hasPointerEvents ? "pointercancel" : "touchcancel";
        const fastdom = {
          reads: [],
          writes: [],
          read(task) {
            this.reads.push(task);
            scheduleFlush();
            return task;
          },
          write(task) {
            this.writes.push(task);
            scheduleFlush();
            return task;
          },
          clear(task) {
            remove(this.reads, task);
            remove(this.writes, task);
          },
          flush
        };
        function flush(recursion) {
          runTasks(fastdom.reads);
          runTasks(fastdom.writes.splice(0));
          fastdom.scheduled = false;
          if (fastdom.reads.length || fastdom.writes.length) {
            scheduleFlush(recursion + 1);
          }
        }
        const RECURSION_LIMIT = 4;
        function scheduleFlush(recursion) {
          if (fastdom.scheduled) {
            return;
          }
          fastdom.scheduled = true;
          if (recursion && recursion < RECURSION_LIMIT) {
            Promise.resolve().then(() => flush(recursion));
          } else {
            requestAnimationFrame(() => flush(1));
          }
        }
        function runTasks(tasks) {
          let task;
          while (task = tasks.shift()) {
            try {
              task();
            } catch (e) {
              console.error(e);
            }
          }
        }
        function remove(array, item) {
          const index2 = array.indexOf(item);
          return ~index2 && array.splice(index2, 1);
        }
        class MouseTracker {
          init() {
            this.positions = [];
            let position2;
            this.unbind = on(document, "mousemove", (e) => position2 = getEventPos(e));
            this.interval = setInterval(() => {
              if (!position2) {
                return;
              }
              this.positions.push(position2);
              if (this.positions.length > 5) {
                this.positions.shift();
              }
            }, 50);
          }
          cancel() {
            var _a;
            (_a = this.unbind) == null ? void 0 : _a.call(this);
            clearInterval(this.interval);
          }
          movesTo(target) {
            if (!this.positions || this.positions.length < 2) {
              return false;
            }
            const p = dimensions$1(target);
            const { left, right, top, bottom } = p;
            const [prevPosition] = this.positions;
            const position2 = last(this.positions);
            const path = [prevPosition, position2];
            if (pointInRect(position2, p)) {
              return false;
            }
            const diagonals = [
              [
                { x: left, y: top },
                { x: right, y: bottom }
              ],
              [
                { x: left, y: bottom },
                { x: right, y: top }
              ]
            ];
            return diagonals.some((diagonal) => {
              const intersection2 = intersect(path, diagonal);
              return intersection2 && pointInRect(intersection2, p);
            });
          }
        }
        function intersect([{ x: x1, y: y1 }, { x: x2, y: y2 }], [{ x: x3, y: y3 }, { x: x4, y: y4 }]) {
          const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
          if (denominator === 0) {
            return false;
          }
          const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
          if (ua < 0) {
            return false;
          }
          return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1) };
        }
        function observeIntersection(targets, cb, options = {}, { intersecting = true } = {}) {
          const observer2 = new IntersectionObserver(
            intersecting ? (entries, observer22) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                cb(entries, observer22);
              }
            } : cb,
            options
          );
          for (const el of toNodes(targets)) {
            observer2.observe(el);
          }
          return observer2;
        }
        const hasResizeObserver = inBrowser && window.ResizeObserver;
        function observeResize(targets, cb, options = { box: "border-box" }) {
          if (hasResizeObserver) {
            return observe$1(ResizeObserver, targets, cb, options);
          }
          const off2 = [on(window, "load resize", cb), on(document, "loadedmetadata load", cb, true)];
          return { disconnect: () => off2.map((cb2) => cb2()) };
        }
        function observeViewportResize(cb) {
          return { disconnect: on([window, window.visualViewport], "resize", cb) };
        }
        function observeMutation(targets, cb, options) {
          return observe$1(MutationObserver, targets, cb, options);
        }
        function observe$1(Observer, targets, cb, options) {
          const observer2 = new Observer(cb);
          for (const el of toNodes(targets)) {
            observer2.observe(el, options);
          }
          return observer2;
        }
        function play(el) {
          if (isIFrame(el)) {
            call(el, { func: "playVideo", method: "play" });
          }
          if (isHTML5(el)) {
            el.play();
          }
        }
        function pause(el) {
          if (isIFrame(el)) {
            call(el, { func: "pauseVideo", method: "pause" });
          }
          if (isHTML5(el)) {
            el.pause();
          }
        }
        function mute(el) {
          if (isIFrame(el)) {
            call(el, { func: "mute", method: "setVolume", value: 0 });
          }
          if (isHTML5(el)) {
            el.muted = true;
          }
        }
        function isVideo(el) {
          return isHTML5(el) || isIFrame(el);
        }
        function isHTML5(el) {
          return isTag(el, "video");
        }
        function isIFrame(el) {
          return isTag(el, "iframe") && (isYoutube(el) || isVimeo(el));
        }
        function isYoutube(el) {
          return !!el.src.match(
            /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
          );
        }
        function isVimeo(el) {
          return !!el.src.match(/vimeo\.com\/video\/.*/);
        }
        async function call(el, cmd) {
          await enableApi(el);
          post(el, cmd);
        }
        function post(el, cmd) {
          el.contentWindow.postMessage(JSON.stringify({ event: "command", ...cmd }), "*");
        }
        const stateKey = "_ukPlayer";
        let counter = 0;
        function enableApi(el) {
          if (el[stateKey]) {
            return el[stateKey];
          }
          const youtube = isYoutube(el);
          const vimeo = isVimeo(el);
          const id2 = ++counter;
          let poller;
          return el[stateKey] = new Promise((resolve) => {
            youtube && once(el, "load", () => {
              const listener = () => post(el, { event: "listening", id: id2 });
              poller = setInterval(listener, 100);
              listener();
            });
            once(window, "message", resolve, false, ({ data: data2 }) => {
              try {
                data2 = JSON.parse(data2);
                return youtube && (data2 == null ? void 0 : data2.id) === id2 && data2.event === "onReady" || vimeo && Number(data2 == null ? void 0 : data2.player_id) === id2;
              } catch (e) {
              }
            });
            el.src = `${el.src}${includes(el.src, "?") ? "&" : "?"}${youtube ? "enablejsapi=1" : `api=1&player_id=${id2}`}`;
          }).then(() => clearInterval(poller));
        }
        function isInView(element, offsetTop = 0, offsetLeft = 0) {
          if (!isVisible(element)) {
            return false;
          }
          return intersectRect(
            ...overflowParents(element).map((parent2) => {
              const { top, left, bottom, right } = offsetViewport(parent2);
              return {
                top: top - offsetTop,
                left: left - offsetLeft,
                bottom: bottom + offsetTop,
                right: right + offsetLeft
              };
            }).concat(offset(element))
          );
        }
        function scrollIntoView(element, { offset: offsetBy = 0 } = {}) {
          const parents2 = isVisible(element) ? scrollParents(element, false, ["hidden"]) : [];
          return parents2.reduce(
            (fn, scrollElement, i) => {
              const { scrollTop, scrollHeight, offsetHeight } = scrollElement;
              const viewport2 = offsetViewport(scrollElement);
              const maxScroll = scrollHeight - viewport2.height;
              const { height: elHeight, top: elTop } = parents2[i - 1] ? offsetViewport(parents2[i - 1]) : offset(element);
              let top = Math.ceil(elTop - viewport2.top - offsetBy + scrollTop);
              if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
                top += offsetBy;
              } else {
                offsetBy = 0;
              }
              if (top > maxScroll) {
                offsetBy -= top - maxScroll;
                top = maxScroll;
              } else if (top < 0) {
                offsetBy -= top;
                top = 0;
              }
              return () => scrollTo(scrollElement, top - scrollTop, element, maxScroll).then(fn);
            },
            () => Promise.resolve()
          )();
          function scrollTo(element2, top, targetEl, maxScroll) {
            return new Promise((resolve) => {
              const scroll2 = element2.scrollTop;
              const duration = getDuration(Math.abs(top));
              const start = Date.now();
              const isScrollingElement = scrollingElement(element2) === element2;
              const targetTop = offset(targetEl).top + (isScrollingElement ? 0 : scroll2);
              let prev = 0;
              let frames = 15;
              (function step() {
                const percent2 = ease2(clamp((Date.now() - start) / duration));
                let diff = 0;
                if (parents2[0] === element2 && scroll2 + top < maxScroll) {
                  diff = offset(targetEl).top + (isScrollingElement ? 0 : element2.scrollTop) - targetTop;
                  const coverEl = getCoveringElement(targetEl);
                  diff -= coverEl ? offset(coverEl).height : 0;
                }
                element2.scrollTop = Math[top + diff > 0 ? "max" : "min"](
                  element2.scrollTop,
                  scroll2 + (top + diff) * percent2
                );
                if (percent2 === 1 && (prev === diff || !frames--)) {
                  resolve();
                } else {
                  prev = diff;
                  requestAnimationFrame(step);
                }
              })();
            });
          }
          function getDuration(dist) {
            return 40 * Math.pow(dist, 0.375);
          }
          function ease2(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
          }
        }
        function scrolledOver(element, startOffset = 0, endOffset = 0) {
          if (!isVisible(element)) {
            return 0;
          }
          const scrollElement = scrollParent(element, true);
          const { scrollHeight, scrollTop } = scrollElement;
          const { height: viewportHeight } = offsetViewport(scrollElement);
          const maxScroll = scrollHeight - viewportHeight;
          const elementOffsetTop = offsetPosition(element)[0] - offsetPosition(scrollElement)[0];
          const start = Math.max(0, elementOffsetTop - viewportHeight + startOffset);
          const end = Math.min(maxScroll, elementOffsetTop + element.offsetHeight - endOffset);
          return start < end ? clamp((scrollTop - start) / (end - start)) : 1;
        }
        function scrollParents(element, scrollable = false, props2 = []) {
          const scrollEl = scrollingElement(element);
          let ancestors = parents(element).reverse();
          ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);
          const fixedIndex = findIndex(ancestors, (el) => css(el, "position") === "fixed");
          if (~fixedIndex) {
            ancestors = ancestors.slice(fixedIndex);
          }
          return [scrollEl].concat(
            ancestors.filter(
              (parent2) => css(parent2, "overflow").split(" ").some((prop) => includes(["auto", "scroll", ...props2], prop)) && (!scrollable || parent2.scrollHeight > offsetViewport(parent2).height)
            )
          ).reverse();
        }
        function scrollParent(...args) {
          return scrollParents(...args)[0];
        }
        function overflowParents(element) {
          return scrollParents(element, false, ["hidden", "clip"]);
        }
        function offsetViewport(scrollElement) {
          const window2 = toWindow(scrollElement);
          let viewportElement = scrollElement === scrollingElement(scrollElement) ? window2 : scrollElement;
          if (isWindow(viewportElement) && window2.visualViewport) {
            let { height: height2, width: width2, scale, pageTop: top, pageLeft: left } = window2.visualViewport;
            height2 = Math.round(height2 * scale);
            width2 = Math.round(width2 * scale);
            return { height: height2, width: width2, top, left, bottom: top + height2, right: left + width2 };
          }
          let rect = offset(viewportElement);
          if (css(viewportElement, "display") === "inline") {
            return rect;
          }
          for (let [prop, dir, start, end] of [
            ["width", "x", "left", "right"],
            ["height", "y", "top", "bottom"]
          ]) {
            if (isWindow(viewportElement)) {
              viewportElement = scrollElement.ownerDocument;
            } else {
              rect[start] += toFloat(css(viewportElement, `border-${start}-width`));
            }
            const subpixel = rect[prop] % 1;
            rect[prop] = rect[dir] = viewportElement[`client${ucfirst(prop)}`] - (subpixel ? subpixel < 0.5 ? -subpixel : 1 - subpixel : 0);
            rect[end] = rect[prop] + rect[start];
          }
          return rect;
        }
        function getCoveringElement(target) {
          const { left, width: width2, top } = dimensions$1(target);
          return target.ownerDocument.elementsFromPoint(left + width2 / 2, top).find(
            (el) => !el.contains(target) && // If e.g. Offcanvas is not yet closed
            !hasClass(el, "uk-togglable-leave") && (hasPosition(el, "fixed") && zIndex(
              parents(target).reverse().find((parent2) => !parent2.contains(el) && !hasPosition(parent2, "static"))
            ) < zIndex(el) || hasPosition(el, "sticky") && parent(el).contains(target))
          );
        }
        function zIndex(element) {
          return toFloat(css(element, "zIndex"));
        }
        function hasPosition(element, position2) {
          return css(element, "position") === position2;
        }
        function scrollingElement(element) {
          return toWindow(element).document.scrollingElement;
        }
        const dirs = [
          ["width", "x", "left", "right"],
          ["height", "y", "top", "bottom"]
        ];
        function positionAt(element, target, options) {
          options = {
            attach: {
              element: ["left", "top"],
              target: ["left", "top"],
              ...options.attach
            },
            offset: [0, 0],
            placement: [],
            ...options
          };
          if (!isArray(target)) {
            target = [target, target];
          }
          offset(element, getPosition(element, target, options));
        }
        function getPosition(element, target, options) {
          const position2 = attachTo(element, target, options);
          const { boundary, viewportOffset = 0, placement } = options;
          let offsetPosition2 = position2;
          for (const [i, [prop, , start, end]] of Object.entries(dirs)) {
            const viewport2 = getViewport$2(element, target[i], viewportOffset, boundary, i);
            if (isWithin(position2, viewport2, i)) {
              continue;
            }
            let offsetBy = 0;
            if (placement[i] === "flip") {
              const attach = options.attach.target[i];
              if (attach === end && position2[end] <= viewport2[end] || attach === start && position2[start] >= viewport2[start]) {
                continue;
              }
              offsetBy = flip(element, target, options, i)[start] - position2[start];
              const scrollArea = getScrollArea(element, target[i], viewportOffset, i);
              if (!isWithin(applyOffset(position2, offsetBy, i), scrollArea, i)) {
                if (isWithin(position2, scrollArea, i)) {
                  continue;
                }
                if (options.recursion) {
                  return false;
                }
                const newPos = flipAxis(element, target, options);
                if (newPos && isWithin(newPos, scrollArea, 1 - i)) {
                  return newPos;
                }
                continue;
              }
            } else if (placement[i] === "shift") {
              const targetDim = offset(target[i]);
              const { offset: elOffset } = options;
              offsetBy = clamp(
                clamp(position2[start], viewport2[start], viewport2[end] - position2[prop]),
                targetDim[start] - position2[prop] + elOffset[i],
                targetDim[end] - elOffset[i]
              ) - position2[start];
            }
            offsetPosition2 = applyOffset(offsetPosition2, offsetBy, i);
          }
          return offsetPosition2;
        }
        function attachTo(element, target, options) {
          let { attach, offset: offsetBy } = {
            attach: {
              element: ["left", "top"],
              target: ["left", "top"],
              ...options.attach
            },
            offset: [0, 0],
            ...options
          };
          let elOffset = offset(element);
          for (const [i, [prop, , start, end]] of Object.entries(dirs)) {
            const targetOffset = attach.target[i] === attach.element[i] ? offsetViewport(target[i]) : offset(target[i]);
            elOffset = applyOffset(
              elOffset,
              targetOffset[start] - elOffset[start] + moveBy(attach.target[i], end, targetOffset[prop]) - moveBy(attach.element[i], end, elOffset[prop]) + +offsetBy[i],
              i
            );
          }
          return elOffset;
        }
        function applyOffset(position2, offset2, i) {
          const [, dir, start, end] = dirs[i];
          const newPos = { ...position2 };
          newPos[start] = position2[dir] = position2[start] + offset2;
          newPos[end] += offset2;
          return newPos;
        }
        function moveBy(attach, end, dim) {
          return attach === "center" ? dim / 2 : attach === end ? dim : 0;
        }
        function getViewport$2(element, target, viewportOffset, boundary, i) {
          let viewport2 = getIntersectionArea(...commonScrollParents(element, target).map(offsetViewport));
          if (viewportOffset) {
            viewport2[dirs[i][2]] += viewportOffset;
            viewport2[dirs[i][3]] -= viewportOffset;
          }
          if (boundary) {
            viewport2 = getIntersectionArea(
              viewport2,
              offset(isArray(boundary) ? boundary[i] : boundary)
            );
          }
          return viewport2;
        }
        function getScrollArea(element, target, viewportOffset, i) {
          const [prop, axis, start, end] = dirs[i];
          const [scrollElement] = commonScrollParents(element, target);
          const viewport2 = offsetViewport(scrollElement);
          if (["auto", "scroll"].includes(css(scrollElement, `overflow-${axis}`))) {
            viewport2[start] -= scrollElement[`scroll${ucfirst(start)}`];
            viewport2[end] = viewport2[start] + scrollElement[`scroll${ucfirst(prop)}`];
          }
          viewport2[start] += viewportOffset;
          viewport2[end] -= viewportOffset;
          return viewport2;
        }
        function commonScrollParents(element, target) {
          return overflowParents(target).filter((parent2) => parent2.contains(element));
        }
        function getIntersectionArea(...rects) {
          let area = {};
          for (const rect of rects) {
            for (const [, , start, end] of dirs) {
              area[start] = Math.max(area[start] || 0, rect[start]);
              area[end] = Math.min(...[area[end], rect[end]].filter(Boolean));
            }
          }
          return area;
        }
        function isWithin(positionA, positionB, i) {
          const [, , start, end] = dirs[i];
          return positionA[start] >= positionB[start] && positionA[end] <= positionB[end];
        }
        function flip(element, target, { offset: offset2, attach }, i) {
          return attachTo(element, target, {
            attach: {
              element: flipAttach(attach.element, i),
              target: flipAttach(attach.target, i)
            },
            offset: flipOffset(offset2, i)
          });
        }
        function flipAxis(element, target, options) {
          return getPosition(element, target, {
            ...options,
            attach: {
              element: options.attach.element.map(flipAttachAxis).reverse(),
              target: options.attach.target.map(flipAttachAxis).reverse()
            },
            offset: options.offset.reverse(),
            placement: options.placement.reverse(),
            recursion: true
          });
        }
        function flipAttach(attach, i) {
          const newAttach = [...attach];
          const index2 = dirs[i].indexOf(attach[i]);
          if (~index2) {
            newAttach[i] = dirs[i][1 - index2 % 2 + 2];
          }
          return newAttach;
        }
        function flipAttachAxis(prop) {
          for (let i = 0; i < dirs.length; i++) {
            const index2 = dirs[i].indexOf(prop);
            if (~index2) {
              return dirs[1 - i][index2 % 2 + 2];
            }
          }
        }
        function flipOffset(offset2, i) {
          offset2 = [...offset2];
          offset2[i] *= -1;
          return offset2;
        }
        var util = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          $,
          $$,
          Animation,
          Dimensions,
          MouseTracker,
          Transition,
          addClass,
          after,
          append,
          apply,
          assign,
          attr,
          before,
          boxModelAdjust,
          camelize,
          children,
          clamp,
          closest,
          createEvent,
          css,
          data,
          dimensions: dimensions$1,
          each,
          empty,
          endsWith,
          escape,
          fastdom,
          filter: filter$1,
          find,
          findAll,
          findIndex,
          flipPosition,
          fragment,
          getCoveringElement,
          getEventPos,
          getIndex,
          getTargetedElement,
          hasAttr,
          hasClass,
          hasOwn,
          hasTouch,
          height,
          html,
          hyphenate,
          inBrowser,
          includes,
          index,
          intersectRect,
          isArray,
          isBoolean,
          isDocument,
          isElement,
          isEmpty,
          isEqual,
          isFocusable,
          isFunction,
          isInView,
          isInput,
          isNode,
          isNumber,
          isNumeric,
          isObject,
          isPlainObject,
          isRtl,
          isSameSiteAnchor,
          isString,
          isTag,
          isTouch,
          isUndefined,
          isVideo,
          isVisible,
          isVoidElement,
          isWindow,
          last,
          matches,
          memoize,
          mute,
          noop,
          observeIntersection,
          observeMutation,
          observeResize,
          observeViewportResize,
          off,
          offset,
          offsetPosition,
          offsetViewport,
          on,
          once,
          overflowParents,
          parent,
          parents,
          pause,
          pick,
          play,
          pointInRect,
          pointerCancel,
          pointerDown: pointerDown$1,
          pointerEnter,
          pointerLeave,
          pointerMove: pointerMove$1,
          pointerUp: pointerUp$1,
          position,
          positionAt,
          prepend,
          propName,
          query,
          queryAll,
          ready,
          remove: remove$1,
          removeAttr,
          removeClass,
          removeClasses,
          replaceClass,
          scrollIntoView,
          scrollParent,
          scrollParents,
          scrolledOver,
          selFocusable,
          selInput,
          sortBy,
          startsWith,
          sumBy,
          swap,
          toArray,
          toBoolean,
          toEventTargets,
          toFloat,
          toNode,
          toNodes,
          toNumber,
          toPx,
          toWindow,
          toggleClass,
          trigger,
          ucfirst,
          uniqueBy,
          unwrap,
          width,
          within,
          wrapAll,
          wrapInner
        });
        var Class = {
          connected() {
            addClass(this.$el, this.$options.id);
          }
        };
        const units = ["days", "hours", "minutes", "seconds"];
        var countdown = {
          mixins: [Class],
          props: {
            date: String,
            clsWrapper: String,
            role: String
          },
          data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%",
            role: "timer"
          },
          connected() {
            attr(this.$el, "role", this.role);
            this.date = toFloat(Date.parse(this.$props.date));
            this.end = false;
            this.start();
          },
          disconnected() {
            this.stop();
          },
          events: {
            name: "visibilitychange",
            el: () => document,
            handler() {
              if (document.hidden) {
                this.stop();
              } else {
                this.start();
              }
            }
          },
          methods: {
            start() {
              this.stop();
              this.update();
              if (!this.timer) {
                trigger(this.$el, "countdownstart");
                this.timer = setInterval(this.update, 1e3);
              }
            },
            stop() {
              if (this.timer) {
                clearInterval(this.timer);
                trigger(this.$el, "countdownstop");
                this.timer = null;
              }
            },
            update() {
              const timespan = getTimeSpan(this.date);
              if (!timespan.total) {
                this.stop();
                if (!this.end) {
                  trigger(this.$el, "countdownend");
                  this.end = true;
                }
              }
              for (const unit of units) {
                const el = $(this.clsWrapper.replace("%unit%", unit), this.$el);
                if (!el) {
                  continue;
                }
                let digits = String(Math.trunc(timespan[unit]));
                digits = digits.length < 2 ? `0${digits}` : digits;
                if (el.textContent !== digits) {
                  digits = digits.split("");
                  if (digits.length !== el.children.length) {
                    html(el, digits.map(() => "<span></span>").join(""));
                  }
                  digits.forEach((digit, i) => el.children[i].textContent = digit);
                }
              }
            }
          }
        };
        function getTimeSpan(date) {
          const total = Math.max(0, date - Date.now()) / 1e3;
          return {
            total,
            seconds: total % 60,
            minutes: total / 60 % 60,
            hours: total / 60 / 60 % 24,
            days: total / 60 / 60 / 24
          };
        }
        const strats = {};
        strats.events = strats.watch = strats.observe = strats.created = strats.beforeConnect = strats.connected = strats.beforeDisconnect = strats.disconnected = strats.destroy = concatStrat;
        strats.args = function(parentVal, childVal) {
          return childVal !== false && concatStrat(childVal || parentVal);
        };
        strats.update = function(parentVal, childVal) {
          return sortBy(
            concatStrat(parentVal, isFunction(childVal) ? { read: childVal } : childVal),
            "order"
          );
        };
        strats.props = function(parentVal, childVal) {
          if (isArray(childVal)) {
            const value = {};
            for (const key of childVal) {
              value[key] = String;
            }
            childVal = value;
          }
          return strats.methods(parentVal, childVal);
        };
        strats.computed = strats.methods = function(parentVal, childVal) {
          return childVal ? parentVal ? { ...parentVal, ...childVal } : childVal : parentVal;
        };
        strats.i18n = strats.data = function(parentVal, childVal, vm) {
          if (!vm) {
            if (!childVal) {
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            return function(vm2) {
              return mergeFnData(parentVal, childVal, vm2);
            };
          }
          return mergeFnData(parentVal, childVal, vm);
        };
        function mergeFnData(parentVal, childVal, vm) {
          return strats.computed(
            isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal,
            isFunction(childVal) ? childVal.call(vm, vm) : childVal
          );
        }
        function concatStrat(parentVal, childVal) {
          parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;
          return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
        }
        function defaultStrat(parentVal, childVal) {
          return isUndefined(childVal) ? parentVal : childVal;
        }
        function mergeOptions(parent2, child, vm) {
          const options = {};
          if (isFunction(child)) {
            child = child.options;
          }
          if (child.extends) {
            parent2 = mergeOptions(parent2, child.extends, vm);
          }
          if (child.mixins) {
            for (const mixin of child.mixins) {
              parent2 = mergeOptions(parent2, mixin, vm);
            }
          }
          for (const key in parent2) {
            mergeKey(key);
          }
          for (const key in child) {
            if (!hasOwn(parent2, key)) {
              mergeKey(key);
            }
          }
          function mergeKey(key) {
            options[key] = (strats[key] || defaultStrat)(parent2[key], child[key], vm);
          }
          return options;
        }
        function parseOptions(options, args = []) {
          try {
            return options ? startsWith(options, "{") ? JSON.parse(options) : args.length && !includes(options, ":") ? { [args[0]]: options } : options.split(";").reduce((options2, option) => {
              const [key, value] = option.split(/:(.*)/);
              if (key && !isUndefined(value)) {
                options2[key.trim()] = value.trim();
              }
              return options2;
            }, {}) : {};
          } catch (e) {
            return {};
          }
        }
        function coerce$1(type, value) {
          if (type === Boolean) {
            return toBoolean(value);
          } else if (type === Number) {
            return toNumber(value);
          } else if (type === "list") {
            return toList(value);
          } else if (type === Object && isString(value)) {
            return parseOptions(value);
          }
          return type ? type(value) : value;
        }
        const listRe = /,(?![^(]*\))/;
        function toList(value) {
          return isArray(value) ? value : isString(value) ? value.split(listRe).map((value2) => isNumeric(value2) ? toNumber(value2) : toBoolean(value2.trim())) : [value];
        }
        function initUpdates(instance) {
          instance._data = {};
          instance._updates = [...instance.$options.update || []];
        }
        function prependUpdate(instance, update2) {
          instance._updates.unshift(update2);
        }
        function clearUpdateData(instance) {
          delete instance._data;
        }
        function callUpdate(instance, e = "update") {
          if (!instance._connected) {
            return;
          }
          if (!instance._updates.length) {
            return;
          }
          if (!instance._queued) {
            instance._queued = /* @__PURE__ */ new Set();
            fastdom.read(() => {
              if (instance._connected) {
                runUpdates(instance, instance._queued);
              }
              delete instance._queued;
            });
          }
          instance._queued.add(e.type || e);
        }
        function runUpdates(instance, types) {
          for (const { read, write, events = [] } of instance._updates) {
            if (!types.has("update") && !events.some((type) => types.has(type))) {
              continue;
            }
            let result;
            if (read) {
              result = read.call(instance, instance._data, types);
              if (result && isPlainObject(result)) {
                assign(instance._data, result);
              }
            }
            if (write && result !== false) {
              fastdom.write(() => {
                if (instance._connected) {
                  write.call(instance, instance._data, types);
                }
              });
            }
          }
        }
        function resize(options) {
          return observe(observeResize, options, "resize");
        }
        function intersection(options) {
          return observe(observeIntersection, options);
        }
        function mutation(options) {
          return observe(observeMutation, options);
        }
        function lazyload(options = {}) {
          return intersection({
            handler: function(entries, observer2) {
              const { targets = this.$el, preload = 5 } = options;
              for (const el of toNodes(isFunction(targets) ? targets(this) : targets)) {
                $$('[loading="lazy"]', el).slice(0, preload - 1).forEach((el2) => removeAttr(el2, "loading"));
              }
              for (const el of entries.filter(({ isIntersecting }) => isIntersecting).map(({ target }) => target)) {
                observer2.unobserve(el);
              }
            },
            ...options
          });
        }
        function viewport(options) {
          return observe((target, handler) => observeViewportResize(handler), options, "resize");
        }
        function scroll$1(options) {
          return observe(
            (target, handler) => ({
              disconnect: on(toScrollTargets(target), "scroll", handler, { passive: true })
            }),
            options,
            "scroll"
          );
        }
        function swipe(options) {
          return {
            observe(target, handler) {
              return {
                observe: noop,
                unobserve: noop,
                disconnect: on(target, pointerDown$1, handler, { passive: true })
              };
            },
            handler(e) {
              if (!isTouch(e)) {
                return;
              }
              const pos = getEventPos(e);
              const target = "tagName" in e.target ? e.target : parent(e.target);
              once(document, `${pointerUp$1} ${pointerCancel} scroll`, (e2) => {
                const { x, y } = getEventPos(e2);
                if (e2.type !== "scroll" && target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {
                  setTimeout(() => {
                    trigger(target, "swipe");
                    trigger(target, `swipe${swipeDirection(pos.x, pos.y, x, y)}`);
                  });
                }
              });
            },
            ...options
          };
        }
        function observe(observe2, options, emit) {
          return {
            observe: observe2,
            handler() {
              callUpdate(this, emit);
            },
            ...options
          };
        }
        function swipeDirection(x1, y1, x2, y2) {
          return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
        }
        function toScrollTargets(elements) {
          return toNodes(elements).map((node) => {
            const { ownerDocument } = node;
            const parent2 = scrollParent(node, true);
            return parent2 === ownerDocument.scrollingElement ? ownerDocument : parent2;
          });
        }
        var Margin = {
          props: {
            margin: String,
            firstColumn: Boolean
          },
          data: {
            margin: "uk-margin-small-top",
            firstColumn: "uk-first-column"
          },
          observe: [
            mutation({
              options: {
                childList: true,
                attributes: true,
                attributeFilter: ["style"]
              }
            }),
            resize({
              target: ({ $el }) => [$el, ...children($el)]
            })
          ],
          update: {
            read() {
              return {
                rows: getRows(toArray(this.$el.children))
              };
            },
            write({ rows }) {
              for (const row of rows) {
                for (const el of row) {
                  toggleClass(el, this.margin, rows[0] !== row);
                  toggleClass(el, this.firstColumn, row[isRtl ? row.length - 1 : 0] === el);
                }
              }
            },
            events: ["resize"]
          }
        };
        function getRows(elements) {
          const sorted = [[]];
          const withOffset = elements.some(
            (el, i) => i && elements[i - 1].offsetParent !== el.offsetParent
          );
          for (const el of elements) {
            if (!isVisible(el)) {
              continue;
            }
            const offset2 = getOffset(el, withOffset);
            for (let i = sorted.length - 1; i >= 0; i--) {
              const current = sorted[i];
              if (!current[0]) {
                current.push(el);
                break;
              }
              const offsetCurrent = getOffset(current[0], withOffset);
              if (offset2.top >= offsetCurrent.bottom - 1 && offset2.top !== offsetCurrent.top) {
                sorted.push([el]);
                break;
              }
              if (offset2.bottom - 1 > offsetCurrent.top || offset2.top === offsetCurrent.top) {
                let j = current.length - 1;
                for (; j >= 0; j--) {
                  const offsetCurrent2 = getOffset(current[j], withOffset);
                  if (offset2.left >= offsetCurrent2.left) {
                    break;
                  }
                }
                current.splice(j + 1, 0, el);
                break;
              }
              if (i === 0) {
                sorted.unshift([el]);
                break;
              }
            }
          }
          return sorted;
        }
        function getOffset(element, offset2 = false) {
          let { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element;
          if (offset2) {
            [offsetTop, offsetLeft] = offsetPosition(element);
          }
          return {
            top: offsetTop,
            left: offsetLeft,
            bottom: offsetTop + offsetHeight,
            right: offsetLeft + offsetWidth
          };
        }
        const clsLeave = "uk-transition-leave";
        const clsEnter = "uk-transition-enter";
        function fade(action, target, duration, stagger = 0) {
          const index2 = transitionIndex(target, true);
          const propsIn = { opacity: 1 };
          const propsOut = { opacity: 0 };
          const wrapIndexFn = (fn) => () => index2 === transitionIndex(target) ? fn() : Promise.reject();
          const leaveFn = wrapIndexFn(async () => {
            addClass(target, clsLeave);
            await Promise.all(
              getTransitionNodes(target).map(
                (child, i) => new Promise(
                  (resolve) => setTimeout(
                    () => Transition.start(child, propsOut, duration / 2, "ease").then(
                      resolve
                    ),
                    i * stagger
                  )
                )
              )
            );
            removeClass(target, clsLeave);
          });
          const enterFn = wrapIndexFn(async () => {
            const oldHeight = height(target);
            addClass(target, clsEnter);
            action();
            css(children(target), { opacity: 0 });
            await awaitFrame$1();
            const nodes = children(target);
            const newHeight = height(target);
            css(target, "alignContent", "flex-start");
            height(target, oldHeight);
            const transitionNodes = getTransitionNodes(target);
            css(nodes, propsOut);
            const transitions = transitionNodes.map(async (child, i) => {
              await awaitTimeout(i * stagger);
              await Transition.start(child, propsIn, duration / 2, "ease");
            });
            if (oldHeight !== newHeight) {
              transitions.push(
                Transition.start(
                  target,
                  { height: newHeight },
                  duration / 2 + transitionNodes.length * stagger,
                  "ease"
                )
              );
            }
            await Promise.all(transitions).then(() => {
              removeClass(target, clsEnter);
              if (index2 === transitionIndex(target)) {
                css(target, { height: "", alignContent: "" });
                css(nodes, { opacity: "" });
                delete target.dataset.transition;
              }
            });
          });
          return hasClass(target, clsLeave) ? waitTransitionend(target).then(enterFn) : hasClass(target, clsEnter) ? waitTransitionend(target).then(leaveFn).then(enterFn) : leaveFn().then(enterFn);
        }
        function transitionIndex(target, next) {
          if (next) {
            target.dataset.transition = 1 + transitionIndex(target);
          }
          return toNumber(target.dataset.transition) || 0;
        }
        function waitTransitionend(target) {
          return Promise.all(
            children(target).filter(Transition.inProgress).map(
              (el) => new Promise((resolve) => once(el, "transitionend transitioncanceled", resolve))
            )
          );
        }
        function getTransitionNodes(target) {
          return getRows(children(target)).flat().filter((node) => isVisible(node));
        }
        function awaitFrame$1() {
          return new Promise((resolve) => requestAnimationFrame(resolve));
        }
        function awaitTimeout(timeout) {
          return new Promise((resolve) => setTimeout(resolve, timeout));
        }
        async function slide(action, target, duration) {
          await awaitFrame();
          let nodes = children(target);
          const currentProps = nodes.map((el) => getProps$1(el, true));
          const targetProps = { ...css(target, ["height", "padding"]), display: "block" };
          await Promise.all(nodes.concat(target).map(Transition.cancel));
          action();
          nodes = nodes.concat(children(target).filter((el) => !includes(nodes, el)));
          await Promise.resolve();
          fastdom.flush();
          const targetStyle = attr(target, "style");
          const targetPropsTo = css(target, ["height", "padding"]);
          const [propsTo, propsFrom] = getTransitionProps(target, nodes, currentProps);
          const attrsTo = nodes.map((el) => ({ style: attr(el, "style") }));
          nodes.forEach((el, i) => propsFrom[i] && css(el, propsFrom[i]));
          css(target, targetProps);
          trigger(target, "scroll");
          fastdom.flush();
          await awaitFrame();
          const transitions = nodes.map((el, i) => parent(el) === target && Transition.start(el, propsTo[i], duration, "ease")).concat(Transition.start(target, targetPropsTo, duration, "ease"));
          try {
            await Promise.all(transitions);
            nodes.forEach((el, i) => {
              attr(el, attrsTo[i]);
              if (parent(el) === target) {
                css(el, "display", propsTo[i].opacity === 0 ? "none" : "");
              }
            });
            attr(target, "style", targetStyle);
          } catch (e) {
            attr(nodes, "style", "");
            resetProps(target, targetProps);
          }
        }
        function getProps$1(el, opacity) {
          const zIndex2 = css(el, "zIndex");
          return isVisible(el) ? {
            display: "",
            opacity: opacity ? css(el, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: zIndex2 === "auto" ? index(el) : zIndex2,
            ...getPositionWithMargin(el)
          } : false;
        }
        function getTransitionProps(target, nodes, currentProps) {
          const propsTo = nodes.map(
            (el, i) => parent(el) && i in currentProps ? currentProps[i] ? isVisible(el) ? getPositionWithMargin(el) : { opacity: 0 } : { opacity: isVisible(el) ? 1 : 0 } : false
          );
          const propsFrom = propsTo.map((props2, i) => {
            const from = parent(nodes[i]) === target && (currentProps[i] || getProps$1(nodes[i]));
            if (!from) {
              return false;
            }
            if (!props2) {
              delete from.opacity;
            } else if (!("opacity" in props2)) {
              const { opacity } = from;
              if (opacity % 1) {
                props2.opacity = 1;
              } else {
                delete from.opacity;
              }
            }
            return from;
          });
          return [propsTo, propsFrom];
        }
        function resetProps(el, props2) {
          for (const prop in props2) {
            css(el, prop, "");
          }
        }
        function getPositionWithMargin(el) {
          const { height: height2, width: width2 } = offset(el);
          return {
            height: height2,
            width: width2,
            transform: "",
            ...position(el),
            ...css(el, ["marginTop", "marginLeft"])
          };
        }
        function awaitFrame() {
          return new Promise((resolve) => requestAnimationFrame(resolve));
        }
        var Animate = {
          props: {
            duration: Number,
            animation: Boolean
          },
          data: {
            duration: 150,
            animation: "slide"
          },
          methods: {
            animate(action, target = this.$el) {
              const name = this.animation;
              const animationFn = name === "fade" ? fade : name === "delayed-fade" ? (...args) => fade(...args, 40) : name ? slide : () => {
                action();
                return Promise.resolve();
              };
              return animationFn(action, target, this.duration).catch(noop);
            }
          }
        };
        const keyMap = {
          TAB: 9,
          ESC: 27,
          SPACE: 32,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40
        };
        var filter = {
          mixins: [Animate],
          args: "target",
          props: {
            target: String,
            selActive: Boolean
          },
          data: {
            target: "",
            selActive: false,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            duration: 250
          },
          computed: {
            children: ({ target }, $el) => $$(`${target} > *`, $el),
            toggles: ({ attrItem }, $el) => $$(`[${attrItem}],[data-${attrItem}]`, $el)
          },
          watch: {
            toggles(toggles) {
              this.updateState();
              const actives = $$(this.selActive, this.$el);
              for (const toggle2 of toggles) {
                if (this.selActive !== false) {
                  toggleClass(toggle2, this.cls, includes(actives, toggle2));
                }
                const button = findButton(toggle2);
                if (isTag(button, "a")) {
                  attr(button, "role", "button");
                }
              }
            },
            children(list, prev) {
              if (prev) {
                this.updateState();
              }
            }
          },
          events: {
            name: "click keydown",
            delegate() {
              return `[${this.attrItem}],[data-${this.attrItem}]`;
            },
            handler(e) {
              if (e.type === "keydown" && e.keyCode !== keyMap.SPACE) {
                return;
              }
              if (e.target.closest("a,button")) {
                e.preventDefault();
                this.apply(e.current);
              }
            }
          },
          methods: {
            apply(el) {
              const prevState = this.getState();
              const newState = mergeState(el, this.attrItem, this.getState());
              if (!isEqualState(prevState, newState)) {
                this.setState(newState);
              }
            },
            getState() {
              return this.toggles.filter((item) => hasClass(item, this.cls)).reduce((state, el) => mergeState(el, this.attrItem, state), {
                filter: { "": "" },
                sort: []
              });
            },
            async setState(state, animate2 = true) {
              state = { filter: { "": "" }, sort: [], ...state };
              trigger(this.$el, "beforeFilter", [this, state]);
              for (const toggle2 of this.toggles) {
                toggleClass(toggle2, this.cls, matchFilter(toggle2, this.attrItem, state));
              }
              await Promise.all(
                $$(this.target, this.$el).map((target) => {
                  const filterFn2 = () => {
                    applyState(state, target, children(target));
                    this.$update(this.$el);
                  };
                  return animate2 ? this.animate(filterFn2, target) : filterFn2();
                })
              );
              trigger(this.$el, "afterFilter", [this]);
            },
            updateState() {
              fastdom.write(() => this.setState(this.getState(), false));
            }
          }
        };
        function getFilter(el, attr2) {
          return parseOptions(data(el, attr2), ["filter"]);
        }
        function isEqualState(stateA, stateB) {
          return ["filter", "sort"].every((prop) => isEqual(stateA[prop], stateB[prop]));
        }
        function applyState(state, target, children2) {
          const selector = getSelector(state);
          children2.forEach((el) => css(el, "display", selector && !matches(el, selector) ? "none" : ""));
          const [sort, order] = state.sort;
          if (sort) {
            const sorted = sortItems(children2, sort, order);
            if (!isEqual(sorted, children2)) {
              append(target, sorted);
            }
          }
        }
        function mergeState(el, attr2, state) {
          const { filter: filter2, group, sort, order = "asc" } = getFilter(el, attr2);
          if (filter2 || isUndefined(sort)) {
            if (group) {
              if (filter2) {
                delete state.filter[""];
                state.filter[group] = filter2;
              } else {
                delete state.filter[group];
                if (isEmpty(state.filter) || "" in state.filter) {
                  state.filter = { "": filter2 || "" };
                }
              }
            } else {
              state.filter = { "": filter2 || "" };
            }
          }
          if (!isUndefined(sort)) {
            state.sort = [sort, order];
          }
          return state;
        }
        function matchFilter(el, attr2, { filter: stateFilter = { "": "" }, sort: [stateSort, stateOrder] }) {
          const { filter: filter2 = "", group = "", sort, order = "asc" } = getFilter(el, attr2);
          return isUndefined(sort) ? group in stateFilter && filter2 === stateFilter[group] || !filter2 && group && !(group in stateFilter) && !stateFilter[""] : stateSort === sort && stateOrder === order;
        }
        function getSelector({ filter: filter2 }) {
          let selector = "";
          each(filter2, (value) => selector += value || "");
          return selector;
        }
        function sortItems(nodes, sort, order) {
          return [...nodes].sort(
            (a, b) => data(a, sort).localeCompare(data(b, sort), void 0, { numeric: true }) * (order === "asc" || -1)
          );
        }
        function findButton(el) {
          return $("a,button", el) || el;
        }
        let prevented;
        function preventBackgroundScroll(el) {
          const off2 = on(el, "touchstart", (e) => {
            if (e.targetTouches.length !== 1 || matches(e.target, 'input[type="range"')) {
              return;
            }
            let prev = getEventPos(e).y;
            const offMove = on(
              el,
              "touchmove",
              (e2) => {
                const pos = getEventPos(e2).y;
                if (pos === prev) {
                  return;
                }
                prev = pos;
                if (!scrollParents(e2.target).some((scrollParent2) => {
                  if (!el.contains(scrollParent2)) {
                    return false;
                  }
                  let { scrollHeight, clientHeight } = scrollParent2;
                  return clientHeight < scrollHeight;
                })) {
                  e2.preventDefault();
                }
              },
              { passive: false }
            );
            once(el, "scroll touchend touchcanel", offMove, { capture: true });
          });
          if (prevented) {
            return off2;
          }
          prevented = true;
          const { scrollingElement: scrollingElement2 } = document;
          css(scrollingElement2, {
            overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
            touchAction: "none",
            paddingRight: width(window) - scrollingElement2.clientWidth || ""
          });
          return () => {
            prevented = false;
            off2();
            css(scrollingElement2, { overflowY: "", touchAction: "", paddingRight: "" });
          };
        }
        var Container = {
          props: {
            container: Boolean
          },
          data: {
            container: true
          },
          computed: {
            container({ container }) {
              return container === true && this.$container || container && $(container);
            }
          }
        };
        var Togglable = {
          props: {
            cls: Boolean,
            animation: "list",
            duration: Number,
            velocity: Number,
            origin: String,
            transition: String
          },
          data: {
            cls: false,
            animation: [false],
            duration: 200,
            velocity: 0.2,
            origin: false,
            transition: "ease",
            clsEnter: "uk-togglable-enter",
            clsLeave: "uk-togglable-leave"
          },
          computed: {
            hasAnimation: ({ animation }) => !!animation[0],
            hasTransition: ({ animation }) => ["slide", "reveal"].some((transition2) => startsWith(animation[0], transition2))
          },
          methods: {
            async toggleElement(targets, toggle2, animate2) {
              try {
                await Promise.all(
                  toNodes(targets).map((el) => {
                    const show = isBoolean(toggle2) ? toggle2 : !this.isToggled(el);
                    if (!trigger(el, `before${show ? "show" : "hide"}`, [this])) {
                      return Promise.reject();
                    }
                    const promise = (isFunction(animate2) ? animate2 : animate2 === false || !this.hasAnimation ? toggleInstant : this.hasTransition ? toggleTransition : toggleAnimation)(el, show, this);
                    const cls = show ? this.clsEnter : this.clsLeave;
                    addClass(el, cls);
                    trigger(el, show ? "show" : "hide", [this]);
                    const done = () => {
                      removeClass(el, cls);
                      trigger(el, show ? "shown" : "hidden", [this]);
                    };
                    return promise ? promise.then(done, () => {
                      removeClass(el, cls);
                      return Promise.reject();
                    }) : done();
                  })
                );
                return true;
              } catch (e) {
                return false;
              }
            },
            isToggled(el = this.$el) {
              el = toNode(el);
              return hasClass(el, this.clsEnter) ? true : hasClass(el, this.clsLeave) ? false : this.cls ? hasClass(el, this.cls.split(" ")[0]) : isVisible(el);
            },
            _toggle(el, toggled) {
              if (!el) {
                return;
              }
              toggled = Boolean(toggled);
              let changed;
              if (this.cls) {
                changed = includes(this.cls, " ") || toggled !== hasClass(el, this.cls);
                changed && toggleClass(el, this.cls, includes(this.cls, " ") ? void 0 : toggled);
              } else {
                changed = toggled === el.hidden;
                changed && (el.hidden = !toggled);
              }
              $$("[autofocus]", el).some((el2) => isVisible(el2) ? el2.focus() || true : el2.blur());
              if (changed) {
                trigger(el, "toggled", [toggled, this]);
              }
            }
          }
        };
        function toggleInstant(el, show, { _toggle }) {
          Animation.cancel(el);
          Transition.cancel(el);
          return _toggle(el, show);
        }
        async function toggleTransition(el, show, { animation, duration, velocity, transition: transition2, _toggle }) {
          var _a;
          const [mode = "reveal", startProp = "top"] = ((_a = animation[0]) == null ? void 0 : _a.split("-")) || [];
          const dirs2 = [
            ["left", "right"],
            ["top", "bottom"]
          ];
          const dir = dirs2[includes(dirs2[0], startProp) ? 0 : 1];
          const end = dir[1] === startProp;
          const props2 = ["width", "height"];
          const dimProp = props2[dirs2.indexOf(dir)];
          const marginProp = `margin-${dir[0]}`;
          const marginStartProp = `margin-${startProp}`;
          let currentDim = dimensions$1(el)[dimProp];
          const inProgress = Transition.inProgress(el);
          await Transition.cancel(el);
          if (show) {
            _toggle(el, true);
          }
          const prevProps = Object.fromEntries(
            [
              "padding",
              "border",
              "width",
              "height",
              "minWidth",
              "minHeight",
              "overflowY",
              "overflowX",
              marginProp,
              marginStartProp
            ].map((key) => [key, el.style[key]])
          );
          const dim = dimensions$1(el);
          const currentMargin = toFloat(css(el, marginProp));
          const marginStart = toFloat(css(el, marginStartProp));
          const endDim = dim[dimProp] + marginStart;
          if (!inProgress && !show) {
            currentDim += marginStart;
          }
          const [wrapper] = wrapInner(el, "<div>");
          css(wrapper, {
            boxSizing: "border-box",
            height: dim.height,
            width: dim.width,
            ...css(el, [
              "overflow",
              "padding",
              "borderTop",
              "borderRight",
              "borderBottom",
              "borderLeft",
              "borderImage",
              marginStartProp
            ])
          });
          css(el, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [marginStartProp]: 0,
            width: dim.width,
            height: dim.height,
            overflow: "hidden",
            [dimProp]: currentDim
          });
          const percent2 = currentDim / endDim;
          duration = (velocity * endDim + duration) * (show ? 1 - percent2 : percent2);
          const endProps = { [dimProp]: show ? endDim : 0 };
          if (end) {
            css(el, marginProp, endDim - currentDim + currentMargin);
            endProps[marginProp] = show ? currentMargin : endDim + currentMargin;
          }
          if (!end ^ mode === "reveal") {
            css(wrapper, marginProp, -endDim + currentDim);
            Transition.start(wrapper, { [marginProp]: show ? 0 : -endDim }, duration, transition2);
          }
          try {
            await Transition.start(el, endProps, duration, transition2);
          } finally {
            css(el, prevProps);
            unwrap(wrapper.firstChild);
            if (!show) {
              _toggle(el, false);
            }
          }
        }
        function toggleAnimation(el, show, cmp) {
          const { animation, duration, _toggle } = cmp;
          if (show) {
            _toggle(el, true);
            return Animation.in(el, animation[0], duration, cmp.origin);
          }
          return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(
            () => _toggle(el, false)
          );
        }
        const active$1 = [];
        var Modal = {
          mixins: [Class, Container, Togglable],
          props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
            role: String
          },
          data: {
            cls: "uk-open",
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false,
            role: "dialog"
          },
          computed: {
            panel: ({ selPanel }, $el) => $(selPanel, $el),
            transitionElement() {
              return this.panel;
            },
            bgClose({ bgClose }) {
              return bgClose && this.panel;
            }
          },
          connected() {
            attr(this.panel || this.$el, "role", this.role);
            if (this.overlay) {
              attr(this.panel || this.$el, "aria-modal", true);
            }
          },
          beforeDisconnect() {
            if (includes(active$1, this)) {
              this.toggleElement(this.$el, false, false);
            }
          },
          events: [
            {
              name: "click",
              delegate() {
                return `${this.selClose},a[href*="#"]`;
              },
              handler(e) {
                const { current, defaultPrevented } = e;
                const { hash } = current;
                if (!defaultPrevented && hash && isSameSiteAnchor(current) && !this.$el.contains($(hash))) {
                  this.hide();
                } else if (matches(current, this.selClose)) {
                  e.preventDefault();
                  this.hide();
                }
              }
            },
            {
              name: "toggle",
              self: true,
              handler(e) {
                if (e.defaultPrevented) {
                  return;
                }
                e.preventDefault();
                if (this.isToggled() === includes(active$1, this)) {
                  this.toggle();
                }
              }
            },
            {
              name: "beforeshow",
              self: true,
              handler(e) {
                if (includes(active$1, this)) {
                  return false;
                }
                if (!this.stack && active$1.length) {
                  Promise.all(active$1.map((modal2) => modal2.hide())).then(this.show);
                  e.preventDefault();
                } else {
                  active$1.push(this);
                }
              }
            },
            {
              name: "show",
              self: true,
              handler() {
                if (this.stack) {
                  css(this.$el, "zIndex", toFloat(css(this.$el, "zIndex")) + active$1.length);
                }
                const handlers = [
                  this.overlay && preventBackgroundFocus(this),
                  this.overlay && preventBackgroundScroll(this.$el),
                  this.bgClose && listenForBackgroundClose$1(this),
                  this.escClose && listenForEscClose$1(this)
                ];
                once(
                  this.$el,
                  "hidden",
                  () => handlers.forEach((handler) => handler && handler()),
                  { self: true }
                );
                addClass(document.documentElement, this.clsPage);
              }
            },
            {
              name: "shown",
              self: true,
              handler() {
                if (!isFocusable(this.$el)) {
                  attr(this.$el, "tabindex", "-1");
                }
                if (!matches(this.$el, ":focus-within")) {
                  this.$el.focus();
                }
              }
            },
            {
              name: "hidden",
              self: true,
              handler() {
                if (includes(active$1, this)) {
                  active$1.splice(active$1.indexOf(this), 1);
                }
                css(this.$el, "zIndex", "");
                if (!active$1.some((modal2) => modal2.clsPage === this.clsPage)) {
                  removeClass(document.documentElement, this.clsPage);
                }
              }
            }
          ],
          methods: {
            toggle() {
              return this.isToggled() ? this.hide() : this.show();
            },
            show() {
              if (this.container && parent(this.$el) !== this.container) {
                append(this.container, this.$el);
                return new Promise(
                  (resolve) => requestAnimationFrame(() => this.show().then(resolve))
                );
              }
              return this.toggleElement(this.$el, true, animate$1);
            },
            hide() {
              return this.toggleElement(this.$el, false, animate$1);
            }
          }
        };
        function animate$1(el, show, { transitionElement, _toggle }) {
          return new Promise(
            (resolve, reject) => once(el, "show hide", () => {
              var _a;
              (_a = el._reject) == null ? void 0 : _a.call(el);
              el._reject = reject;
              _toggle(el, show);
              const off2 = once(
                transitionElement,
                "transitionstart",
                () => {
                  once(transitionElement, "transitionend transitioncancel", resolve, {
                    self: true
                  });
                  clearTimeout(timer);
                },
                { self: true }
              );
              const timer = setTimeout(
                () => {
                  off2();
                  resolve();
                },
                toMs(css(transitionElement, "transitionDuration"))
              );
            })
          ).then(() => delete el._reject);
        }
        function toMs(time) {
          return time ? endsWith(time, "ms") ? toFloat(time) : toFloat(time) * 1e3 : 0;
        }
        function preventBackgroundFocus(modal2) {
          return on(document, "focusin", (e) => {
            if (last(active$1) === modal2 && !modal2.$el.contains(e.target)) {
              modal2.$el.focus();
            }
          });
        }
        function listenForBackgroundClose$1(modal2) {
          return on(document, pointerDown$1, ({ target }) => {
            if (last(active$1) !== modal2 || modal2.overlay && !modal2.$el.contains(target) || modal2.panel.contains(target)) {
              return;
            }
            once(
              document,
              `${pointerUp$1} ${pointerCancel} scroll`,
              ({ defaultPrevented, type, target: newTarget }) => {
                if (!defaultPrevented && type === pointerUp$1 && target === newTarget) {
                  modal2.hide();
                }
              },
              true
            );
          });
        }
        function listenForEscClose$1(modal2) {
          return on(document, "keydown", (e) => {
            if (e.keyCode === 27 && last(active$1) === modal2) {
              modal2.hide();
            }
          });
        }
        var Animations$2 = {
          slide: {
            show(dir) {
              return [{ transform: translate(dir * -100) }, { transform: translate() }];
            },
            percent(current) {
              return translated(current);
            },
            translate(percent2, dir) {
              return [
                { transform: translate(dir * -100 * percent2) },
                { transform: translate(dir * 100 * (1 - percent2)) }
              ];
            }
          }
        };
        function translated(el) {
          return Math.abs(css(el, "transform").split(",")[4] / el.offsetWidth);
        }
        function translate(value = 0, unit = "%") {
          value += value ? unit : "";
          return `translate3d(${value}, 0, 0)`;
        }
        function scale3d(value) {
          return `scale3d(${value}, ${value}, 1)`;
        }
        function Transitioner$1(prev, next, dir, { animation, easing }) {
          const { percent: percent2, translate: translate2, show = noop } = animation;
          const props2 = show(dir);
          let resolve;
          return {
            dir,
            show(duration, percent22 = 0, linear) {
              const timing = linear ? "linear" : easing;
              duration -= Math.round(duration * clamp(percent22, -1, 1));
              this.translate(percent22);
              triggerUpdate$1(next, "itemin", { percent: percent22, duration, timing, dir });
              triggerUpdate$1(prev, "itemout", { percent: 1 - percent22, duration, timing, dir });
              return new Promise((res) => {
                resolve || (resolve = res);
                Promise.all([
                  Transition.start(next, props2[1], duration, timing),
                  Transition.start(prev, props2[0], duration, timing)
                ]).then(() => {
                  this.reset();
                  resolve();
                }, noop);
              });
            },
            cancel() {
              return Transition.cancel([next, prev]);
            },
            reset() {
              for (const prop in props2[0]) {
                css([next, prev], prop, "");
              }
            },
            async forward(duration, percent22 = this.percent()) {
              await this.cancel();
              return this.show(duration, percent22, true);
            },
            translate(percent22) {
              this.reset();
              const props22 = translate2(percent22, dir);
              css(next, props22[1]);
              css(prev, props22[0]);
              triggerUpdate$1(next, "itemtranslatein", { percent: percent22, dir });
              triggerUpdate$1(prev, "itemtranslateout", { percent: 1 - percent22, dir });
            },
            percent() {
              return percent2(prev || next, next, dir);
            },
            getDistance() {
              return prev == null ? void 0 : prev.offsetWidth;
            }
          };
        }
        function triggerUpdate$1(el, type, data2) {
          trigger(el, createEvent(type, false, false, data2));
        }
        var I18n = {
          props: {
            i18n: Object
          },
          data: {
            i18n: null
          },
          methods: {
            t(key, ...params) {
              var _a, _b, _c;
              let i = 0;
              return ((_c = ((_a = this.i18n) == null ? void 0 : _a[key]) || ((_b = this.$options.i18n) == null ? void 0 : _b[key])) == null ? void 0 : _c.replace(
                /%s/g,
                () => params[i++] || ""
              )) || "";
            }
          }
        };
        var SliderAutoplay = {
          props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
          },
          data: {
            autoplay: false,
            autoplayInterval: 7e3,
            pauseOnHover: true
          },
          connected() {
            attr(this.list, "aria-live", this.autoplay ? "off" : "polite");
            this.autoplay && this.startAutoplay();
          },
          disconnected() {
            this.stopAutoplay();
          },
          update() {
            attr(this.slides, "tabindex", "-1");
          },
          events: [
            {
              name: "visibilitychange",
              el: () => document,
              filter() {
                return this.autoplay;
              },
              handler() {
                if (document.hidden) {
                  this.stopAutoplay();
                } else {
                  this.startAutoplay();
                }
              }
            }
          ],
          methods: {
            startAutoplay() {
              this.stopAutoplay();
              this.interval = setInterval(() => {
                if (!(this.stack.length || this.draggable && matches(this.$el, ":focus-within") && !matches(this.$el, ":focus") || this.pauseOnHover && matches(this.$el, ":hover"))) {
                  this.show("next");
                }
              }, this.autoplayInterval);
            },
            stopAutoplay() {
              clearInterval(this.interval);
            }
          }
        };
        const pointerOptions = { passive: false, capture: true };
        const pointerUpOptions = { passive: true, capture: true };
        const pointerDown = "touchstart mousedown";
        const pointerMove = "touchmove mousemove";
        const pointerUp = "touchend touchcancel mouseup click input scroll";
        const preventClick = (e) => e.preventDefault();
        var SliderDrag = {
          props: {
            draggable: Boolean
          },
          data: {
            draggable: true,
            threshold: 10
          },
          created() {
            for (const key of ["start", "move", "end"]) {
              const fn = this[key];
              this[key] = (e) => {
                const pos = getEventPos(e).x * (isRtl ? -1 : 1);
                this.prevPos = pos === this.pos ? this.prevPos : this.pos;
                this.pos = pos;
                fn(e);
              };
            }
          },
          events: [
            {
              name: pointerDown,
              passive: true,
              delegate() {
                return `${this.selList} > *`;
              },
              handler(e) {
                if (!this.draggable || this.parallax || !isTouch(e) && hasSelectableText(e.target) || e.target.closest(selInput) || e.button > 0 || this.length < 2) {
                  return;
                }
                this.start(e);
              }
            },
            {
              name: "dragstart",
              handler(e) {
                e.preventDefault();
              }
            },
            {
              // iOS workaround for slider stopping if swiping fast
              name: pointerMove,
              el() {
                return this.list;
              },
              handler: noop,
              ...pointerOptions
            }
          ],
          methods: {
            start() {
              this.drag = this.pos;
              if (this._transitioner) {
                this.percent = this._transitioner.percent();
                this.drag += this._transitioner.getDistance() * this.percent * this.dir;
                this._transitioner.cancel();
                this._transitioner.translate(this.percent);
                this.dragging = true;
                this.stack = [];
              } else {
                this.prevIndex = this.index;
              }
              on(document, pointerMove, this.move, pointerOptions);
              on(document, pointerUp, this.end, pointerUpOptions);
              css(this.list, "userSelect", "none");
            },
            move(e) {
              const distance = this.pos - this.drag;
              if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                return;
              }
              if (!this.dragging) {
                on(this.list, "click", preventClick, pointerOptions);
              }
              e.cancelable && e.preventDefault();
              this.dragging = true;
              this.dir = distance < 0 ? 1 : -1;
              let { slides, prevIndex } = this;
              let dis = Math.abs(distance);
              let nextIndex = this.getIndex(prevIndex + this.dir);
              let width2 = getDistance.call(this, prevIndex, nextIndex);
              while (nextIndex !== prevIndex && dis > width2) {
                this.drag -= width2 * this.dir;
                prevIndex = nextIndex;
                dis -= width2;
                nextIndex = this.getIndex(prevIndex + this.dir);
                width2 = getDistance.call(this, prevIndex, nextIndex);
              }
              this.percent = dis / width2;
              const prev = slides[prevIndex];
              const next = slides[nextIndex];
              const changed = this.index !== nextIndex;
              const edge = prevIndex === nextIndex;
              let itemShown;
              for (const i of [this.index, this.prevIndex]) {
                if (!includes([nextIndex, prevIndex], i)) {
                  trigger(slides[i], "itemhidden", [this]);
                  if (edge) {
                    itemShown = true;
                    this.prevIndex = prevIndex;
                  }
                }
              }
              if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
                trigger(slides[this.index], "itemshown", [this]);
              }
              if (changed) {
                this.prevIndex = prevIndex;
                this.index = nextIndex;
                if (!edge) {
                  trigger(prev, "beforeitemhide", [this]);
                  trigger(prev, "itemhide", [this]);
                }
                trigger(next, "beforeitemshow", [this]);
                trigger(next, "itemshow", [this]);
              }
              this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);
            },
            end() {
              off(document, pointerMove, this.move, pointerOptions);
              off(document, pointerUp, this.end, pointerUpOptions);
              if (this.dragging) {
                this.dragging = null;
                if (this.index === this.prevIndex) {
                  this.percent = 1 - this.percent;
                  this.dir *= -1;
                  this._show(false, this.index, true);
                  this._transitioner = null;
                } else {
                  const dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                  this.index = dirChange ? this.index : this.prevIndex;
                  if (dirChange) {
                    this.percent = 1 - this.percent;
                  }
                  this.show(
                    this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? "next" : "previous",
                    true
                  );
                }
              }
              setTimeout(() => off(this.list, "click", preventClick, pointerOptions));
              css(this.list, { userSelect: "" });
              this.drag = this.percent = null;
            }
          }
        };
        function getDistance(prev, next) {
          return this._getTransitioner(prev, prev !== next && next).getDistance() || this.slides[prev].offsetWidth;
        }
        function hasSelectableText(el) {
          return css(el, "userSelect") !== "none" && toArray(el.childNodes).some((el2) => el2.nodeType === 3 && el2.textContent.trim());
        }
        function initWatches(instance) {
          instance._watches = [];
          for (const watches of instance.$options.watch || []) {
            for (const [name, watch] of Object.entries(watches)) {
              registerWatch(instance, watch, name);
            }
          }
          instance._initial = true;
        }
        function registerWatch(instance, watch, name) {
          instance._watches.push({
            name,
            ...isPlainObject(watch) ? watch : { handler: watch }
          });
        }
        function runWatches(instance, values) {
          for (const { name, handler, immediate = true } of instance._watches) {
            if (instance._initial && immediate || hasOwn(values, name) && !isEqual(values[name], instance[name])) {
              handler.call(instance, instance[name], values[name]);
            }
          }
          instance._initial = false;
        }
        function initComputed(instance) {
          const { computed } = instance.$options;
          instance._computed = {};
          if (computed) {
            for (const key in computed) {
              registerComputed(instance, key, computed[key]);
            }
          }
        }
        function registerComputed(instance, key, cb) {
          instance._hasComputed = true;
          Object.defineProperty(instance, key, {
            enumerable: true,
            get() {
              const { _computed, $props, $el } = instance;
              if (!hasOwn(_computed, key)) {
                _computed[key] = (cb.get || cb).call(instance, $props, $el);
              }
              return _computed[key];
            },
            set(value) {
              const { _computed } = instance;
              _computed[key] = cb.set ? cb.set.call(instance, value) : value;
              if (isUndefined(_computed[key])) {
                delete _computed[key];
              }
            }
          });
        }
        function initComputedUpdates(instance) {
          if (!instance._hasComputed) {
            return;
          }
          prependUpdate(instance, {
            read: () => runWatches(instance, resetComputed(instance)),
            events: ["resize", "computed"]
          });
          registerComputedObserver();
          instances$1.add(instance);
        }
        function disconnectComputedUpdates(instance) {
          instances$1 == null ? void 0 : instances$1.delete(instance);
          resetComputed(instance);
        }
        function resetComputed(instance) {
          const values = { ...instance._computed };
          instance._computed = {};
          return values;
        }
        let observer;
        let instances$1;
        function registerComputedObserver() {
          if (observer) {
            return;
          }
          instances$1 = /* @__PURE__ */ new Set();
          observer = new MutationObserver(() => {
            for (const instance of instances$1) {
              callUpdate(instance, "computed");
            }
          });
          observer.observe(document, {
            subtree: true,
            childList: true
          });
        }
        function initEvents(instance) {
          instance._events = [];
          for (const event of instance.$options.events || []) {
            if (hasOwn(event, "handler")) {
              registerEvent(instance, event);
            } else {
              for (const key in event) {
                registerEvent(instance, event[key], key);
              }
            }
          }
        }
        function unbindEvents(instance) {
          instance._events.forEach((unbind) => unbind());
          delete instance._events;
        }
        function registerEvent(instance, event, key) {
          let { name, el, handler, capture, passive, delegate: delegate2, filter: filter2, self: self2 } = isPlainObject(event) ? event : { name: key, handler: event };
          el = isFunction(el) ? el.call(instance, instance) : el || instance.$el;
          if (!el || isArray(el) && !el.length || filter2 && !filter2.call(instance)) {
            return;
          }
          instance._events.push(
            on(
              el,
              name,
              delegate2 ? isString(delegate2) ? delegate2 : delegate2.call(instance, instance) : null,
              isString(handler) ? instance[handler] : handler.bind(instance),
              { passive, capture, self: self2 }
            )
          );
        }
        function initObservers(instance) {
          instance._observers = [];
          for (const observer2 of instance.$options.observe || []) {
            if (hasOwn(observer2, "handler")) {
              registerObservable(instance, observer2);
            } else {
              for (const observable of observer2) {
                registerObservable(instance, observable);
              }
            }
          }
        }
        function registerObserver(instance, ...observer2) {
          instance._observers.push(...observer2);
        }
        function disconnectObservers(instance) {
          for (const observer2 of instance._observers) {
            observer2.disconnect();
          }
        }
        function registerObservable(instance, observable) {
          let { observe: observe2, target = instance.$el, handler, options, filter: filter2, args } = observable;
          if (filter2 && !filter2.call(instance, instance)) {
            return;
          }
          const key = `_observe${instance._observers.length}`;
          if (isFunction(target) && !hasOwn(instance, key)) {
            registerComputed(instance, key, () => target.call(instance, instance));
          }
          handler = isString(handler) ? instance[handler] : handler.bind(instance);
          if (isFunction(options)) {
            options = options.call(instance, instance);
          }
          const targets = hasOwn(instance, key) ? instance[key] : target;
          const observer2 = observe2(targets, handler, options, args);
          if (isFunction(target) && isArray(instance[key]) && observer2.unobserve) {
            registerWatch(instance, { handler: updateTargets(observer2), immediate: false }, key);
          }
          registerObserver(instance, observer2);
        }
        function updateTargets(observer2) {
          return (targets, prev) => {
            for (const target of prev) {
              !includes(targets, target) && observer2.unobserve(target);
            }
            for (const target of targets) {
              !includes(prev, target) && observer2.observe(target);
            }
          };
        }
        function initProps(instance) {
          const { $options, $props } = instance;
          const props2 = getProps($options);
          assign($props, props2);
          const { computed, methods } = $options;
          for (let key in $props) {
            if (key in props2 && (!computed || !hasOwn(computed, key)) && (!methods || !hasOwn(methods, key))) {
              instance[key] = $props[key];
            }
          }
        }
        function getProps(opts) {
          const data$1 = {};
          const { args = [], props: props2 = {}, el, id: id2 } = opts;
          if (!props2) {
            return data$1;
          }
          for (const key in props2) {
            const prop = hyphenate(key);
            let value = data(el, prop);
            if (isUndefined(value)) {
              continue;
            }
            value = props2[key] === Boolean && value === "" ? true : coerce$1(props2[key], value);
            if (prop === "target" && startsWith(value, "_")) {
              continue;
            }
            data$1[key] = value;
          }
          const options = parseOptions(data(el, id2), args);
          for (const key in options) {
            const prop = camelize(key);
            if (!isUndefined(props2[prop])) {
              data$1[prop] = coerce$1(props2[prop], options[key]);
            }
          }
          return data$1;
        }
        const getAttributes = memoize((id2, props2) => {
          const attributes = Object.keys(props2);
          const filter2 = attributes.concat(id2).map((key) => [hyphenate(key), `data-${hyphenate(key)}`]).flat();
          return { attributes, filter: filter2 };
        });
        function initPropsObserver(instance) {
          const { $options, $props } = instance;
          const { id: id2, props: props2, el } = $options;
          if (!props2) {
            return;
          }
          const { attributes, filter: filter2 } = getAttributes(id2, props2);
          const observer2 = new MutationObserver((records) => {
            const data2 = getProps($options);
            if (records.some(({ attributeName }) => {
              const prop = attributeName.replace("data-", "");
              return (prop === id2 ? attributes : [camelize(prop), camelize(attributeName)]).some(
                (prop2) => !isUndefined(data2[prop2]) && data2[prop2] !== $props[prop2]
              );
            })) {
              instance.$reset();
            }
          });
          observer2.observe(el, {
            attributes: true,
            attributeFilter: filter2
          });
          registerObserver(instance, observer2);
        }
        function callHook(instance, hook) {
          var _a;
          (_a = instance.$options[hook]) == null ? void 0 : _a.forEach((handler) => handler.call(instance));
        }
        function callConnected(instance) {
          if (instance._connected) {
            return;
          }
          initProps(instance);
          callHook(instance, "beforeConnect");
          instance._connected = true;
          initEvents(instance);
          initUpdates(instance);
          initWatches(instance);
          initObservers(instance);
          initPropsObserver(instance);
          initComputedUpdates(instance);
          callHook(instance, "connected");
          callUpdate(instance);
        }
        function callDisconnected(instance) {
          if (!instance._connected) {
            return;
          }
          callHook(instance, "beforeDisconnect");
          unbindEvents(instance);
          clearUpdateData(instance);
          disconnectObservers(instance);
          disconnectComputedUpdates(instance);
          callHook(instance, "disconnected");
          instance._connected = false;
        }
        let uid = 0;
        function init$1(instance, options = {}) {
          options.data = normalizeData(options, instance.constructor.options);
          instance.$options = mergeOptions(instance.constructor.options, options, instance);
          instance.$props = {};
          instance._uid = uid++;
          initData(instance);
          initMethods(instance);
          initComputed(instance);
          callHook(instance, "created");
          if (options.el) {
            instance.$mount(options.el);
          }
        }
        function initData(instance) {
          const { data: data2 = {} } = instance.$options;
          for (const key in data2) {
            instance.$props[key] = instance[key] = data2[key];
          }
        }
        function initMethods(instance) {
          const { methods } = instance.$options;
          if (methods) {
            for (const key in methods) {
              instance[key] = methods[key].bind(instance);
            }
          }
        }
        function normalizeData({ data: data2 = {} }, { args = [], props: props2 = {} }) {
          if (isArray(data2)) {
            data2 = data2.slice(0, args.length).reduce((data22, value, index2) => {
              if (isPlainObject(value)) {
                assign(data22, value);
              } else {
                data22[args[index2]] = value;
              }
              return data22;
            }, {});
          }
          for (const key in data2) {
            if (isUndefined(data2[key])) {
              delete data2[key];
            } else if (props2[key]) {
              data2[key] = coerce$1(props2[key], data2[key]);
            }
          }
          return data2;
        }
        const App = function(options) {
          init$1(this, options);
        };
        App.util = util;
        App.options = {};
        App.version = "3.18.3";
        const PREFIX = "uk-";
        const DATA = "__uikit__";
        const components$2 = {};
        function component(name, options) {
          var _a;
          const id2 = PREFIX + hyphenate(name);
          if (!options) {
            if (isPlainObject(components$2[id2])) {
              components$2[id2] = App.extend(components$2[id2]);
            }
            return components$2[id2];
          }
          name = camelize(name);
          App[name] = (element, data2) => createComponent(name, element, data2);
          const opt = isPlainObject(options) ? { ...options } : options.options;
          opt.id = id2;
          opt.name = name;
          (_a = opt.install) == null ? void 0 : _a.call(opt, App, opt, name);
          if (App._initialized && !opt.functional) {
            requestAnimationFrame(() => createComponent(name, `[${id2}],[data-${id2}]`));
          }
          return components$2[id2] = opt;
        }
        function createComponent(name, element, data2, ...args) {
          const Component = component(name);
          return Component.options.functional ? new Component({ data: isPlainObject(element) ? element : [element, data2, ...args] }) : element ? $$(element).map(init2)[0] : init2();
          function init2(element2) {
            const instance = getComponent(element2, name);
            if (instance) {
              if (data2) {
                instance.$destroy();
              } else {
                return instance;
              }
            }
            return new Component({ el: element2, data: data2 });
          }
        }
        function getComponents(element) {
          return (element == null ? void 0 : element[DATA]) || {};
        }
        function getComponent(element, name) {
          return getComponents(element)[name];
        }
        function attachToElement(element, instance) {
          if (!element[DATA]) {
            element[DATA] = {};
          }
          element[DATA][instance.$options.name] = instance;
        }
        function detachFromElement(element, instance) {
          var _a;
          (_a = element[DATA]) == null ? true : delete _a[instance.$options.name];
          if (!isEmpty(element[DATA])) {
            delete element[DATA];
          }
        }
        function globalApi(App2) {
          App2.component = component;
          App2.getComponents = getComponents;
          App2.getComponent = getComponent;
          App2.update = update;
          App2.use = function(plugin) {
            if (plugin.installed) {
              return;
            }
            plugin.call(null, this);
            plugin.installed = true;
            return this;
          };
          App2.mixin = function(mixin, component2) {
            component2 = (isString(component2) ? this.component(component2) : component2) || this;
            component2.options = mergeOptions(component2.options, mixin);
          };
          App2.extend = function(options) {
            options || (options = {});
            const Super = this;
            const Sub = function UIkitComponent(options2) {
              init$1(this, options2);
            };
            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.options = mergeOptions(Super.options, options);
            Sub.super = Super;
            Sub.extend = Super.extend;
            return Sub;
          };
          let container;
          Object.defineProperty(App2, "container", {
            get() {
              return container || document.body;
            },
            set(element) {
              container = $(element);
            }
          });
        }
        function update(element, e) {
          element = element ? toNode(element) : document.body;
          for (const parentEl of parents(element).reverse()) {
            updateElement(parentEl, e);
          }
          apply(element, (element2) => updateElement(element2, e));
        }
        function updateElement(element, e) {
          const components2 = getComponents(element);
          for (const name in components2) {
            callUpdate(components2[name], e);
          }
        }
        function instanceApi(App2) {
          App2.prototype.$mount = function(el) {
            const instance = this;
            attachToElement(el, instance);
            instance.$options.el = el;
            if (document.contains(el)) {
              callConnected(instance);
            }
          };
          App2.prototype.$destroy = function(removeEl = false) {
            const instance = this;
            const { el } = instance.$options;
            if (el) {
              callDisconnected(instance);
            }
            callHook(instance, "destroy");
            detachFromElement(el, instance);
            if (removeEl) {
              remove$1(instance.$el);
            }
          };
          App2.prototype.$create = createComponent;
          App2.prototype.$emit = function(e) {
            callUpdate(this, e);
          };
          App2.prototype.$update = function(element = this.$el, e) {
            update(element, e);
          };
          App2.prototype.$reset = function() {
            callDisconnected(this);
            callConnected(this);
          };
          App2.prototype.$getComponent = getComponent;
          Object.defineProperties(App2.prototype, {
            $el: {
              get() {
                return this.$options.el;
              }
            },
            $container: Object.getOwnPropertyDescriptor(App2, "container")
          });
        }
        let id = 1;
        function generateId(instance, el = null) {
          return (el == null ? void 0 : el.id) || `${instance.$options.id}-${id++}`;
        }
        var SliderNav = {
          i18n: {
            next: "Next slide",
            previous: "Previous slide",
            slideX: "Slide %s",
            slideLabel: "%s of %s",
            role: "String"
          },
          data: {
            selNav: false,
            role: "region"
          },
          computed: {
            nav: ({ selNav }, $el) => $(selNav, $el),
            navChildren() {
              return children(this.nav);
            },
            selNavItem: ({ attrItem }) => `[${attrItem}],[data-${attrItem}]`,
            navItems(_, $el) {
              return $$(this.selNavItem, $el);
            }
          },
          watch: {
            nav(nav2, prev) {
              attr(nav2, "role", "tablist");
              if (prev) {
                this.$emit();
              }
            },
            list(list) {
              attr(list, "role", "presentation");
            },
            navChildren(children2) {
              attr(children2, "role", "presentation");
            },
            navItems(items) {
              for (const el of items) {
                const cmd = data(el, this.attrItem);
                const button = $("a,button", el) || el;
                let ariaLabel;
                let ariaControls = null;
                if (isNumeric(cmd)) {
                  const item = toNumber(cmd);
                  const slide2 = this.slides[item];
                  if (slide2) {
                    if (!slide2.id) {
                      slide2.id = generateId(this, slide2);
                    }
                    ariaControls = slide2.id;
                  }
                  ariaLabel = this.t("slideX", toFloat(cmd) + 1);
                  attr(button, "role", "tab");
                } else {
                  if (this.list) {
                    if (!this.list.id) {
                      this.list.id = generateId(this, this.list);
                    }
                    ariaControls = this.list.id;
                  }
                  ariaLabel = this.t(cmd);
                }
                attr(button, {
                  "aria-controls": ariaControls,
                  "aria-label": attr(button, "aria-label") || ariaLabel
                });
              }
            },
            slides(slides) {
              slides.forEach(
                (slide2, i) => attr(slide2, {
                  role: this.nav ? "tabpanel" : "group",
                  "aria-label": this.t("slideLabel", i + 1, this.length),
                  "aria-roledescription": this.nav ? null : "slide"
                })
              );
            },
            length(length) {
              const navLength = this.navChildren.length;
              if (this.nav && length !== navLength) {
                empty(this.nav);
                for (let i = 0; i < length; i++) {
                  append(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`);
                }
              }
            }
          },
          connected() {
            attr(this.$el, {
              role: this.role,
              "aria-roledescription": "carousel"
            });
          },
          update: [
            {
              write() {
                this.navItems.concat(this.nav).forEach((el) => el && (el.hidden = !this.maxIndex));
                this.updateNav();
              },
              events: ["resize"]
            }
          ],
          events: [
            {
              name: "click keydown",
              delegate() {
                return this.selNavItem;
              },
              filter() {
                return !this.parallax;
              },
              handler(e) {
                if (e.target.closest("a,button") && (e.type === "click" || e.keyCode === keyMap.SPACE)) {
                  e.preventDefault();
                  this.show(data(e.current, this.attrItem));
                }
              }
            },
            {
              name: "itemshow",
              handler: "updateNav"
            },
            {
              name: "keydown",
              delegate() {
                return this.selNavItem;
              },
              filter() {
                return !this.parallax;
              },
              handler(e) {
                const { current, keyCode } = e;
                const cmd = data(current, this.attrItem);
                if (!isNumeric(cmd)) {
                  return;
                }
                let i = keyCode === keyMap.HOME ? 0 : keyCode === keyMap.END ? "last" : keyCode === keyMap.LEFT ? "previous" : keyCode === keyMap.RIGHT ? "next" : -1;
                if (~i) {
                  e.preventDefault();
                  this.show(i);
                }
              }
            }
          ],
          methods: {
            updateNav() {
              const index2 = this.getValidIndex();
              for (const el of this.navItems) {
                const cmd = data(el, this.attrItem);
                const button = $("a,button", el) || el;
                if (isNumeric(cmd)) {
                  const item = toNumber(cmd);
                  const active2 = item === index2;
                  toggleClass(el, this.clsActive, active2);
                  toggleClass(button, "uk-disabled", this.parallax);
                  attr(button, {
                    "aria-selected": active2,
                    tabindex: active2 && !this.parallax ? null : -1
                  });
                  if (active2 && button && matches(parent(el), ":focus-within")) {
                    button.focus();
                  }
                } else {
                  toggleClass(
                    el,
                    "uk-invisible",
                    this.finite && (cmd === "previous" && index2 === 0 || cmd === "next" && index2 >= this.maxIndex)
                  );
                }
              }
            }
          }
        };
        var Slider = {
          mixins: [SliderAutoplay, SliderDrag, SliderNav, I18n],
          props: {
            clsActivated: String,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
          },
          data: () => ({
            easing: "ease",
            finite: false,
            velocity: 1,
            index: 0,
            prevIndex: -1,
            stack: [],
            percent: 0,
            clsActive: "uk-active",
            clsActivated: "",
            clsEnter: "uk-slide-enter",
            clsLeave: "uk-slide-leave",
            clsSlideActive: "uk-slide-active",
            Transitioner: false,
            transitionOptions: {}
          }),
          connected() {
            this.prevIndex = -1;
            this.index = this.getValidIndex(this.$props.index);
            this.stack = [];
          },
          disconnected() {
            removeClass(this.slides, this.clsActive);
          },
          computed: {
            duration: ({ velocity }, $el) => speedUp($el.offsetWidth / velocity),
            list: ({ selList }, $el) => $(selList, $el),
            maxIndex() {
              return this.length - 1;
            },
            slides() {
              return children(this.list);
            },
            length() {
              return this.slides.length;
            }
          },
          watch: {
            slides(slides, prev) {
              if (prev) {
                this.$emit();
              }
            }
          },
          observe: resize(),
          events: {
            itemshow({ target }) {
              addClass(target, this.clsEnter, this.clsSlideActive);
            },
            itemshown({ target }) {
              removeClass(target, this.clsEnter);
            },
            itemhide({ target }) {
              addClass(target, this.clsLeave);
            },
            itemhidden({ target }) {
              removeClass(target, this.clsLeave, this.clsSlideActive);
            }
          },
          methods: {
            show(index2, force = false) {
              var _a;
              if (this.dragging || !this.length || this.parallax) {
                return;
              }
              const { stack } = this;
              const queueIndex = force ? 0 : stack.length;
              const reset2 = () => {
                stack.splice(queueIndex, 1);
                if (stack.length) {
                  this.show(stack.shift(), true);
                }
              };
              stack[force ? "unshift" : "push"](index2);
              if (!force && stack.length > 1) {
                if (stack.length === 2) {
                  (_a = this._transitioner) == null ? void 0 : _a.forward(Math.min(this.duration, 200));
                }
                return;
              }
              const prevIndex = this.getIndex(this.index);
              const prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
              const nextIndex = this.getIndex(index2, this.index);
              const next = this.slides[nextIndex];
              if (prev === next) {
                reset2();
                return;
              }
              this.dir = getDirection(index2, prevIndex);
              this.prevIndex = prevIndex;
              this.index = nextIndex;
              if (prev && !trigger(prev, "beforeitemhide", [this]) || !trigger(next, "beforeitemshow", [this, prev])) {
                this.index = this.prevIndex;
                reset2();
                return;
              }
              const promise = this._show(prev, next, force).then(() => {
                prev && trigger(prev, "itemhidden", [this]);
                trigger(next, "itemshown", [this]);
                stack.shift();
                this._transitioner = null;
                requestAnimationFrame(() => stack.length && this.show(stack.shift(), true));
              });
              prev && trigger(prev, "itemhide", [this]);
              trigger(next, "itemshow", [this]);
              return promise;
            },
            getIndex(index2 = this.index, prev = this.index) {
              return clamp(
                getIndex(index2, this.slides, prev, this.finite),
                0,
                Math.max(0, this.maxIndex)
              );
            },
            getValidIndex(index2 = this.index, prevIndex = this.prevIndex) {
              return this.getIndex(index2, prevIndex);
            },
            _show(prev, next, force) {
              this._transitioner = this._getTransitioner(prev, next, this.dir, {
                easing: force ? next.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                ...this.transitionOptions
              });
              if (!force && !prev) {
                this._translate(1);
                return Promise.resolve();
              }
              const { length } = this.stack;
              return this._transitioner[length > 1 ? "forward" : "show"](
                length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration,
                this.percent
              );
            },
            _translate(percent2, prev = this.prevIndex, next = this.index) {
              const transitioner = this._getTransitioner(prev === next ? false : prev, next);
              transitioner.translate(percent2);
              return transitioner;
            },
            _getTransitioner(prev = this.prevIndex, next = this.index, dir = this.dir || 1, options = this.transitionOptions) {
              return new this.Transitioner(
                isNumber(prev) ? this.slides[prev] : prev,
                isNumber(next) ? this.slides[next] : next,
                dir * (isRtl ? -1 : 1),
                options
              );
            }
          }
        };
        function getDirection(index2, prevIndex) {
          return index2 === "next" ? 1 : index2 === "previous" ? -1 : index2 < prevIndex ? -1 : 1;
        }
        function speedUp(x) {
          return 0.5 * x + 300;
        }
        var Slideshow = {
          mixins: [Slider],
          props: {
            animation: String
          },
          data: {
            animation: "slide",
            clsActivated: "uk-transition-active",
            Animations: Animations$2,
            Transitioner: Transitioner$1
          },
          computed: {
            animation({ animation, Animations: Animations2 }) {
              return { ...Animations2[animation] || Animations2.slide, name: animation };
            },
            transitionOptions() {
              return { animation: this.animation };
            }
          },
          events: {
            beforeitemshow({ target }) {
              addClass(target, this.clsActive);
            },
            itemshown({ target }) {
              addClass(target, this.clsActivated);
            },
            itemhidden({ target }) {
              removeClass(target, this.clsActive, this.clsActivated);
            }
          }
        };
        var Animations$1 = {
          ...Animations$2,
          fade: {
            show() {
              return [{ opacity: 0 }, { opacity: 1 }];
            },
            percent(current) {
              return 1 - css(current, "opacity");
            },
            translate(percent2) {
              return [{ opacity: 1 - percent2 }, { opacity: percent2 }];
            }
          },
          scale: {
            show() {
              return [
                { opacity: 0, transform: scale3d(1 - 0.2) },
                { opacity: 1, transform: scale3d(1) }
              ];
            },
            percent(current) {
              return 1 - css(current, "opacity");
            },
            translate(percent2) {
              return [
                { opacity: 1 - percent2, transform: scale3d(1 - 0.2 * percent2) },
                { opacity: percent2, transform: scale3d(1 - 0.2 + 0.2 * percent2) }
              ];
            }
          }
        };
        var LightboxPanel = {
          mixins: [Modal, Slideshow],
          functional: true,
          props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
          },
          data: () => ({
            preload: 1,
            videoAutoplay: false,
            delayControls: 3e3,
            items: [],
            cls: "uk-open",
            clsPage: "uk-lightbox-page",
            selList: ".uk-lightbox-items",
            attrItem: "uk-lightbox-item",
            selClose: ".uk-close-large",
            selCaption: ".uk-lightbox-caption",
            pauseOnHover: false,
            velocity: 2,
            Animations: Animations$1,
            template: `<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>`
          }),
          created() {
            const $el = $(this.template);
            const list = $(this.selList, $el);
            this.items.forEach(() => append(list, "<li>"));
            const close = $("[uk-close]", $el);
            const closeLabel = this.t("close");
            if (close && closeLabel) {
              close.dataset.i18n = JSON.stringify({ label: closeLabel });
            }
            this.$mount(append(this.container, $el));
          },
          computed: {
            caption: ({ selCaption }, $el) => $(selCaption, $el)
          },
          events: [
            {
              name: `${pointerMove$1} ${pointerDown$1} keydown`,
              handler: "showControls"
            },
            {
              name: "click",
              self: true,
              delegate() {
                return `${this.selList} > *`;
              },
              handler(e) {
                if (!e.defaultPrevented) {
                  this.hide();
                }
              }
            },
            {
              name: "shown",
              self: true,
              handler: "showControls"
            },
            {
              name: "hide",
              self: true,
              handler() {
                this.hideControls();
                removeClass(this.slides, this.clsActive);
                Transition.stop(this.slides);
              }
            },
            {
              name: "hidden",
              self: true,
              handler() {
                this.$destroy(true);
              }
            },
            {
              name: "keyup",
              el: () => document,
              handler({ keyCode }) {
                if (!this.isToggled(this.$el) || !this.draggable) {
                  return;
                }
                let i = -1;
                if (keyCode === keyMap.LEFT) {
                  i = "previous";
                } else if (keyCode === keyMap.RIGHT) {
                  i = "next";
                } else if (keyCode === keyMap.HOME) {
                  i = 0;
                } else if (keyCode === keyMap.END) {
                  i = "last";
                }
                if (~i) {
                  this.show(i);
                }
              }
            },
            {
              name: "beforeitemshow",
              handler(e) {
                if (this.isToggled()) {
                  return;
                }
                this.draggable = false;
                e.preventDefault();
                this.toggleElement(this.$el, true, false);
                this.animation = Animations$1["scale"];
                removeClass(e.target, this.clsActive);
                this.stack.splice(1, 0, this.index);
              }
            },
            {
              name: "itemshow",
              handler() {
                html(this.caption, this.getItem().caption || "");
                for (let j = -this.preload; j <= this.preload; j++) {
                  this.loadItem(this.index + j);
                }
              }
            },
            {
              name: "itemshown",
              handler() {
                this.draggable = this.$props.draggable;
              }
            },
            {
              name: "itemload",
              async handler(_, item) {
                const { source: src, type, alt = "", poster, attrs = {} } = item;
                this.setItem(item, "<span uk-spinner></span>");
                if (!src) {
                  return;
                }
                let matches2;
                const iframeAttrs = {
                  allowfullscreen: "",
                  style: "max-width: 100%; box-sizing: border-box;",
                  "uk-responsive": "",
                  "uk-video": `${this.videoAutoplay}`
                };
                if (type === "image" || src.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                  const img2 = createEl("img", { src, alt, ...attrs });
                  on(img2, "load", () => this.setItem(item, img2));
                  on(img2, "error", () => this.setError(item));
                } else if (type === "video" || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                  const video = createEl("video", {
                    src,
                    poster,
                    controls: "",
                    playsinline: "",
                    "uk-video": `${this.videoAutoplay}`,
                    ...attrs
                  });
                  on(video, "loadedmetadata", () => this.setItem(item, video));
                  on(video, "error", () => this.setError(item));
                } else if (type === "iframe" || src.match(/\.(html|php)($|\?)/i)) {
                  this.setItem(
                    item,
                    createEl("iframe", {
                      src,
                      allowfullscreen: "",
                      class: "uk-lightbox-iframe",
                      ...attrs
                    })
                  );
                } else if (matches2 = src.match(
                  /\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
                )) {
                  this.setItem(
                    item,
                    createEl("iframe", {
                      src: `https://www.youtube${matches2[1] || ""}.com/embed/${matches2[2]}${matches2[3] ? `?${matches2[3]}` : ""}`,
                      width: 1920,
                      height: 1080,
                      ...iframeAttrs,
                      ...attrs
                    })
                  );
                } else if (matches2 = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
                  try {
                    const { height: height2, width: width2 } = await (await fetch(
                      `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                        src
                      )}`,
                      { credentials: "omit" }
                    )).json();
                    this.setItem(
                      item,
                      createEl("iframe", {
                        src: `https://player.vimeo.com/video/${matches2[1]}${matches2[2] ? `?${matches2[2]}` : ""}`,
                        width: width2,
                        height: height2,
                        ...iframeAttrs,
                        ...attrs
                      })
                    );
                  } catch (e) {
                    this.setError(item);
                  }
                }
              }
            }
          ],
          methods: {
            loadItem(index2 = this.index) {
              const item = this.getItem(index2);
              if (!this.getSlide(item).childElementCount) {
                trigger(this.$el, "itemload", [item]);
              }
            },
            getItem(index2 = this.index) {
              return this.items[getIndex(index2, this.slides)];
            },
            setItem(item, content) {
              trigger(this.$el, "itemloaded", [this, html(this.getSlide(item), content)]);
            },
            getSlide(item) {
              return this.slides[this.items.indexOf(item)];
            },
            setError(item) {
              this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },
            showControls() {
              clearTimeout(this.controlsTimer);
              this.controlsTimer = setTimeout(this.hideControls, this.delayControls);
              addClass(this.$el, "uk-active", "uk-transition-active");
            },
            hideControls() {
              removeClass(this.$el, "uk-active", "uk-transition-active");
            }
          }
        };
        function createEl(tag, attrs) {
          const el = fragment(`<${tag}>`);
          attr(el, attrs);
          return el;
        }
        var lightbox = {
          install: install$3,
          props: { toggle: String },
          data: { toggle: "a" },
          computed: {
            toggles: ({ toggle: toggle2 }, $el) => $$(toggle2, $el)
          },
          watch: {
            toggles(toggles) {
              this.hide();
              for (const toggle2 of toggles) {
                if (isTag(toggle2, "a")) {
                  attr(toggle2, "role", "button");
                }
              }
            }
          },
          disconnected() {
            this.hide();
          },
          events: {
            name: "click",
            delegate() {
              return `${this.toggle}:not(.uk-disabled)`;
            },
            handler(e) {
              e.preventDefault();
              this.show(e.current);
            }
          },
          methods: {
            show(index2) {
              const items = uniqueBy(this.toggles.map(toItem), "source");
              if (isElement(index2)) {
                const { source } = toItem(index2);
                index2 = findIndex(items, ({ source: src }) => source === src);
              }
              this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items });
              on(this.panel.$el, "hidden", () => this.panel = null);
              return this.panel.show(index2);
            },
            hide() {
              var _a;
              return (_a = this.panel) == null ? void 0 : _a.hide();
            }
          }
        };
        function install$3(UIkit, Lightbox) {
          if (!UIkit.lightboxPanel) {
            UIkit.component("lightboxPanel", LightboxPanel);
          }
          assign(Lightbox.props, UIkit.component("lightboxPanel").options.props);
        }
        function toItem(el) {
          const item = {};
          for (const attr2 of ["href", "caption", "type", "poster", "alt", "attrs"]) {
            item[attr2 === "href" ? "source" : attr2] = data(el, attr2);
          }
          item.attrs = parseOptions(item.attrs);
          return item;
        }
        var notification = {
          mixins: [Container],
          functional: true,
          args: ["message", "status"],
          data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: "",
            pos: "top-center",
            clsContainer: "uk-notification",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message"
          },
          install: install$2,
          computed: {
            marginProp: ({ pos }) => `margin-${pos.match(/[a-z]+(?=-)/)[0]}`,
            startProps() {
              return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
            }
          },
          created() {
            const posClass = `${this.clsContainer}-${this.pos}`;
            const containerAttr = `data-${this.clsContainer}-container`;
            const container = $(`.${posClass}[${containerAttr}]`, this.container) || append(
              this.container,
              `<div class="${this.clsContainer} ${posClass}" ${containerAttr}></div>`
            );
            this.$mount(
              append(
                container,
                `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`
              )
            );
          },
          async connected() {
            const margin = toFloat(css(this.$el, this.marginProp));
            await Transition.start(css(this.$el, this.startProps), {
              opacity: 1,
              [this.marginProp]: margin
            });
            if (this.timeout) {
              this.timer = setTimeout(this.close, this.timeout);
            }
          },
          events: {
            click(e) {
              if (e.target.closest('a[href="#"],a[href=""]')) {
                e.preventDefault();
              }
              this.close();
            },
            [pointerEnter]() {
              if (this.timer) {
                clearTimeout(this.timer);
              }
            },
            [pointerLeave]() {
              if (this.timeout) {
                this.timer = setTimeout(this.close, this.timeout);
              }
            }
          },
          methods: {
            async close(immediate) {
              const removeFn = (el) => {
                const container = parent(el);
                trigger(el, "close", [this]);
                remove$1(el);
                if (!(container == null ? void 0 : container.hasChildNodes())) {
                  remove$1(container);
                }
              };
              if (this.timer) {
                clearTimeout(this.timer);
              }
              if (!immediate) {
                await Transition.start(this.$el, this.startProps);
              }
              removeFn(this.$el);
            }
          }
        };
        function install$2(UIkit) {
          UIkit.notification.closeAll = function(group, immediate) {
            apply(document.body, (el) => {
              const notification2 = UIkit.getComponent(el, "notification");
              if (notification2 && (!group || group === notification2.group)) {
                notification2.close(immediate);
              }
            });
          };
        }
        var Media = {
          props: {
            media: Boolean
          },
          data: {
            media: false
          },
          connected() {
            const media = toMedia(this.media, this.$el);
            this.matchMedia = true;
            if (media) {
              this.mediaObj = window.matchMedia(media);
              const handler = () => {
                this.matchMedia = this.mediaObj.matches;
                trigger(this.$el, createEvent("mediachange", false, true, [this.mediaObj]));
              };
              this.offMediaObj = on(this.mediaObj, "change", () => {
                handler();
                this.$emit("resize");
              });
              handler();
            }
          },
          disconnected() {
            var _a;
            (_a = this.offMediaObj) == null ? void 0 : _a.call(this);
          }
        };
        function toMedia(value, element) {
          if (isString(value)) {
            if (startsWith(value, "@")) {
              value = toFloat(css(element, `--uk-breakpoint-${value.substr(1)}`));
            } else if (isNaN(value)) {
              return value;
            }
          }
          return value && isNumeric(value) ? `(min-width: ${value}px)` : "";
        }
        function getMaxPathLength(el) {
          return Math.ceil(
            Math.max(
              0,
              ...$$("[stroke]", el).map((stroke) => {
                try {
                  return stroke.getTotalLength();
                } catch (e) {
                  return 0;
                }
              })
            )
          );
        }
        const props = {
          x: transformFn,
          y: transformFn,
          rotate: transformFn,
          scale: transformFn,
          color: colorFn,
          backgroundColor: colorFn,
          borderColor: colorFn,
          blur: filterFn,
          hue: filterFn,
          fopacity: filterFn,
          grayscale: filterFn,
          invert: filterFn,
          saturate: filterFn,
          sepia: filterFn,
          opacity: cssPropFn,
          stroke: strokeFn,
          bgx: backgroundFn,
          bgy: backgroundFn
        };
        const { keys } = Object;
        var Parallax = {
          mixins: [Media],
          props: fillObject(keys(props), "list"),
          data: fillObject(keys(props), void 0),
          computed: {
            props(properties, $el) {
              const stops = {};
              for (const prop in properties) {
                if (prop in props && !isUndefined(properties[prop])) {
                  stops[prop] = properties[prop].slice();
                }
              }
              const result = {};
              for (const prop in stops) {
                result[prop] = props[prop](prop, $el, stops[prop], stops);
              }
              return result;
            }
          },
          events: {
            load() {
              this.$emit();
            }
          },
          methods: {
            reset() {
              for (const prop in this.getCss(0)) {
                css(this.$el, prop, "");
              }
            },
            getCss(percent2) {
              const css2 = {};
              for (const prop in this.props) {
                this.props[prop](css2, clamp(percent2));
              }
              css2.willChange = Object.keys(css2).map(propName).join(",");
              return css2;
            }
          }
        };
        function transformFn(prop, el, stops) {
          let unit = getUnit(stops) || { x: "px", y: "px", rotate: "deg" }[prop] || "";
          let transformFn2;
          if (prop === "x" || prop === "y") {
            prop = `translate${ucfirst(prop)}`;
            transformFn2 = (stop2) => toFloat(toFloat(stop2).toFixed(unit === "px" ? 0 : 6));
          } else if (prop === "scale") {
            unit = "";
            transformFn2 = (stop2) => {
              var _a;
              return getUnit([stop2]) ? toPx(stop2, "width", el, true) / el[`offset${((_a = stop2.endsWith) == null ? void 0 : _a.call(stop2, "vh")) ? "Height" : "Width"}`] : toFloat(stop2);
            };
          }
          if (stops.length === 1) {
            stops.unshift(prop === "scale" ? 1 : 0);
          }
          stops = parseStops(stops, transformFn2);
          return (css2, percent2) => {
            css2.transform = `${css2.transform || ""} ${prop}(${getValue(stops, percent2)}${unit})`;
          };
        }
        function colorFn(prop, el, stops) {
          if (stops.length === 1) {
            stops.unshift(getCssValue(el, prop, ""));
          }
          stops = parseStops(stops, (stop2) => parseColor(el, stop2));
          return (css2, percent2) => {
            const [start, end, p] = getStop(stops, percent2);
            const value = start.map((value2, i) => {
              value2 += p * (end[i] - value2);
              return i === 3 ? toFloat(value2) : parseInt(value2, 10);
            }).join(",");
            css2[prop] = `rgba(${value})`;
          };
        }
        function parseColor(el, color) {
          return getCssValue(el, "color", color).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(toFloat);
        }
        function filterFn(prop, el, stops) {
          if (stops.length === 1) {
            stops.unshift(0);
          }
          const unit = getUnit(stops) || { blur: "px", hue: "deg" }[prop] || "%";
          prop = { fopacity: "opacity", hue: "hue-rotate" }[prop] || prop;
          stops = parseStops(stops);
          return (css2, percent2) => {
            const value = getValue(stops, percent2);
            css2.filter = `${css2.filter || ""} ${prop}(${value + unit})`;
          };
        }
        function cssPropFn(prop, el, stops) {
          if (stops.length === 1) {
            stops.unshift(getCssValue(el, prop, ""));
          }
          stops = parseStops(stops);
          return (css2, percent2) => {
            css2[prop] = getValue(stops, percent2);
          };
        }
        function strokeFn(prop, el, stops) {
          if (stops.length === 1) {
            stops.unshift(0);
          }
          const unit = getUnit(stops);
          const length = getMaxPathLength(el);
          stops = parseStops(stops.reverse(), (stop2) => {
            stop2 = toFloat(stop2);
            return unit === "%" ? stop2 * length / 100 : stop2;
          });
          if (!stops.some(([value]) => value)) {
            return noop;
          }
          css(el, "strokeDasharray", length);
          return (css2, percent2) => {
            css2.strokeDashoffset = getValue(stops, percent2);
          };
        }
        function backgroundFn(prop, el, stops, props2) {
          if (stops.length === 1) {
            stops.unshift(0);
          }
          const attr2 = prop === "bgy" ? "height" : "width";
          props2[prop] = parseStops(stops, (stop2) => toPx(stop2, attr2, el));
          const bgProps = ["bgx", "bgy"].filter((prop2) => prop2 in props2);
          if (bgProps.length === 2 && prop === "bgx") {
            return noop;
          }
          if (getCssValue(el, "backgroundSize", "") === "cover") {
            return backgroundCoverFn(prop, el, stops, props2);
          }
          const positions = {};
          for (const prop2 of bgProps) {
            positions[prop2] = getBackgroundPos(el, prop2);
          }
          return setBackgroundPosFn(bgProps, positions, props2);
        }
        function backgroundCoverFn(prop, el, stops, props2) {
          const dimImage = getBackgroundImageDimensions(el);
          if (!dimImage.width) {
            return noop;
          }
          const dimEl = {
            width: el.offsetWidth,
            height: el.offsetHeight
          };
          const bgProps = ["bgx", "bgy"].filter((prop2) => prop2 in props2);
          const positions = {};
          for (const prop2 of bgProps) {
            const values = props2[prop2].map(([value]) => value);
            const min = Math.min(...values);
            const max = Math.max(...values);
            const down = values.indexOf(min) < values.indexOf(max);
            const diff = max - min;
            positions[prop2] = `${(down ? -diff : 0) - (down ? min : max)}px`;
            dimEl[prop2 === "bgy" ? "height" : "width"] += diff;
          }
          const dim = Dimensions.cover(dimImage, dimEl);
          for (const prop2 of bgProps) {
            const attr2 = prop2 === "bgy" ? "height" : "width";
            const overflow = dim[attr2] - dimEl[attr2];
            positions[prop2] = `max(${getBackgroundPos(el, prop2)},-${overflow}px) + ${positions[prop2]}`;
          }
          const fn = setBackgroundPosFn(bgProps, positions, props2);
          return (css2, percent2) => {
            fn(css2, percent2);
            css2.backgroundSize = `${dim.width}px ${dim.height}px`;
            css2.backgroundRepeat = "no-repeat";
          };
        }
        function getBackgroundPos(el, prop) {
          return getCssValue(el, `background-position-${prop.substr(-1)}`, "");
        }
        function setBackgroundPosFn(bgProps, positions, props2) {
          return function(css2, percent2) {
            for (const prop of bgProps) {
              const value = getValue(props2[prop], percent2);
              css2[`background-position-${prop.substr(-1)}`] = `calc(${positions[prop]} + ${value}px)`;
            }
          };
        }
        const dimensions = {};
        function getBackgroundImageDimensions(el) {
          const src = css(el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
          if (dimensions[src]) {
            return dimensions[src];
          }
          const image = new Image();
          if (src) {
            image.src = src;
            if (!image.naturalWidth) {
              image.onload = () => {
                dimensions[src] = toDimensions(image);
                trigger(el, createEvent("load", false));
              };
              return toDimensions(image);
            }
          }
          return dimensions[src] = toDimensions(image);
        }
        function toDimensions(image) {
          return {
            width: image.naturalWidth,
            height: image.naturalHeight
          };
        }
        function parseStops(stops, fn = toFloat) {
          const result = [];
          const { length } = stops;
          let nullIndex = 0;
          for (let i = 0; i < length; i++) {
            let [value, percent2] = isString(stops[i]) ? stops[i].trim().split(/ (?![^(]*\))/) : [stops[i]];
            value = fn(value);
            percent2 = percent2 ? toFloat(percent2) / 100 : null;
            if (i === 0) {
              if (percent2 === null) {
                percent2 = 0;
              } else if (percent2) {
                result.push([value, 0]);
              }
            } else if (i === length - 1) {
              if (percent2 === null) {
                percent2 = 1;
              } else if (percent2 !== 1) {
                result.push([value, percent2]);
                percent2 = 1;
              }
            }
            result.push([value, percent2]);
            if (percent2 === null) {
              nullIndex++;
            } else if (nullIndex) {
              const leftPercent = result[i - nullIndex - 1][1];
              const p = (percent2 - leftPercent) / (nullIndex + 1);
              for (let j = nullIndex; j > 0; j--) {
                result[i - j][1] = leftPercent + p * (nullIndex - j + 1);
              }
              nullIndex = 0;
            }
          }
          return result;
        }
        function getStop(stops, percent2) {
          const index2 = findIndex(stops.slice(1), ([, targetPercent]) => percent2 <= targetPercent) + 1;
          return [
            stops[index2 - 1][0],
            stops[index2][0],
            (percent2 - stops[index2 - 1][1]) / (stops[index2][1] - stops[index2 - 1][1])
          ];
        }
        function getValue(stops, percent2) {
          const [start, end, p] = getStop(stops, percent2);
          return start + Math.abs(start - end) * p * (start < end ? 1 : -1);
        }
        const unitRe = /^-?\d+(?:\.\d+)?(\S+)?/;
        function getUnit(stops, defaultUnit) {
          var _a;
          for (const stop2 of stops) {
            const match2 = (_a = stop2.match) == null ? void 0 : _a.call(stop2, unitRe);
            if (match2) {
              return match2[1];
            }
          }
          return defaultUnit;
        }
        function getCssValue(el, prop, value) {
          const prev = el.style[prop];
          const val = css(css(el, prop, value), prop);
          el.style[prop] = prev;
          return val;
        }
        function fillObject(keys2, value) {
          return keys2.reduce((data2, prop) => {
            data2[prop] = value;
            return data2;
          }, {});
        }
        function ease(percent2, easing) {
          return easing >= 0 ? Math.pow(percent2, easing + 1) : 1 - Math.pow(1 - percent2, 1 - easing);
        }
        var parallax = {
          mixins: [Parallax],
          props: {
            target: String,
            viewport: Number,
            // Deprecated
            easing: Number,
            start: String,
            end: String
          },
          data: {
            target: false,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
          },
          computed: {
            target: ({ target }, $el) => getOffsetElement(target && query(target, $el) || $el),
            start({ start }) {
              return toPx(start, "height", this.target, true);
            },
            end({ end, viewport: viewport2 }) {
              return toPx(
                end || (viewport2 = (1 - viewport2) * 100) && `${viewport2}vh+${viewport2}%`,
                "height",
                this.target,
                true
              );
            }
          },
          observe: [
            viewport(),
            scroll$1({ target: ({ target }) => target }),
            resize({ target: ({ $el, target }) => [$el, target, scrollParent(target, true)] })
          ],
          update: {
            read({ percent: percent2 }, types) {
              if (!types.has("scroll")) {
                percent2 = false;
              }
              if (!isVisible(this.$el)) {
                return false;
              }
              if (!this.matchMedia) {
                return;
              }
              const prev = percent2;
              percent2 = ease(scrolledOver(this.target, this.start, this.end), this.easing);
              return {
                percent: percent2,
                style: prev === percent2 ? false : this.getCss(percent2)
              };
            },
            write({ style }) {
              if (!this.matchMedia) {
                this.reset();
                return;
              }
              style && css(this.$el, style);
            },
            events: ["scroll", "resize"]
          }
        };
        function getOffsetElement(el) {
          return el ? "offsetTop" in el ? el : getOffsetElement(parent(el)) : document.documentElement;
        }
        var SliderParallax = {
          props: {
            parallax: Boolean,
            parallaxTarget: Boolean,
            parallaxStart: String,
            parallaxEnd: String,
            parallaxEasing: Number
          },
          data: {
            parallax: false,
            parallaxTarget: false,
            parallaxStart: 0,
            parallaxEnd: 0,
            parallaxEasing: 0
          },
          observe: [
            resize({
              target: ({ $el, parallaxTarget }) => [$el, parallaxTarget],
              filter: ({ parallax: parallax2 }) => parallax2
            }),
            scroll$1({ filter: ({ parallax: parallax2 }) => parallax2 })
          ],
          computed: {
            parallaxTarget({ parallaxTarget }, $el) {
              return parallaxTarget && query(parallaxTarget, $el) || this.list;
            }
          },
          update: {
            write() {
              if (!this.parallax) {
                return;
              }
              const target = this.parallaxTarget;
              const start = toPx(this.parallaxStart, "height", target, true);
              const end = toPx(this.parallaxEnd, "height", target, true);
              const percent2 = ease(scrolledOver(target, start, end), this.parallaxEasing);
              const [prevIndex, slidePercent] = this.getIndexAt(percent2);
              const nextIndex = this.getValidIndex(prevIndex + Math.ceil(slidePercent));
              const prev = this.slides[prevIndex];
              const next = this.slides[nextIndex];
              const { triggerShow, triggerShown, triggerHide, triggerHidden } = useTriggers(this);
              if (~this.prevIndex) {
                for (const i of /* @__PURE__ */ new Set([this.index, this.prevIndex])) {
                  if (!includes([nextIndex, prevIndex], i)) {
                    triggerHide(this.slides[i]);
                    triggerHidden(this.slides[i]);
                  }
                }
              }
              const changed = this.prevIndex !== prevIndex || this.index !== nextIndex;
              this.dir = 1;
              this.prevIndex = prevIndex;
              this.index = nextIndex;
              if (prev !== next) {
                triggerHide(prev);
              }
              triggerShow(next);
              if (changed) {
                triggerShown(prev);
              }
              this._translate(prev === next ? 1 : slidePercent, prev, next);
            },
            events: ["scroll", "resize"]
          },
          methods: {
            getIndexAt(percent2) {
              const index2 = percent2 * (this.length - 1);
              return [Math.floor(index2), index2 % 1];
            }
          }
        };
        function useTriggers(cmp) {
          const { clsSlideActive, clsEnter: clsEnter2, clsLeave: clsLeave2 } = cmp;
          return { triggerShow, triggerShown, triggerHide, triggerHidden };
          function triggerShow(el) {
            if (hasClass(el, clsLeave2)) {
              triggerHide(el);
              triggerHidden(el);
            }
            if (!hasClass(el, clsSlideActive)) {
              trigger(el, "beforeitemshow", [cmp]);
              trigger(el, "itemshow", [cmp]);
            }
          }
          function triggerShown(el) {
            if (hasClass(el, clsEnter2)) {
              trigger(el, "itemshown", [cmp]);
            }
          }
          function triggerHide(el) {
            if (!hasClass(el, clsSlideActive)) {
              triggerShow(el);
            }
            if (hasClass(el, clsEnter2)) {
              triggerShown(el);
            }
            if (!hasClass(el, clsLeave2)) {
              trigger(el, "beforeitemhide", [cmp]);
              trigger(el, "itemhide", [cmp]);
            }
          }
          function triggerHidden(el) {
            if (hasClass(el, clsLeave2)) {
              trigger(el, "itemhidden", [cmp]);
            }
          }
        }
        var SliderReactive = {
          update: {
            write() {
              if (this.stack.length || this.dragging || this.parallax) {
                return;
              }
              const index2 = this.getValidIndex();
              if (!~this.prevIndex || this.index !== index2) {
                this.show(index2);
              } else {
                this._translate(1, this.prevIndex, this.index);
              }
            },
            events: ["resize"]
          }
        };
        var SliderPreload = {
          observe: lazyload({
            target: ({ slides }) => slides,
            targets: (instance) => instance.getAdjacentSlides()
          }),
          methods: {
            getAdjacentSlides() {
              return [1, -1].map((i) => this.slides[this.getIndex(this.index + i)]);
            }
          }
        };
        function Transitioner(prev, next, dir, { center, easing, list }) {
          const from = prev ? getLeft(prev, list, center) : getLeft(next, list, center) + dimensions$1(next).width * dir;
          const to = next ? getLeft(next, list, center) : from + dimensions$1(prev).width * dir * (isRtl ? -1 : 1);
          let resolve;
          return {
            dir,
            show(duration, percent2 = 0, linear) {
              const timing = linear ? "linear" : easing;
              duration -= Math.round(duration * clamp(percent2, -1, 1));
              this.translate(percent2);
              percent2 = prev ? percent2 : clamp(percent2, 0, 1);
              triggerUpdate(this.getItemIn(), "itemin", { percent: percent2, duration, timing, dir });
              prev && triggerUpdate(this.getItemIn(true), "itemout", {
                percent: 1 - percent2,
                duration,
                timing,
                dir
              });
              return new Promise((res) => {
                resolve || (resolve = res);
                Transition.start(
                  list,
                  { transform: translate(-to * (isRtl ? -1 : 1), "px") },
                  duration,
                  timing
                ).then(resolve, noop);
              });
            },
            cancel() {
              return Transition.cancel(list);
            },
            reset() {
              css(list, "transform", "");
            },
            async forward(duration, percent2 = this.percent()) {
              await this.cancel();
              return this.show(duration, percent2, true);
            },
            translate(percent2) {
              const distance = this.getDistance() * dir * (isRtl ? -1 : 1);
              css(
                list,
                "transform",
                translate(
                  clamp(
                    -to + (distance - distance * percent2),
                    -getWidth(list),
                    dimensions$1(list).width
                  ) * (isRtl ? -1 : 1),
                  "px"
                )
              );
              const actives = this.getActives();
              const itemIn = this.getItemIn();
              const itemOut = this.getItemIn(true);
              percent2 = prev ? clamp(percent2, -1, 1) : 0;
              for (const slide2 of children(list)) {
                const isActive = includes(actives, slide2);
                const isIn2 = slide2 === itemIn;
                const isOut = slide2 === itemOut;
                const translateIn = isIn2 || !isOut && (isActive || dir * (isRtl ? -1 : 1) === -1 ^ getElLeft(slide2, list) > getElLeft(prev || next));
                triggerUpdate(slide2, `itemtranslate${translateIn ? "in" : "out"}`, {
                  dir,
                  percent: isOut ? 1 - percent2 : isIn2 ? percent2 : isActive ? 1 : 0
                });
              }
            },
            percent() {
              return Math.abs(
                (css(list, "transform").split(",")[4] * (isRtl ? -1 : 1) + from) / (to - from)
              );
            },
            getDistance() {
              return Math.abs(to - from);
            },
            getItemIn(out = false) {
              let actives = this.getActives();
              let nextActives = inView(list, getLeft(next || prev, list, center));
              if (out) {
                const temp = actives;
                actives = nextActives;
                nextActives = temp;
              }
              return nextActives[findIndex(nextActives, (el) => !includes(actives, el))];
            },
            getActives() {
              return inView(list, getLeft(prev || next, list, center));
            }
          };
        }
        function getLeft(el, list, center) {
          const left = getElLeft(el, list);
          return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
        }
        function getMax(list) {
          return Math.max(0, getWidth(list) - dimensions$1(list).width);
        }
        function getWidth(list) {
          return sumBy(children(list), (el) => dimensions$1(el).width);
        }
        function centerEl(el, list) {
          return dimensions$1(list).width / 2 - dimensions$1(el).width / 2;
        }
        function getElLeft(el, list) {
          return el && (position(el).left + (isRtl ? dimensions$1(el).width - dimensions$1(list).width : 0)) * (isRtl ? -1 : 1) || 0;
        }
        function inView(list, listLeft) {
          listLeft -= 1;
          const listWidth = dimensions$1(list).width;
          const listRight = listLeft + listWidth + 2;
          return children(list).filter((slide2) => {
            const slideLeft = getElLeft(slide2, list);
            const slideRight = slideLeft + Math.min(dimensions$1(slide2).width, listWidth);
            return slideLeft >= listLeft && slideRight <= listRight;
          });
        }
        function triggerUpdate(el, type, data2) {
          trigger(el, createEvent(type, false, false, data2));
        }
        var slider = {
          mixins: [Class, Slider, SliderReactive, SliderParallax, SliderPreload],
          props: {
            center: Boolean,
            sets: Boolean
          },
          data: {
            center: false,
            sets: false,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            Transitioner
          },
          computed: {
            finite({ finite }) {
              return finite || isFinite(this.list, this.center);
            },
            maxIndex() {
              if (!this.finite || this.center && !this.sets) {
                return this.length - 1;
              }
              if (this.center) {
                return last(this.sets);
              }
              let lft = 0;
              const max = getMax(this.list);
              const index2 = findIndex(this.slides, (el) => {
                if (lft >= max) {
                  return true;
                }
                lft += dimensions$1(el).width;
              });
              return ~index2 ? index2 : this.length - 1;
            },
            sets({ sets: enabled }) {
              if (!enabled || this.parallax) {
                return;
              }
              let left = 0;
              const sets = [];
              const width2 = dimensions$1(this.list).width;
              for (let i = 0; i < this.length; i++) {
                const slideWidth = dimensions$1(this.slides[i]).width;
                if (left + slideWidth > width2) {
                  left = 0;
                }
                if (this.center) {
                  if (left < width2 / 2 && left + slideWidth + dimensions$1(this.slides[getIndex(+i + 1, this.slides)]).width / 2 > width2 / 2) {
                    sets.push(+i);
                    left = width2 / 2 - slideWidth / 2;
                  }
                } else if (left === 0) {
                  sets.push(Math.min(+i, this.maxIndex));
                }
                left += slideWidth;
              }
              if (sets.length) {
                return sets;
              }
            },
            transitionOptions() {
              return {
                center: this.center,
                list: this.list
              };
            },
            slides() {
              return children(this.list).filter(isVisible);
            }
          },
          connected() {
            toggleClass(this.$el, this.clsContainer, !$(`.${this.clsContainer}`, this.$el));
          },
          observe: resize({
            target: ({ slides }) => slides
          }),
          update: {
            write() {
              for (const el of this.navItems) {
                const index2 = toNumber(data(el, this.attrItem));
                if (index2 !== false) {
                  el.hidden = !this.maxIndex || index2 > this.maxIndex || this.sets && !includes(this.sets, index2);
                }
              }
              this.reorder();
              this.updateActiveClasses();
            },
            events: ["resize"]
          },
          events: {
            beforeitemshow(e) {
              if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                this.index = this.getValidIndex();
              }
              const diff = Math.abs(
                this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
              );
              if (!this.dragging && diff > 1) {
                for (let i = 0; i < diff; i++) {
                  this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                }
                e.preventDefault();
                return;
              }
              const index2 = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
              const avgWidth = getWidth(this.list) / this.length;
              this.duration = speedUp(avgWidth / this.velocity) * (dimensions$1(this.slides[index2]).width / avgWidth);
              this.reorder();
            },
            itemshow() {
              if (~this.prevIndex) {
                addClass(this._getTransitioner().getItemIn(), this.clsActive);
              }
              this.updateActiveClasses(this.prevIndex);
            },
            itemshown() {
              this.updateActiveClasses();
            }
          },
          methods: {
            reorder() {
              if (this.finite) {
                css(this.slides, "order", "");
                return;
              }
              const index2 = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
              this.slides.forEach(
                (slide2, i) => css(
                  slide2,
                  "order",
                  this.dir > 0 && i < index2 ? 1 : this.dir < 0 && i >= this.index ? -1 : ""
                )
              );
              if (!this.center) {
                return;
              }
              const next = this.slides[index2];
              let width2 = dimensions$1(this.list).width / 2 - dimensions$1(next).width / 2;
              let j = 0;
              while (width2 > 0) {
                const slideIndex = this.getIndex(--j + index2, index2);
                const slide2 = this.slides[slideIndex];
                css(slide2, "order", slideIndex > index2 ? -2 : -1);
                width2 -= dimensions$1(slide2).width;
              }
            },
            updateActiveClasses(currentIndex = this.index) {
              const actives = this._getTransitioner(currentIndex).getActives();
              const activeClasses = [
                this.clsActive,
                !this.sets || includes(this.sets, toFloat(this.index)) ? this.clsActivated : ""
              ];
              for (const slide2 of this.slides) {
                const active2 = includes(actives, slide2);
                toggleClass(slide2, activeClasses, active2);
                attr(slide2, "aria-hidden", !active2);
                for (const focusable of $$(selFocusable, slide2)) {
                  if (!hasOwn(focusable, "_tabindex")) {
                    focusable._tabindex = attr(focusable, "tabindex");
                  }
                  attr(focusable, "tabindex", active2 ? focusable._tabindex : -1);
                }
              }
            },
            getValidIndex(index2 = this.index, prevIndex = this.prevIndex) {
              index2 = this.getIndex(index2, prevIndex);
              if (!this.sets) {
                return index2;
              }
              let prev;
              do {
                if (includes(this.sets, index2)) {
                  return index2;
                }
                prev = index2;
                index2 = this.getIndex(index2 + this.dir, prevIndex);
              } while (index2 !== prev);
              return index2;
            },
            getAdjacentSlides() {
              const { width: width2 } = dimensions$1(this.list);
              const left = -width2;
              const right = width2 * 2;
              const slideWidth = dimensions$1(this.slides[this.index]).width;
              const slideLeft = this.center ? width2 / 2 - slideWidth / 2 : 0;
              const slides = /* @__PURE__ */ new Set();
              for (const i of [-1, 1]) {
                let currentLeft = slideLeft + (i > 0 ? slideWidth : 0);
                let j = 0;
                do {
                  const slide2 = this.slides[this.getIndex(this.index + i + j++ * i)];
                  currentLeft += dimensions$1(slide2).width * i;
                  slides.add(slide2);
                } while (this.length > j && currentLeft > left && currentLeft < right);
              }
              return Array.from(slides);
            },
            getIndexAt(percent2) {
              let index2 = -1;
              const firstSlideWidth = dimensions$1(this.slides[0]).width;
              const lastSlideWidth = dimensions$1(last(this.slides)).width;
              const scrollDist = getWidth(this.list) - (this.center ? firstSlideWidth / 2 + lastSlideWidth / 2 : lastSlideWidth);
              let dist = percent2 * scrollDist;
              let slidePercent = 0;
              do {
                const slideWidth = dimensions$1(this.slides[++index2]).width;
                const slideDist = this.center ? slideWidth / 2 + dimensions$1(this.slides[index2 + 1]).width / 2 : slideWidth;
                slidePercent = dist / slideDist % 1;
                dist -= slideDist;
              } while (dist >= 0 && index2 < this.maxIndex);
              return [index2, slidePercent];
            }
          }
        };
        function isFinite(list, center) {
          if (!list || list.length < 2) {
            return true;
          }
          const { width: listWidth } = dimensions$1(list);
          if (!center) {
            return Math.ceil(getWidth(list)) < Math.trunc(listWidth + getMaxElWidth(list));
          }
          const slides = children(list);
          const listHalf = Math.trunc(listWidth / 2);
          for (const index2 in slides) {
            const slide2 = slides[index2];
            const slideWidth = dimensions$1(slide2).width;
            const slidesInView = /* @__PURE__ */ new Set([slide2]);
            let diff = 0;
            for (const i of [-1, 1]) {
              let left = slideWidth / 2;
              let j = 0;
              while (left < listHalf) {
                const nextSlide = slides[getIndex(+index2 + i + j++ * i, slides)];
                if (slidesInView.has(nextSlide)) {
                  return true;
                }
                left += dimensions$1(nextSlide).width;
                slidesInView.add(nextSlide);
              }
              diff = Math.max(
                diff,
                slideWidth / 2 + dimensions$1(slides[getIndex(+index2 + i, slides)]).width / 2 - (left - listHalf)
              );
            }
            if (diff > sumBy(
              slides.filter((slide22) => !slidesInView.has(slide22)),
              (slide22) => dimensions$1(slide22).width
            )) {
              return true;
            }
          }
          return false;
        }
        function getMaxElWidth(list) {
          return Math.max(0, ...children(list).map((el) => dimensions$1(el).width));
        }
        var sliderParallax = {
          mixins: [Parallax],
          data: {
            selItem: "!li"
          },
          beforeConnect() {
            this.item = query(this.selItem, this.$el);
          },
          disconnected() {
            this.item = null;
          },
          events: [
            {
              name: "itemin itemout",
              self: true,
              el() {
                return this.item;
              },
              handler({ type, detail: { percent: percent2, duration, timing, dir } }) {
                fastdom.read(() => {
                  if (!this.matchMedia) {
                    return;
                  }
                  const propsFrom = this.getCss(getCurrentPercent(type, dir, percent2));
                  const propsTo = this.getCss(isIn(type) ? 0.5 : dir > 0 ? 1 : 0);
                  fastdom.write(() => {
                    css(this.$el, propsFrom);
                    Transition.start(this.$el, propsTo, duration, timing).catch(noop);
                  });
                });
              }
            },
            {
              name: "transitioncanceled transitionend",
              self: true,
              el() {
                return this.item;
              },
              handler() {
                Transition.cancel(this.$el);
              }
            },
            {
              name: "itemtranslatein itemtranslateout",
              self: true,
              el() {
                return this.item;
              },
              handler({ type, detail: { percent: percent2, dir } }) {
                fastdom.read(() => {
                  if (!this.matchMedia) {
                    this.reset();
                    return;
                  }
                  const props2 = this.getCss(getCurrentPercent(type, dir, percent2));
                  fastdom.write(() => css(this.$el, props2));
                });
              }
            }
          ]
        };
        function isIn(type) {
          return endsWith(type, "in");
        }
        function getCurrentPercent(type, dir, percent2) {
          percent2 /= 2;
          return isIn(type) ^ dir < 0 ? percent2 : 1 - percent2;
        }
        var Animations = {
          ...Animations$2,
          fade: {
            show() {
              return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
            },
            percent(current) {
              return 1 - css(current, "opacity");
            },
            translate(percent2) {
              return [{ opacity: 1 - percent2, zIndex: 0 }, { zIndex: -1 }];
            }
          },
          scale: {
            show() {
              return [{ opacity: 0, transform: scale3d(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
            },
            percent(current) {
              return 1 - css(current, "opacity");
            },
            translate(percent2) {
              return [
                { opacity: 1 - percent2, transform: scale3d(1 + 0.5 * percent2), zIndex: 0 },
                { zIndex: -1 }
              ];
            }
          },
          pull: {
            show(dir) {
              return dir < 0 ? [
                { transform: translate(30), zIndex: -1 },
                { transform: translate(), zIndex: 0 }
              ] : [
                { transform: translate(-100), zIndex: 0 },
                { transform: translate(), zIndex: -1 }
              ];
            },
            percent(current, next, dir) {
              return dir < 0 ? 1 - translated(next) : translated(current);
            },
            translate(percent2, dir) {
              return dir < 0 ? [
                { transform: translate(30 * percent2), zIndex: -1 },
                { transform: translate(-100 * (1 - percent2)), zIndex: 0 }
              ] : [
                { transform: translate(-percent2 * 100), zIndex: 0 },
                { transform: translate(30 * (1 - percent2)), zIndex: -1 }
              ];
            }
          },
          push: {
            show(dir) {
              return dir < 0 ? [
                { transform: translate(100), zIndex: 0 },
                { transform: translate(), zIndex: -1 }
              ] : [
                { transform: translate(-30), zIndex: -1 },
                { transform: translate(), zIndex: 0 }
              ];
            },
            percent(current, next, dir) {
              return dir > 0 ? 1 - translated(next) : translated(current);
            },
            translate(percent2, dir) {
              return dir < 0 ? [
                { transform: translate(percent2 * 100), zIndex: 0 },
                { transform: translate(-30 * (1 - percent2)), zIndex: -1 }
              ] : [
                { transform: translate(-30 * percent2), zIndex: -1 },
                { transform: translate(100 * (1 - percent2)), zIndex: 0 }
              ];
            }
          }
        };
        var slideshow = {
          mixins: [Class, Slideshow, SliderReactive, SliderParallax, SliderPreload],
          props: {
            ratio: String,
            minHeight: String,
            maxHeight: String
          },
          data: {
            ratio: "16:9",
            minHeight: void 0,
            maxHeight: void 0,
            selList: ".uk-slideshow-items",
            attrItem: "uk-slideshow-item",
            selNav: ".uk-slideshow-nav",
            Animations
          },
          watch: {
            list(list) {
              css(list, {
                aspectRatio: this.ratio ? this.ratio.replace(":", "/") : void 0,
                minHeight: this.minHeight,
                maxHeight: this.maxHeight,
                minWidth: "100%",
                maxWidth: "100%"
              });
            }
          },
          methods: {
            getAdjacentSlides() {
              return [1, -1].map((i) => this.slides[this.getIndex(this.index + i)]);
            }
          }
        };
        var sortable = {
          mixins: [Class, Animate],
          props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
          },
          data: {
            group: false,
            threshold: 5,
            clsItem: "uk-sortable-item",
            clsPlaceholder: "uk-sortable-placeholder",
            clsDrag: "uk-sortable-drag",
            clsDragState: "uk-drag",
            clsBase: "uk-sortable",
            clsNoDrag: "uk-sortable-nodrag",
            clsEmpty: "uk-sortable-empty",
            clsCustom: "",
            handle: false,
            pos: {}
          },
          created() {
            for (const key of ["init", "start", "move", "end"]) {
              const fn = this[key];
              this[key] = (e) => {
                assign(this.pos, getEventPos(e));
                fn(e);
              };
            }
          },
          events: {
            name: pointerDown$1,
            passive: false,
            handler: "init"
          },
          computed: {
            target: (_, $el) => ($el.tBodies || [$el])[0],
            items() {
              return children(this.target);
            },
            isEmpty() {
              return !this.items.length;
            },
            handles({ handle }, $el) {
              return handle ? $$(handle, $el) : this.items;
            }
          },
          watch: {
            isEmpty(empty2) {
              toggleClass(this.target, this.clsEmpty, empty2);
            },
            handles(handles, prev) {
              css(prev, { touchAction: "", userSelect: "" });
              css(handles, { touchAction: "none", userSelect: "none" });
            }
          },
          update: {
            write(data2) {
              if (!this.drag || !parent(this.placeholder)) {
                return;
              }
              const {
                pos: { x, y },
                origin: { offsetTop, offsetLeft },
                placeholder
              } = this;
              css(this.drag, {
                top: y - offsetTop,
                left: x - offsetLeft
              });
              const sortable2 = this.getSortable(document.elementFromPoint(x, y));
              if (!sortable2) {
                return;
              }
              const { items } = sortable2;
              if (items.some(Transition.inProgress)) {
                return;
              }
              const target = findTarget(items, { x, y });
              if (items.length && (!target || target === placeholder)) {
                return;
              }
              const previous = this.getSortable(placeholder);
              const insertTarget = findInsertTarget(
                sortable2.target,
                target,
                placeholder,
                x,
                y,
                sortable2 === previous && data2.moved !== target
              );
              if (insertTarget === false) {
                return;
              }
              if (insertTarget && placeholder === insertTarget) {
                return;
              }
              if (sortable2 !== previous) {
                previous.remove(placeholder);
                data2.moved = target;
              } else {
                delete data2.moved;
              }
              sortable2.insert(placeholder, insertTarget);
              this.touched.add(sortable2);
            },
            events: ["move"]
          },
          methods: {
            init(e) {
              const { target, button, defaultPrevented } = e;
              const [placeholder] = this.items.filter((el) => el.contains(target));
              if (!placeholder || defaultPrevented || button > 0 || isInput(target) || target.closest(`.${this.clsNoDrag}`) || this.handle && !target.closest(this.handle)) {
                return;
              }
              e.preventDefault();
              this.touched = /* @__PURE__ */ new Set([this]);
              this.placeholder = placeholder;
              this.origin = { target, index: index(placeholder), ...this.pos };
              on(document, pointerMove$1, this.move);
              on(document, pointerUp$1, this.end);
              if (!this.threshold) {
                this.start(e);
              }
            },
            start(e) {
              this.drag = appendDrag(this.$container, this.placeholder);
              const { left, top } = dimensions$1(this.placeholder);
              assign(this.origin, { offsetLeft: this.pos.x - left, offsetTop: this.pos.y - top });
              addClass(this.drag, this.clsDrag, this.clsCustom);
              addClass(this.placeholder, this.clsPlaceholder);
              addClass(this.items, this.clsItem);
              addClass(document.documentElement, this.clsDragState);
              trigger(this.$el, "start", [this, this.placeholder]);
              trackScroll(this.pos);
              this.move(e);
            },
            move(e) {
              if (this.drag) {
                this.$emit("move");
              } else if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                this.start(e);
              }
            },
            end() {
              off(document, pointerMove$1, this.move);
              off(document, pointerUp$1, this.end);
              if (!this.drag) {
                return;
              }
              untrackScroll();
              const sortable2 = this.getSortable(this.placeholder);
              if (this === sortable2) {
                if (this.origin.index !== index(this.placeholder)) {
                  trigger(this.$el, "moved", [this, this.placeholder]);
                }
              } else {
                trigger(sortable2.$el, "added", [sortable2, this.placeholder]);
                trigger(this.$el, "removed", [this, this.placeholder]);
              }
              trigger(this.$el, "stop", [this, this.placeholder]);
              remove$1(this.drag);
              this.drag = null;
              for (const { clsPlaceholder, clsItem } of this.touched) {
                for (const sortable22 of this.touched) {
                  removeClass(sortable22.items, clsPlaceholder, clsItem);
                }
              }
              this.touched = null;
              removeClass(document.documentElement, this.clsDragState);
            },
            insert(element, target) {
              addClass(this.items, this.clsItem);
              const insert = () => target ? before(target, element) : append(this.target, element);
              this.animate(insert);
            },
            remove(element) {
              if (!this.target.contains(element)) {
                return;
              }
              this.animate(() => remove$1(element));
            },
            getSortable(element) {
              do {
                const sortable2 = this.$getComponent(element, "sortable");
                if (sortable2 && (sortable2 === this || this.group !== false && sortable2.group === this.group)) {
                  return sortable2;
                }
              } while (element = parent(element));
            }
          }
        };
        let trackTimer;
        function trackScroll(pos) {
          let last2 = Date.now();
          trackTimer = setInterval(() => {
            let { x, y } = pos;
            y += document.scrollingElement.scrollTop;
            const dist = (Date.now() - last2) * 0.3;
            last2 = Date.now();
            scrollParents(document.elementFromPoint(x, pos.y)).reverse().some((scrollEl) => {
              let { scrollTop: scroll2, scrollHeight } = scrollEl;
              const { top, bottom, height: height2 } = offsetViewport(scrollEl);
              if (top < y && top + 35 > y) {
                scroll2 -= dist;
              } else if (bottom > y && bottom - 35 < y) {
                scroll2 += dist;
              } else {
                return;
              }
              if (scroll2 > 0 && scroll2 < scrollHeight - height2) {
                scrollEl.scrollTop = scroll2;
                return true;
              }
            });
          }, 15);
        }
        function untrackScroll() {
          clearInterval(trackTimer);
        }
        function appendDrag(container, element) {
          let clone;
          if (isTag(element, "li", "tr")) {
            clone = $("<div>");
            append(clone, element.cloneNode(true).children);
            for (const attribute of element.getAttributeNames()) {
              attr(clone, attribute, element.getAttribute(attribute));
            }
          } else {
            clone = element.cloneNode(true);
          }
          append(container, clone);
          css(clone, "margin", "0", "important");
          css(clone, {
            boxSizing: "border-box",
            width: element.offsetWidth,
            height: element.offsetHeight,
            padding: css(element, "padding")
          });
          height(clone.firstElementChild, height(element.firstElementChild));
          return clone;
        }
        function findTarget(items, point) {
          return items[findIndex(items, (item) => pointInRect(point, dimensions$1(item)))];
        }
        function findInsertTarget(list, target, placeholder, x, y, sameList) {
          if (!children(list).length) {
            return;
          }
          const rect = dimensions$1(target);
          if (!sameList) {
            if (!isHorizontal(list, placeholder)) {
              return y < rect.top + rect.height / 2 ? target : target.nextElementSibling;
            }
            return target;
          }
          const placeholderRect = dimensions$1(placeholder);
          const sameRow = linesIntersect(
            [rect.top, rect.bottom],
            [placeholderRect.top, placeholderRect.bottom]
          );
          const [pointerPos, lengthProp, startProp, endProp] = sameRow ? [x, "width", "left", "right"] : [y, "height", "top", "bottom"];
          const diff = placeholderRect[lengthProp] < rect[lengthProp] ? rect[lengthProp] - placeholderRect[lengthProp] : 0;
          if (placeholderRect[startProp] < rect[startProp]) {
            if (diff && pointerPos < rect[startProp] + diff) {
              return false;
            }
            return target.nextElementSibling;
          }
          if (diff && pointerPos > rect[endProp] - diff) {
            return false;
          }
          return target;
        }
        function isHorizontal(list, placeholder) {
          const single = children(list).length === 1;
          if (single) {
            append(list, placeholder);
          }
          const items = children(list);
          const isHorizontal2 = items.some((el, i) => {
            const rectA = dimensions$1(el);
            return items.slice(i + 1).some((el2) => {
              const rectB = dimensions$1(el2);
              return !linesIntersect([rectA.left, rectA.right], [rectB.left, rectB.right]);
            });
          });
          if (single) {
            remove$1(placeholder);
          }
          return isHorizontal2;
        }
        function linesIntersect(lineA, lineB) {
          return lineA[1] > lineB[0] && lineB[1] > lineA[0];
        }
        var Position = {
          props: {
            pos: String,
            offset: null,
            flip: Boolean,
            shift: Boolean,
            inset: Boolean
          },
          data: {
            pos: `bottom-${isRtl ? "right" : "left"}`,
            offset: false,
            flip: true,
            shift: true,
            inset: false
          },
          connected() {
            this.pos = this.$props.pos.split("-").concat("center").slice(0, 2);
            [this.dir, this.align] = this.pos;
            this.axis = includes(["top", "bottom"], this.dir) ? "y" : "x";
          },
          methods: {
            positionAt(element, target, boundary) {
              let offset2 = [this.getPositionOffset(element), this.getShiftOffset(element)];
              const placement = [this.flip && "flip", this.shift && "shift"];
              const attach = {
                element: [this.inset ? this.dir : flipPosition(this.dir), this.align],
                target: [this.dir, this.align]
              };
              if (this.axis === "y") {
                for (const prop in attach) {
                  attach[prop].reverse();
                }
                offset2.reverse();
                placement.reverse();
              }
              const restoreScrollPosition = storeScrollPosition(element);
              const elDim = dimensions$1(element);
              css(element, { top: -elDim.height, left: -elDim.width });
              positionAt(element, target, {
                attach,
                offset: offset2,
                boundary,
                placement,
                viewportOffset: this.getViewportOffset(element)
              });
              restoreScrollPosition();
            },
            getPositionOffset(element = this.$el) {
              return toPx(
                this.offset === false ? css(element, "--uk-position-offset") : this.offset,
                this.axis === "x" ? "width" : "height",
                element
              ) * (includes(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
            },
            getShiftOffset(element = this.$el) {
              return this.align === "center" ? 0 : toPx(
                css(element, "--uk-position-shift-offset"),
                this.axis === "y" ? "width" : "height",
                element
              ) * (includes(["left", "top"], this.align) ? 1 : -1);
            },
            getViewportOffset(element) {
              return toPx(css(element, "--uk-position-viewport-offset"));
            }
          }
        };
        function storeScrollPosition(element) {
          const scrollElement = scrollParent(element);
          const { scrollTop } = scrollElement;
          return () => {
            if (scrollTop !== scrollElement.scrollTop) {
              scrollElement.scrollTop = scrollTop;
            }
          };
        }
        var tooltip = {
          mixins: [Container, Togglable, Position],
          data: {
            pos: "top",
            animation: ["uk-animation-scale-up"],
            duration: 100,
            cls: "uk-active"
          },
          connected() {
            makeFocusable(this.$el);
          },
          disconnected() {
            this.hide();
          },
          methods: {
            show() {
              if (this.isToggled(this.tooltip || null)) {
                return;
              }
              const { delay = 0, title } = parseProps(this.$options);
              if (!title) {
                return;
              }
              const titleAttr = attr(this.$el, "title");
              const off2 = on(this.$el, ["blur", pointerLeave], (e) => !isTouch(e) && this.hide());
              this.reset = () => {
                attr(this.$el, { title: titleAttr, "aria-describedby": null });
                off2();
              };
              const id2 = generateId(this);
              attr(this.$el, { title: null, "aria-describedby": id2 });
              clearTimeout(this.showTimer);
              this.showTimer = setTimeout(() => this._show(title, id2), delay);
            },
            async hide() {
              var _a;
              if (matches(this.$el, "input:focus")) {
                return;
              }
              clearTimeout(this.showTimer);
              if (this.isToggled(this.tooltip || null)) {
                await this.toggleElement(this.tooltip, false, false);
              }
              (_a = this.reset) == null ? void 0 : _a.call(this);
              remove$1(this.tooltip);
              this.tooltip = null;
            },
            async _show(title, id2) {
              this.tooltip = append(
                this.container,
                `<div id="${id2}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${title}</div> </div>`
              );
              on(this.tooltip, "toggled", (e, toggled) => {
                if (!toggled) {
                  return;
                }
                const update2 = () => this.positionAt(this.tooltip, this.$el);
                update2();
                const [dir, align] = getAlignment(this.tooltip, this.$el, this.pos);
                this.origin = this.axis === "y" ? `${flipPosition(dir)}-${align}` : `${align}-${flipPosition(dir)}`;
                const handlers = [
                  once(
                    document,
                    `keydown ${pointerDown$1}`,
                    this.hide,
                    false,
                    (e2) => e2.type === pointerDown$1 && !this.$el.contains(e2.target) || e2.type === "keydown" && e2.keyCode === keyMap.ESC
                  ),
                  on([document, ...overflowParents(this.$el)], "scroll", update2, {
                    passive: true
                  })
                ];
                once(this.tooltip, "hide", () => handlers.forEach((handler) => handler()), {
                  self: true
                });
              });
              if (!await this.toggleElement(this.tooltip, true)) {
                this.hide();
              }
            }
          },
          events: {
            // Clicking a button does not give it focus on all browsers and platforms
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
            [`focus ${pointerEnter} ${pointerDown$1}`](e) {
              if (!isTouch(e)) {
                this.show();
              }
            }
          }
        };
        function makeFocusable(el) {
          if (!isFocusable(el)) {
            attr(el, "tabindex", "0");
          }
        }
        function getAlignment(el, target, [dir, align]) {
          const elOffset = offset(el);
          const targetOffset = offset(target);
          const properties = [
            ["left", "right"],
            ["top", "bottom"]
          ];
          for (const props22 of properties) {
            if (elOffset[props22[0]] >= targetOffset[props22[1]]) {
              dir = props22[1];
              break;
            }
            if (elOffset[props22[1]] <= targetOffset[props22[0]]) {
              dir = props22[0];
              break;
            }
          }
          const props2 = includes(properties[0], dir) ? properties[1] : properties[0];
          align = props2.find((prop) => elOffset[prop] === targetOffset[prop]) || "center";
          return [dir, align];
        }
        function parseProps(options) {
          const { el, id: id2, data: data$1 } = options;
          return ["delay", "title"].reduce((obj, key) => ({ [key]: data(el, key), ...obj }), {
            ...parseOptions(data(el, id2), ["title"]),
            ...data$1
          });
        }
        var upload = {
          mixins: [I18n],
          i18n: {
            invalidMime: "Invalid File Type: %s",
            invalidName: "Invalid File Name: %s",
            invalidSize: "Invalid File Size: %s Kilobytes Max"
          },
          props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
          },
          data: {
            allow: false,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: false,
            multiple: false,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: noop,
            beforeAll: noop,
            beforeSend: noop,
            complete: noop,
            completeAll: noop,
            error: noop,
            fail: noop,
            load: noop,
            loadEnd: noop,
            loadStart: noop,
            progress: noop
          },
          events: {
            change(e) {
              if (!matches(e.target, 'input[type="file"]')) {
                return;
              }
              e.preventDefault();
              if (e.target.files) {
                this.upload(e.target.files);
              }
              e.target.value = "";
            },
            drop(e) {
              stop(e);
              const transfer = e.dataTransfer;
              if (!(transfer == null ? void 0 : transfer.files)) {
                return;
              }
              removeClass(this.$el, this.clsDragover);
              this.upload(transfer.files);
            },
            dragenter(e) {
              stop(e);
            },
            dragover(e) {
              stop(e);
              addClass(this.$el, this.clsDragover);
            },
            dragleave(e) {
              stop(e);
              removeClass(this.$el, this.clsDragover);
            }
          },
          methods: {
            async upload(files) {
              files = toArray(files);
              if (!files.length) {
                return;
              }
              trigger(this.$el, "upload", [files]);
              for (const file of files) {
                if (this.maxSize && this.maxSize * 1e3 < file.size) {
                  this.fail(this.t("invalidSize", this.maxSize));
                  return;
                }
                if (this.allow && !match$1(this.allow, file.name)) {
                  this.fail(this.t("invalidName", this.allow));
                  return;
                }
                if (this.mime && !match$1(this.mime, file.type)) {
                  this.fail(this.t("invalidMime", this.mime));
                  return;
                }
              }
              if (!this.multiple) {
                files = files.slice(0, 1);
              }
              this.beforeAll(this, files);
              const chunks = chunk(files, this.concurrent);
              const upload2 = async (files2) => {
                const data2 = new FormData();
                files2.forEach((file) => data2.append(this.name, file));
                for (const key in this.params) {
                  data2.append(key, this.params[key]);
                }
                try {
                  const xhr = await ajax(this.url, {
                    data: data2,
                    method: this.method,
                    responseType: this.type,
                    beforeSend: (env) => {
                      const { xhr: xhr2 } = env;
                      on(xhr2.upload, "progress", this.progress);
                      for (const type of ["loadStart", "load", "loadEnd", "abort"]) {
                        on(xhr2, type.toLowerCase(), this[type]);
                      }
                      return this.beforeSend(env);
                    }
                  });
                  this.complete(xhr);
                  if (chunks.length) {
                    await upload2(chunks.shift());
                  } else {
                    this.completeAll(xhr);
                  }
                } catch (e) {
                  this.error(e);
                }
              };
              await upload2(chunks.shift());
            }
          }
        };
        function match$1(pattern, path) {
          return path.match(
            new RegExp(
              `^${pattern.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`,
              "i"
            )
          );
        }
        function chunk(files, size) {
          const chunks = [];
          for (let i = 0; i < files.length; i += size) {
            chunks.push(files.slice(i, i + size));
          }
          return chunks;
        }
        function stop(e) {
          e.preventDefault();
          e.stopPropagation();
        }
        function ajax(url, options) {
          const env = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: noop,
            responseType: "",
            ...options
          };
          return Promise.resolve().then(() => env.beforeSend(env)).then(() => send(url, env));
        }
        function send(url, env) {
          return new Promise((resolve, reject) => {
            const { xhr } = env;
            for (const prop in env) {
              if (prop in xhr) {
                try {
                  xhr[prop] = env[prop];
                } catch (e) {
                }
              }
            }
            xhr.open(env.method.toUpperCase(), url);
            for (const header in env.headers) {
              xhr.setRequestHeader(header, env.headers[header]);
            }
            on(xhr, "load", () => {
              if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                resolve(xhr);
              } else {
                reject(
                  assign(Error(xhr.statusText), {
                    xhr,
                    status: xhr.status
                  })
                );
              }
            });
            on(xhr, "error", () => reject(assign(Error("Network Error"), { xhr })));
            on(xhr, "timeout", () => reject(assign(Error("Network Timeout"), { xhr })));
            xhr.send(env.data);
          });
        }
        var components$1 = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          Countdown: countdown,
          Filter: filter,
          Lightbox: lightbox,
          LightboxPanel,
          Notification: notification,
          Parallax: parallax,
          Slider: slider,
          SliderParallax: sliderParallax,
          Slideshow: slideshow,
          SlideshowParallax: sliderParallax,
          Sortable: sortable,
          Tooltip: tooltip,
          Upload: upload
        });
        function boot(App2) {
          if (inBrowser && window.MutationObserver) {
            if (document.body) {
              requestAnimationFrame(() => init(App2));
            } else {
              new MutationObserver((records, observer2) => {
                if (document.body) {
                  init(App2);
                  observer2.disconnect();
                }
              }).observe(document.documentElement, { childList: true });
            }
          }
        }
        function init(App2) {
          trigger(document, "uikit:init", App2);
          if (document.body) {
            apply(document.body, connect);
          }
          new MutationObserver((records) => records.forEach(applyChildListMutation)).observe(document, {
            subtree: true,
            childList: true
          });
          new MutationObserver((records) => records.forEach(applyAttributeMutation)).observe(document, {
            subtree: true,
            attributes: true
          });
          App2._initialized = true;
        }
        function applyChildListMutation({ addedNodes, removedNodes }) {
          for (const node of addedNodes) {
            apply(node, connect);
          }
          for (const node of removedNodes) {
            apply(node, disconnect);
          }
        }
        function applyAttributeMutation({ target, attributeName }) {
          var _a;
          const name = getComponentName(attributeName);
          if (name) {
            if (hasAttr(target, attributeName)) {
              createComponent(name, target);
              return;
            }
            (_a = getComponent(target, name)) == null ? void 0 : _a.$destroy();
          }
        }
        function connect(node) {
          const components2 = getComponents(node);
          for (const name in getComponents(node)) {
            callConnected(components2[name]);
          }
          for (const attributeName of node.getAttributeNames()) {
            const name = getComponentName(attributeName);
            name && createComponent(name, node);
          }
        }
        function disconnect(node) {
          const components2 = getComponents(node);
          for (const name in getComponents(node)) {
            callDisconnected(components2[name]);
          }
        }
        function getComponentName(attribute) {
          if (startsWith(attribute, "data-")) {
            attribute = attribute.slice(5);
          }
          const cmp = components$2[attribute];
          return cmp && (isPlainObject(cmp) ? cmp : cmp.options).name;
        }
        globalApi(App);
        instanceApi(App);
        var Accordion = {
          mixins: [Class, Togglable],
          props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
          },
          data: {
            targets: "> *",
            active: false,
            animation: true,
            collapsible: true,
            multiple: false,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            offset: 0
          },
          computed: {
            items: ({ targets }, $el) => $$(targets, $el),
            toggles({ toggle: toggle2 }) {
              return this.items.map((item) => $(toggle2, item));
            },
            contents({ content }) {
              return this.items.map((item) => {
                var _a;
                return ((_a = item._wrapper) == null ? void 0 : _a.firstElementChild) || $(content, item);
              });
            }
          },
          watch: {
            items(items, prev) {
              if (prev || hasClass(items, this.clsOpen)) {
                return;
              }
              const active2 = this.active !== false && items[Number(this.active)] || !this.collapsible && items[0];
              if (active2) {
                this.toggle(active2, false);
              }
            },
            toggles() {
              this.$emit();
            },
            contents(items) {
              for (const el of items) {
                const isOpen = hasClass(
                  this.items.find((item) => item.contains(el)),
                  this.clsOpen
                );
                hide(el, !isOpen);
              }
              this.$emit();
            }
          },
          observe: lazyload(),
          events: [
            {
              name: "click keydown",
              delegate() {
                return `${this.targets} ${this.$props.toggle}`;
              },
              async handler(e) {
                var _a;
                if (e.type === "keydown" && e.keyCode !== keyMap.SPACE) {
                  return;
                }
                e.preventDefault();
                (_a = this._off) == null ? void 0 : _a.call(this);
                this._off = keepScrollPosition(e.target);
                await this.toggle(index(this.toggles, e.current));
                this._off();
              }
            },
            {
              name: "shown hidden",
              self: true,
              delegate() {
                return this.targets;
              },
              handler() {
                this.$emit();
              }
            }
          ],
          update() {
            const activeItems = filter$1(this.items, `.${this.clsOpen}`);
            for (const index2 in this.items) {
              const toggle2 = this.toggles[index2];
              const content = this.contents[index2];
              if (!toggle2 || !content) {
                continue;
              }
              toggle2.id = generateId(this, toggle2);
              content.id = generateId(this, content);
              const active2 = includes(activeItems, this.items[index2]);
              attr(toggle2, {
                role: isTag(toggle2, "a") ? "button" : null,
                "aria-controls": content.id,
                "aria-expanded": active2,
                "aria-disabled": !this.collapsible && activeItems.length < 2 && active2
              });
              attr(content, { role: "region", "aria-labelledby": toggle2.id });
              if (isTag(content, "ul")) {
                attr(children(content), "role", "presentation");
              }
            }
          },
          methods: {
            toggle(item, animate2) {
              item = this.items[getIndex(item, this.items)];
              let items = [item];
              const activeItems = filter$1(this.items, `.${this.clsOpen}`);
              if (!this.multiple && !includes(activeItems, items[0])) {
                items = items.concat(activeItems);
              }
              if (!this.collapsible && activeItems.length < 2 && includes(activeItems, item)) {
                return;
              }
              return Promise.all(
                items.map(
                  (el) => this.toggleElement(el, !includes(activeItems, el), (el2, show) => {
                    toggleClass(el2, this.clsOpen, show);
                    if (animate2 === false || !this.animation) {
                      hide($(this.content, el2), !show);
                      return;
                    }
                    return transition(el2, show, this);
                  })
                )
              );
            }
          }
        };
        function hide(el, hide2) {
          el && (el.hidden = hide2);
        }
        async function transition(el, show, { content, duration, velocity, transition: transition2 }) {
          var _a;
          content = ((_a = el._wrapper) == null ? void 0 : _a.firstElementChild) || $(content, el);
          if (!el._wrapper) {
            el._wrapper = wrapAll(content, "<div>");
          }
          const wrapper = el._wrapper;
          css(wrapper, "overflow", "hidden");
          const currentHeight = toFloat(css(wrapper, "height"));
          await Transition.cancel(wrapper);
          hide(content, false);
          const endHeight = sumBy(["marginTop", "marginBottom"], (prop) => css(content, prop)) + dimensions$1(content).height;
          const percent2 = currentHeight / endHeight;
          duration = (velocity * endHeight + duration) * (show ? 1 - percent2 : percent2);
          css(wrapper, "height", currentHeight);
          await Transition.start(wrapper, { height: show ? endHeight : 0 }, duration, transition2);
          unwrap(content);
          delete el._wrapper;
          if (!show) {
            hide(content, true);
          }
        }
        function keepScrollPosition(el) {
          const scrollElement = scrollParent(el, true);
          let frame;
          (function scroll2() {
            frame = requestAnimationFrame(() => {
              const { top } = dimensions$1(el);
              if (top < 0) {
                scrollElement.scrollTop += top;
              }
              scroll2();
            });
          })();
          return () => requestAnimationFrame(() => cancelAnimationFrame(frame));
        }
        var alert = {
          mixins: [Class, Togglable],
          args: "animation",
          props: {
            animation: Boolean,
            close: String
          },
          data: {
            animation: true,
            selClose: ".uk-alert-close",
            duration: 150
          },
          events: {
            name: "click",
            delegate() {
              return this.selClose;
            },
            handler(e) {
              e.preventDefault();
              this.close();
            }
          },
          methods: {
            async close() {
              await this.toggleElement(this.$el, false, animate);
              this.$destroy(true);
            }
          }
        };
        function animate(el, show, { duration, transition: transition2, velocity }) {
          const height2 = toFloat(css(el, "height"));
          css(el, "height", height2);
          return Transition.start(
            el,
            {
              height: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 0,
              paddingBottom: 0,
              borderTop: 0,
              borderBottom: 0,
              opacity: 0
            },
            velocity * height2 + duration,
            transition2
          );
        }
        var Video = {
          args: "autoplay",
          props: {
            automute: Boolean,
            autoplay: Boolean
          },
          data: {
            automute: false,
            autoplay: true
          },
          connected() {
            if (this.autoplay === "inview" && !hasAttr(this.$el, "preload")) {
              this.$el.preload = "none";
            }
            if (isTag(this.$el, "iframe") && !hasAttr(this.$el, "allow")) {
              this.$el.allow = "autoplay";
            }
            if (this.automute) {
              mute(this.$el);
            }
          },
          observe: [
            intersection({
              filter: ({ $el, autoplay }) => autoplay && isVideo($el),
              handler([{ isIntersecting }]) {
                if (isIntersecting || this.$el.webkitDisplayingFullscreen || document.fullscreenElement === this.$el) {
                  play(this.$el);
                } else {
                  pause(this.$el);
                }
              },
              args: { intersecting: false },
              options: ({ $el, autoplay }) => ({ root: autoplay === "inview" ? null : parent($el) })
            })
          ]
        };
        var cover = {
          mixins: [Video],
          props: {
            width: Number,
            height: Number
          },
          data: {
            automute: true
          },
          events: {
            "load loadedmetadata"() {
              this.$emit("resize");
            }
          },
          observe: resize({
            target: ({ $el }) => [getPositionedParent($el) || parent($el)],
            filter: ({ $el }) => !useObjectFit($el)
          }),
          update: {
            read() {
              if (useObjectFit(this.$el)) {
                return;
              }
              const { ratio: ratio2, cover: cover2 } = Dimensions;
              const { $el, width: width2, height: height2 } = this;
              let dim = { width: width2, height: height2 };
              if (!width2 || !height2) {
                const intrinsic = {
                  width: $el.naturalWidth || $el.videoWidth || $el.clientWidth,
                  height: $el.naturalHeight || $el.videoHeight || $el.clientHeight
                };
                if (width2) {
                  dim = ratio2(intrinsic, "width", width2);
                } else if (height2) {
                  dim = ratio2(intrinsic, "height", height2);
                } else {
                  dim = intrinsic;
                }
              }
              const { offsetHeight: coverHeight, offsetWidth: coverWidth } = getPositionedParent($el) || parent($el);
              const coverDim = cover2(dim, {
                width: coverWidth + (coverWidth % 2 ? 1 : 0),
                height: coverHeight + (coverHeight % 2 ? 1 : 0)
              });
              if (!coverDim.width || !coverDim.height) {
                return false;
              }
              return coverDim;
            },
            write({ height: height2, width: width2 }) {
              css(this.$el, { height: height2, width: width2 });
            },
            events: ["resize"]
          }
        };
        function getPositionedParent(el) {
          while (el = parent(el)) {
            if (css(el, "position") !== "static") {
              return el;
            }
          }
        }
        function useObjectFit(el) {
          return isTag(el, "img", "video");
        }
        let active;
        var drop = {
          mixins: [Container, Position, Togglable],
          args: "pos",
          props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean,
            closeOnScroll: Boolean
          },
          data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: false,
            boundaryX: false,
            boundaryY: false,
            target: false,
            targetX: false,
            targetY: false,
            stretch: false,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: true,
            clsDrop: false,
            animateOut: false,
            bgScroll: true,
            animation: ["uk-animation-fade"],
            cls: "uk-open",
            container: false,
            closeOnScroll: false
          },
          computed: {
            boundary({ boundary, boundaryX, boundaryY }, $el) {
              return [
                query(boundaryX || boundary, $el) || window,
                query(boundaryY || boundary, $el) || window
              ];
            },
            target({ target, targetX, targetY }, $el) {
              targetX || (targetX = target || this.targetEl);
              targetY || (targetY = target || this.targetEl);
              return [
                targetX === true ? window : query(targetX, $el),
                targetY === true ? window : query(targetY, $el)
              ];
            }
          },
          created() {
            this.tracker = new MouseTracker();
          },
          beforeConnect() {
            this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`;
          },
          connected() {
            addClass(this.$el, "uk-drop", this.clsDrop);
            if (this.toggle && !this.targetEl) {
              this.targetEl = createToggleComponent(this);
            }
            this._style = pick(this.$el.style, ["width", "height"]);
          },
          disconnected() {
            if (this.isActive()) {
              this.hide(false);
              active = null;
            }
            css(this.$el, this._style);
          },
          observe: lazyload({
            target: ({ toggle: toggle2, $el }) => query(toggle2, $el),
            targets: ({ $el }) => $el
          }),
          events: [
            {
              name: "click",
              delegate() {
                return ".uk-drop-close";
              },
              handler(e) {
                e.preventDefault();
                this.hide(false);
              }
            },
            {
              name: "click",
              delegate() {
                return 'a[href*="#"]';
              },
              handler({ defaultPrevented, current }) {
                const { hash } = current;
                if (!defaultPrevented && hash && isSameSiteAnchor(current) && !this.$el.contains($(hash))) {
                  this.hide(false);
                }
              }
            },
            {
              name: "beforescroll",
              handler() {
                this.hide(false);
              }
            },
            {
              name: "toggle",
              self: true,
              handler(e, toggle2) {
                e.preventDefault();
                if (this.isToggled()) {
                  this.hide(false);
                } else {
                  this.show(toggle2 == null ? void 0 : toggle2.$el, false);
                }
              }
            },
            {
              name: "toggleshow",
              self: true,
              handler(e, toggle2) {
                e.preventDefault();
                this.show(toggle2 == null ? void 0 : toggle2.$el);
              }
            },
            {
              name: "togglehide",
              self: true,
              handler(e) {
                e.preventDefault();
                if (!matches(this.$el, ":focus,:hover")) {
                  this.hide();
                }
              }
            },
            {
              name: `${pointerEnter} focusin`,
              filter() {
                return includes(this.mode, "hover");
              },
              handler(e) {
                if (!isTouch(e)) {
                  this.clearTimers();
                }
              }
            },
            {
              name: `${pointerLeave} focusout`,
              filter() {
                return includes(this.mode, "hover");
              },
              handler(e) {
                if (!isTouch(e) && e.relatedTarget) {
                  this.hide();
                }
              }
            },
            {
              name: "toggled",
              self: true,
              handler(e, toggled) {
                if (toggled) {
                  this.clearTimers();
                  this.position();
                }
              }
            },
            {
              name: "show",
              self: true,
              handler() {
                active = this;
                this.tracker.init();
                attr(this.targetEl, "aria-expanded", true);
                const handlers = [
                  listenForResize(this),
                  listenForEscClose(this),
                  listenForBackgroundClose(this),
                  this.autoUpdate && listenForScroll(this),
                  this.closeOnScroll && listenForScrollClose(this)
                ];
                once(this.$el, "hide", () => handlers.forEach((handler) => handler && handler()), {
                  self: true
                });
                if (!this.bgScroll) {
                  once(this.$el, "hidden", preventBackgroundScroll(this.$el), { self: true });
                }
              }
            },
            {
              name: "beforehide",
              self: true,
              handler: "clearTimers"
            },
            {
              name: "hide",
              handler({ target }) {
                if (this.$el !== target) {
                  active = active === null && this.$el.contains(target) && this.isToggled() ? this : active;
                  return;
                }
                active = this.isActive() ? null : active;
                this.tracker.cancel();
                attr(this.targetEl, "aria-expanded", null);
              }
            }
          ],
          update: {
            write() {
              if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
                this.position();
              }
            }
          },
          methods: {
            show(target = this.targetEl, delay = true) {
              if (this.isToggled() && target && this.targetEl && target !== this.targetEl) {
                this.hide(false, false);
              }
              this.targetEl = target;
              this.clearTimers();
              if (this.isActive()) {
                return;
              }
              if (active) {
                if (delay && active.isDelaying) {
                  this.showTimer = setTimeout(() => matches(target, ":hover") && this.show(), 10);
                  return;
                }
                let prev;
                while (active && prev !== active && !active.$el.contains(this.$el)) {
                  prev = active;
                  active.hide(false, false);
                }
              }
              if (this.container && parent(this.$el) !== this.container) {
                append(this.container, this.$el);
              }
              this.showTimer = setTimeout(
                () => this.toggleElement(this.$el, true),
                delay && this.delayShow || 0
              );
            },
            hide(delay = true, animate2 = true) {
              const hide2 = () => this.toggleElement(this.$el, false, this.animateOut && animate2);
              this.clearTimers();
              this.isDelayedHide = delay;
              this.isDelaying = getPositionedElements(this.$el).some(
                (el) => this.tracker.movesTo(el)
              );
              if (delay && this.isDelaying) {
                this.hideTimer = setTimeout(this.hide, 50);
              } else if (delay && this.delayHide) {
                this.hideTimer = setTimeout(hide2, this.delayHide);
              } else {
                hide2();
              }
            },
            clearTimers() {
              clearTimeout(this.showTimer);
              clearTimeout(this.hideTimer);
              this.showTimer = null;
              this.hideTimer = null;
              this.isDelaying = false;
            },
            isActive() {
              return active === this;
            },
            position() {
              removeClass(this.$el, "uk-drop-stack");
              css(this.$el, this._style);
              this.$el.hidden = true;
              const viewports = this.target.map((target) => getViewport$1(this.$el, target));
              const viewportOffset = this.getViewportOffset(this.$el);
              const dirs2 = [
                [0, ["x", "width", "left", "right"]],
                [1, ["y", "height", "top", "bottom"]]
              ];
              for (const [i, [axis, prop]] of dirs2) {
                if (this.axis !== axis && includes([axis, true], this.stretch)) {
                  css(this.$el, {
                    [prop]: Math.min(
                      offset(this.boundary[i])[prop],
                      viewports[i][prop] - 2 * viewportOffset
                    ),
                    [`overflow-${axis}`]: "auto"
                  });
                }
              }
              const maxWidth = viewports[0].width - 2 * viewportOffset;
              this.$el.hidden = false;
              css(this.$el, "maxWidth", "");
              if (this.$el.offsetWidth > maxWidth) {
                addClass(this.$el, "uk-drop-stack");
              }
              css(this.$el, "maxWidth", maxWidth);
              this.positionAt(this.$el, this.target, this.boundary);
              for (const [i, [axis, prop, start, end]] of dirs2) {
                if (this.axis === axis && includes([axis, true], this.stretch)) {
                  const positionOffset = Math.abs(this.getPositionOffset());
                  const targetOffset = offset(this.target[i]);
                  const elOffset = offset(this.$el);
                  css(this.$el, {
                    [prop]: (targetOffset[start] > elOffset[start] ? targetOffset[this.inset ? end : start] - Math.max(
                      offset(this.boundary[i])[start],
                      viewports[i][start] + viewportOffset
                    ) : Math.min(
                      offset(this.boundary[i])[end],
                      viewports[i][end] - viewportOffset
                    ) - targetOffset[this.inset ? start : end]) - positionOffset,
                    [`overflow-${axis}`]: "auto"
                  });
                  this.positionAt(this.$el, this.target, this.boundary);
                }
              }
            }
          }
        };
        function getPositionedElements(el) {
          const result = [];
          apply(el, (el2) => css(el2, "position") !== "static" && result.push(el2));
          return result;
        }
        function getViewport$1(el, target) {
          return offsetViewport(overflowParents(target).find((parent2) => parent2.contains(el)));
        }
        function createToggleComponent(drop2) {
          const { $el } = drop2.$create("toggle", query(drop2.toggle, drop2.$el), {
            target: drop2.$el,
            mode: drop2.mode
          });
          attr($el, "aria-haspopup", true);
          return $el;
        }
        function listenForResize(drop2) {
          const update2 = () => drop2.$emit();
          const off2 = [
            observeViewportResize(update2),
            observeResize(overflowParents(drop2.$el).concat(drop2.target), update2)
          ];
          return () => off2.map((observer2) => observer2.disconnect());
        }
        function listenForScroll(drop2, fn = () => drop2.$emit()) {
          return on([document, ...overflowParents(drop2.$el)], "scroll", fn, {
            passive: true
          });
        }
        function listenForEscClose(drop2) {
          return on(document, "keydown", (e) => {
            if (e.keyCode === keyMap.ESC) {
              drop2.hide(false);
            }
          });
        }
        function listenForScrollClose(drop2) {
          return listenForScroll(drop2, () => drop2.hide(false));
        }
        function listenForBackgroundClose(drop2) {
          return on(document, pointerDown$1, ({ target }) => {
            if (drop2.$el.contains(target)) {
              return;
            }
            once(
              document,
              `${pointerUp$1} ${pointerCancel} scroll`,
              ({ defaultPrevented, type, target: newTarget }) => {
                if (!defaultPrevented && type === pointerUp$1 && target === newTarget && !(drop2.targetEl && within(target, drop2.targetEl))) {
                  drop2.hide(false);
                }
              },
              true
            );
          });
        }
        var Dropnav = {
          mixins: [Class, Container],
          props: {
            align: String,
            clsDrop: String,
            boundary: Boolean,
            dropbar: Boolean,
            dropbarAnchor: Boolean,
            duration: Number,
            mode: Boolean,
            offset: Boolean,
            stretch: Boolean,
            delayShow: Boolean,
            delayHide: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            animation: Boolean,
            animateOut: Boolean,
            closeOnScroll: Boolean
          },
          data: {
            align: isRtl ? "right" : "left",
            clsDrop: "uk-dropdown",
            clsDropbar: "uk-dropnav-dropbar",
            boundary: true,
            dropbar: false,
            dropbarAnchor: false,
            duration: 200,
            container: false,
            selNavItem: "> li > a, > ul > li > a"
          },
          computed: {
            dropbarAnchor: ({ dropbarAnchor }, $el) => query(dropbarAnchor, $el) || $el,
            dropbar({ dropbar }) {
              if (!dropbar) {
                return null;
              }
              dropbar = this._dropbar || query(dropbar, this.$el) || $(`+ .${this.clsDropbar}`, this.$el);
              return dropbar ? dropbar : this._dropbar = $("<div></div>");
            },
            dropContainer(_, $el) {
              return this.container || $el;
            },
            dropdowns({ clsDrop }, $el) {
              var _a;
              const dropdowns = $$(`.${clsDrop}`, $el);
              if (this.dropContainer !== $el) {
                for (const el of $$(`.${clsDrop}`, this.dropContainer)) {
                  const target = (_a = this.getDropdown(el)) == null ? void 0 : _a.targetEl;
                  if (!includes(dropdowns, el) && target && this.$el.contains(target)) {
                    dropdowns.push(el);
                  }
                }
              }
              return dropdowns;
            },
            items({ selNavItem }, $el) {
              return $$(selNavItem, $el);
            }
          },
          watch: {
            dropbar(dropbar) {
              addClass(
                dropbar,
                "uk-dropbar",
                "uk-dropbar-top",
                this.clsDropbar,
                `uk-${this.$options.name}-dropbar`
              );
            },
            dropdowns() {
              this.initializeDropdowns();
            }
          },
          connected() {
            this.initializeDropdowns();
          },
          disconnected() {
            remove$1(this._dropbar);
            delete this._dropbar;
          },
          events: [
            {
              name: "mouseover focusin",
              delegate() {
                return this.selNavItem;
              },
              handler({ current }) {
                const active2 = this.getActive();
                if (active2 && includes(active2.mode, "hover") && active2.targetEl && !current.contains(active2.targetEl) && !active2.isDelaying) {
                  active2.hide(false);
                }
              }
            },
            {
              name: "keydown",
              self: true,
              delegate() {
                return this.selNavItem;
              },
              handler(e) {
                var _a;
                const { current, keyCode } = e;
                const active2 = this.getActive();
                if (keyCode === keyMap.DOWN && (active2 == null ? void 0 : active2.targetEl) === current) {
                  e.preventDefault();
                  (_a = $(selFocusable, active2.$el)) == null ? void 0 : _a.focus();
                }
                handleNavItemNavigation(e, this.items, active2);
              }
            },
            {
              name: "keydown",
              el() {
                return this.dropContainer;
              },
              delegate() {
                return `.${this.clsDrop}`;
              },
              handler(e) {
                var _a;
                const { current, keyCode } = e;
                if (!includes(this.dropdowns, current)) {
                  return;
                }
                const active2 = this.getActive();
                let next = -1;
                if (keyCode === keyMap.HOME) {
                  next = 0;
                } else if (keyCode === keyMap.END) {
                  next = "last";
                } else if (keyCode === keyMap.UP) {
                  next = "previous";
                } else if (keyCode === keyMap.DOWN) {
                  next = "next";
                } else if (keyCode === keyMap.ESC) {
                  (_a = active2.targetEl) == null ? void 0 : _a.focus();
                }
                if (~next) {
                  e.preventDefault();
                  const elements = $$(selFocusable, current);
                  elements[getIndex(
                    next,
                    elements,
                    findIndex(elements, (el) => matches(el, ":focus"))
                  )].focus();
                }
                handleNavItemNavigation(e, this.items, active2);
              }
            },
            {
              name: "mouseleave",
              el() {
                return this.dropbar;
              },
              filter() {
                return this.dropbar;
              },
              handler() {
                const active2 = this.getActive();
                if (active2 && includes(active2.mode, "hover") && !this.dropdowns.some((el) => matches(el, ":hover"))) {
                  active2.hide();
                }
              }
            },
            {
              name: "beforeshow",
              el() {
                return this.dropContainer;
              },
              filter() {
                return this.dropbar;
              },
              handler({ target }) {
                if (!this.isDropbarDrop(target)) {
                  return;
                }
                if (this.dropbar.previousElementSibling !== this.dropbarAnchor) {
                  after(this.dropbarAnchor, this.dropbar);
                }
                addClass(target, `${this.clsDrop}-dropbar`);
              }
            },
            {
              name: "show",
              el() {
                return this.dropContainer;
              },
              filter() {
                return this.dropbar;
              },
              handler({ target }) {
                if (!this.isDropbarDrop(target)) {
                  return;
                }
                const drop2 = this.getDropdown(target);
                const adjustHeight = () => {
                  const maxBottom = Math.max(
                    ...parents(target, `.${this.clsDrop}`).concat(target).map((el) => offset(el).bottom)
                  );
                  offset(this.dropbar, {
                    left: offset(this.dropbar).left,
                    top: this.getDropbarOffset(drop2.getPositionOffset())
                  });
                  this.transitionTo(
                    maxBottom - offset(this.dropbar).top + toFloat(css(target, "marginBottom")),
                    target
                  );
                };
                this._observer = observeResize([drop2.$el, ...drop2.target], adjustHeight);
                adjustHeight();
              }
            },
            {
              name: "beforehide",
              el() {
                return this.dropContainer;
              },
              filter() {
                return this.dropbar;
              },
              handler(e) {
                const active2 = this.getActive();
                if (matches(this.dropbar, ":hover") && active2.$el === e.target && this.isDropbarDrop(active2.$el) && includes(active2.mode, "hover") && active2.isDelayedHide && !this.items.some((el) => active2.targetEl !== el && matches(el, ":focus"))) {
                  e.preventDefault();
                }
              }
            },
            {
              name: "hide",
              el() {
                return this.dropContainer;
              },
              filter() {
                return this.dropbar;
              },
              handler({ target }) {
                var _a;
                if (!this.isDropbarDrop(target)) {
                  return;
                }
                (_a = this._observer) == null ? void 0 : _a.disconnect();
                const active2 = this.getActive();
                if (!active2 || active2.$el === target) {
                  this.transitionTo(0);
                }
              }
            }
          ],
          methods: {
            getActive() {
              var _a;
              return includes(this.dropdowns, (_a = active) == null ? void 0 : _a.$el) && active;
            },
            async transitionTo(newHeight, el) {
              const { dropbar } = this;
              const oldHeight = height(dropbar);
              el = oldHeight < newHeight && el;
              await Transition.cancel([el, dropbar]);
              if (el) {
                const diff = offset(el).top - offset(dropbar).top - oldHeight;
                if (diff > 0) {
                  css(el, "transitionDelay", `${diff / newHeight * this.duration}ms`);
                }
              }
              css(el, "clipPath", `polygon(0 0,100% 0,100% ${oldHeight}px,0 ${oldHeight}px)`);
              height(dropbar, oldHeight);
              await Promise.all([
                Transition.start(dropbar, { height: newHeight }, this.duration),
                Transition.start(
                  el,
                  { clipPath: `polygon(0 0,100% 0,100% ${newHeight}px,0 ${newHeight}px)` },
                  this.duration
                ).finally(() => css(el, { clipPath: "", transitionDelay: "" }))
              ]).catch(noop);
            },
            getDropdown(el) {
              return this.$getComponent(el, "drop") || this.$getComponent(el, "dropdown");
            },
            isDropbarDrop(el) {
              return includes(this.dropdowns, el) && hasClass(el, this.clsDrop);
            },
            getDropbarOffset(offsetTop) {
              const { $el, target, targetY } = this;
              const { top, height: height2 } = offset(query(targetY || target || $el, $el));
              return top + height2 + offsetTop;
            },
            initializeDropdowns() {
              this.$create(
                "drop",
                this.dropdowns.filter((el) => !this.getDropdown(el)),
                {
                  ...this.$props,
                  flip: false,
                  shift: true,
                  pos: `bottom-${this.align}`,
                  boundary: this.boundary === true ? this.$el : this.boundary
                }
              );
            }
          }
        };
        function handleNavItemNavigation(e, toggles, active2) {
          var _a, _b, _c;
          const { current, keyCode } = e;
          let next = -1;
          if (keyCode === keyMap.HOME) {
            next = 0;
          } else if (keyCode === keyMap.END) {
            next = "last";
          } else if (keyCode === keyMap.LEFT) {
            next = "previous";
          } else if (keyCode === keyMap.RIGHT) {
            next = "next";
          } else if (keyCode === keyMap.TAB) {
            (_a = active2.targetEl) == null ? void 0 : _a.focus();
            (_b = active2.hide) == null ? void 0 : _b.call(active2, false);
          }
          if (~next) {
            e.preventDefault();
            (_c = active2.hide) == null ? void 0 : _c.call(active2, false);
            toggles[getIndex(next, toggles, toggles.indexOf(active2.targetEl || current))].focus();
          }
        }
        var formCustom = {
          mixins: [Class],
          args: "target",
          props: {
            target: Boolean
          },
          data: {
            target: false
          },
          computed: {
            input: (_, $el) => $(selInput, $el),
            state() {
              return this.input.nextElementSibling;
            },
            target({ target }, $el) {
              return target && (target === true && parent(this.input) === $el && this.input.nextElementSibling || $(target, $el));
            }
          },
          update() {
            var _a;
            const { target, input } = this;
            if (!target) {
              return;
            }
            let option;
            const prop = isInput(target) ? "value" : "textContent";
            const prev = target[prop];
            const value = ((_a = input.files) == null ? void 0 : _a[0]) ? input.files[0].name : matches(input, "select") && (option = $$("option", input).filter((el) => el.selected)[0]) ? option.textContent : input.value;
            if (prev !== value) {
              target[prop] = value;
            }
          },
          events: [
            {
              name: "change",
              handler() {
                this.$emit();
              }
            },
            {
              name: "reset",
              el() {
                return this.$el.closest("form");
              },
              handler() {
                this.$emit();
              }
            }
          ]
        };
        var grid = {
          extends: Margin,
          mixins: [Class],
          name: "grid",
          props: {
            masonry: Boolean,
            parallax: String,
            parallaxStart: String,
            parallaxEnd: String,
            parallaxJustify: Boolean
          },
          data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: false,
            parallax: 0,
            parallaxStart: 0,
            parallaxEnd: 0,
            parallaxJustify: false
          },
          connected() {
            this.masonry && addClass(this.$el, "uk-flex-top", "uk-flex-wrap-top");
          },
          observe: scroll$1({ filter: ({ parallax: parallax2, parallaxJustify }) => parallax2 || parallaxJustify }),
          update: [
            {
              write({ rows }) {
                toggleClass(this.$el, this.clsStack, !rows.some((row) => row.length > 1));
              },
              events: ["resize"]
            },
            {
              read(data2) {
                const { rows } = data2;
                let { masonry, parallax: parallax2, parallaxJustify, margin } = this;
                parallax2 = Math.max(0, toPx(parallax2));
                if (!(masonry || parallax2 || parallaxJustify) || positionedAbsolute(rows) || rows[0].some(
                  (el, i) => rows.some((row) => row[i] && row[i].offsetWidth !== el.offsetWidth)
                )) {
                  return data2.translates = data2.scrollColumns = false;
                }
                let gutter = getGutter(rows, margin);
                let columns;
                let translates;
                if (masonry) {
                  [columns, translates] = applyMasonry(rows, gutter, masonry === "next");
                } else {
                  columns = transpose(rows);
                }
                const columnHeights = columns.map(
                  (column) => sumBy(column, "offsetHeight") + gutter * (column.length - 1)
                );
                const height2 = Math.max(0, ...columnHeights);
                let scrollColumns;
                let parallaxStart;
                let parallaxEnd;
                if (parallax2 || parallaxJustify) {
                  scrollColumns = columnHeights.map(
                    (hgt, i) => parallaxJustify ? height2 - hgt + parallax2 : parallax2 / (i % 2 || 8)
                  );
                  if (!parallaxJustify) {
                    parallax2 = Math.max(
                      ...columnHeights.map((hgt, i) => hgt + scrollColumns[i] - height2)
                    );
                  }
                  parallaxStart = toPx(this.parallaxStart, "height", this.$el, true);
                  parallaxEnd = toPx(this.parallaxEnd, "height", this.$el, true);
                }
                return {
                  columns,
                  translates,
                  scrollColumns,
                  parallaxStart,
                  parallaxEnd,
                  padding: parallax2,
                  height: translates ? height2 : ""
                };
              },
              write({ height: height2, padding }) {
                css(this.$el, "paddingBottom", padding || "");
                height2 !== false && css(this.$el, "height", height2);
              },
              events: ["resize"]
            },
            {
              read({ rows, scrollColumns, parallaxStart, parallaxEnd }) {
                if (scrollColumns && positionedAbsolute(rows)) {
                  return false;
                }
                return {
                  scrolled: scrollColumns ? scrolledOver(this.$el, parallaxStart, parallaxEnd) : false
                };
              },
              write({ columns, scrolled, scrollColumns, translates }) {
                if (!scrolled && !translates) {
                  return;
                }
                columns.forEach(
                  (column, i) => column.forEach((el, j) => {
                    let [x, y] = translates && translates[i][j] || [0, 0];
                    if (scrolled) {
                      y += scrolled * scrollColumns[i];
                    }
                    css(el, "transform", `translate(${x}px, ${y}px)`);
                  })
                );
              },
              events: ["scroll", "resize"]
            }
          ]
        };
        function positionedAbsolute(rows) {
          return rows.flat().some((el) => css(el, "position") === "absolute");
        }
        function applyMasonry(rows, gutter, next) {
          const columns = [];
          const translates = [];
          const columnHeights = Array(rows[0].length).fill(0);
          let rowHeights = 0;
          for (let row of rows) {
            if (isRtl) {
              row = row.reverse();
            }
            let height2 = 0;
            for (const j in row) {
              const { offsetWidth, offsetHeight } = row[j];
              const index2 = next ? j : columnHeights.indexOf(Math.min(...columnHeights));
              push(columns, index2, row[j]);
              push(translates, index2, [
                (index2 - j) * offsetWidth * (isRtl ? -1 : 1),
                columnHeights[index2] - rowHeights
              ]);
              columnHeights[index2] += offsetHeight + gutter;
              height2 = Math.max(height2, offsetHeight);
            }
            rowHeights += height2 + gutter;
          }
          return [columns, translates];
        }
        function getGutter(rows, cls) {
          const node = rows.flat().find((el) => hasClass(el, cls));
          return toFloat(node ? css(node, "marginTop") : css(rows[0][0], "paddingLeft"));
        }
        function transpose(rows) {
          const columns = [];
          for (const row of rows) {
            for (const i in row) {
              push(columns, i, row[i]);
            }
          }
          return columns;
        }
        function push(array, index2, value) {
          if (!array[index2]) {
            array[index2] = [];
          }
          array[index2].push(value);
        }
        var heightMatch = {
          args: "target",
          props: {
            target: String,
            row: Boolean
          },
          data: {
            target: "> *",
            row: true
          },
          computed: {
            elements: ({ target }, $el) => $$(target, $el)
          },
          observe: resize({
            target: ({ $el, elements }) => elements.reduce((elements2, el) => elements2.concat(el, ...el.children), [$el])
          }),
          update: {
            read() {
              return {
                rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
              };
            },
            write({ rows }) {
              for (const { heights, elements } of rows) {
                elements.forEach((el, i) => css(el, "minHeight", heights[i]));
              }
            },
            events: ["resize"]
          }
        };
        function match(elements) {
          if (elements.length < 2) {
            return { heights: [""], elements };
          }
          let heights = elements.map(getHeight);
          const max = Math.max(...heights);
          return {
            heights: elements.map((el, i) => heights[i].toFixed(2) === max.toFixed(2) ? "" : max),
            elements
          };
        }
        function getHeight(element) {
          const style = pick(element.style, ["display", "minHeight"]);
          if (!isVisible(element)) {
            css(element, "display", "block", "important");
          }
          css(element, "minHeight", "");
          const height2 = dimensions$1(element).height - boxModelAdjust(element, "height", "content-box");
          css(element, style);
          return height2;
        }
        var heightPlaceholder = {
          args: "target",
          props: {
            target: String
          },
          data: {
            target: ""
          },
          computed: {
            target: ({ target }, $el) => query(target, $el)
          },
          observe: resize({ target: ({ target }) => target }),
          update: {
            read() {
              return { height: this.target.offsetHeight };
            },
            write({ height: height2 }) {
              css(this.$el, { minHeight: height2 });
            },
            events: ["resize"]
          }
        };
        var heightViewport = {
          props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
          },
          data: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
          },
          // check for offsetTop change
          observe: [
            viewport({ filter: ({ expand }) => expand }),
            resize({ target: ({ $el }) => scrollParents($el) })
          ],
          update: {
            read() {
              if (!isVisible(this.$el)) {
                return false;
              }
              let minHeight = "";
              const box = boxModelAdjust(this.$el, "height", "content-box");
              const { body, scrollingElement: scrollingElement2 } = document;
              const scrollElement = scrollParent(this.$el);
              const { height: viewportHeight } = offsetViewport(
                scrollElement === body ? scrollingElement2 : scrollElement
              );
              const isScrollingElement = scrollingElement2 === scrollElement || body === scrollElement;
              minHeight = `calc(${isScrollingElement ? "100vh" : `${viewportHeight}px`}`;
              if (this.expand) {
                const diff = dimensions$1(scrollElement).height - dimensions$1(this.$el).height;
                minHeight += ` - ${diff}px`;
              } else {
                if (this.offsetTop) {
                  if (isScrollingElement) {
                    const offsetTopEl = this.offsetTop === true ? this.$el : query(this.offsetTop, this.$el);
                    const top = offsetPosition(offsetTopEl)[0] - offsetPosition(scrollElement)[0];
                    minHeight += top > 0 && top < viewportHeight / 2 ? ` - ${top}px` : "";
                  } else {
                    minHeight += ` - ${css(scrollElement, "paddingTop")}`;
                  }
                }
                if (this.offsetBottom === true) {
                  minHeight += ` - ${dimensions$1(this.$el.nextElementSibling).height}px`;
                } else if (isNumeric(this.offsetBottom)) {
                  minHeight += ` - ${this.offsetBottom}vh`;
                } else if (this.offsetBottom && endsWith(this.offsetBottom, "px")) {
                  minHeight += ` - ${toFloat(this.offsetBottom)}px`;
                } else if (isString(this.offsetBottom)) {
                  minHeight += ` - ${dimensions$1(query(this.offsetBottom, this.$el)).height}px`;
                }
              }
              minHeight += `${box ? ` - ${box}px` : ""})`;
              return { minHeight };
            },
            write({ minHeight }) {
              css(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${minHeight})`);
            },
            events: ["resize"]
          }
        };
        var closeIcon = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>';
        var closeLarge = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>';
        var dropParentIcon = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>';
        var marker = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>';
        var navParentIconLarge = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>';
        var navParentIcon = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>';
        var navbarParentIcon = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>';
        var navbarToggleIcon = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-animate svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>';
        var overlayIcon = '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>';
        var paginationNext = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>';
        var paginationPrevious = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>';
        var searchIcon = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>';
        var searchLarge = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>';
        var searchNavbar = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>';
        var slidenavNextLarge = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>';
        var slidenavNext = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>';
        var slidenavPreviousLarge = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>';
        var slidenavPrevious = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>';
        var spinner = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>';
        var totop = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>';
        var Svg = {
          args: "src",
          props: {
            width: Number,
            height: Number,
            ratio: Number
          },
          data: {
            ratio: 1
          },
          connected() {
            this.svg = this.getSvg().then((el) => {
              if (!this._connected) {
                return;
              }
              const svg2 = insertSVG(el, this.$el);
              if (this.svgEl && svg2 !== this.svgEl) {
                remove$1(this.svgEl);
              }
              applyWidthAndHeight.call(this, svg2, el);
              return this.svgEl = svg2;
            }, noop);
          },
          disconnected() {
            this.svg.then((svg2) => {
              if (this._connected) {
                return;
              }
              if (isVoidElement(this.$el)) {
                this.$el.hidden = false;
              }
              remove$1(svg2);
              this.svgEl = null;
            });
            this.svg = null;
          },
          methods: {
            async getSvg() {
            }
          }
        };
        function insertSVG(el, root) {
          if (isVoidElement(root) || isTag(root, "canvas")) {
            root.hidden = true;
            const next = root.nextElementSibling;
            return equals(el, next) ? next : after(root, el);
          }
          const last2 = root.lastElementChild;
          return equals(el, last2) ? last2 : append(root, el);
        }
        function equals(el, other) {
          return isTag(el, "svg") && isTag(other, "svg") && el.innerHTML === other.innerHTML;
        }
        function applyWidthAndHeight(el, ref) {
          const props2 = ["width", "height"];
          let dimensions2 = props2.map((prop) => this[prop]);
          if (!dimensions2.some((val) => val)) {
            dimensions2 = props2.map((prop) => attr(ref, prop));
          }
          const viewBox = attr(ref, "viewBox");
          if (viewBox && !dimensions2.some((val) => val)) {
            dimensions2 = viewBox.split(" ").slice(2);
          }
          dimensions2.forEach((val, i) => attr(el, props2[i], toFloat(val) * this.ratio || null));
        }
        const icons = {
          spinner,
          totop,
          marker,
          "close-icon": closeIcon,
          "close-large": closeLarge,
          "drop-parent-icon": dropParentIcon,
          "nav-parent-icon": navParentIcon,
          "nav-parent-icon-large": navParentIconLarge,
          "navbar-parent-icon": navbarParentIcon,
          "navbar-toggle-icon": navbarToggleIcon,
          "overlay-icon": overlayIcon,
          "pagination-next": paginationNext,
          "pagination-previous": paginationPrevious,
          "search-icon": searchIcon,
          "search-large": searchLarge,
          "search-navbar": searchNavbar,
          "search-toggle-icon": searchIcon,
          "slidenav-next": slidenavNext,
          "slidenav-next-large": slidenavNextLarge,
          "slidenav-previous": slidenavPrevious,
          "slidenav-previous-large": slidenavPreviousLarge
        };
        const Icon = {
          install: install$1,
          mixins: [Svg],
          args: "icon",
          props: { icon: String },
          isIcon: true,
          beforeConnect() {
            addClass(this.$el, "uk-icon");
          },
          methods: {
            async getSvg() {
              const icon = getIcon(this.icon);
              if (!icon) {
                throw "Icon not found.";
              }
              return icon;
            }
          }
        };
        const IconComponent = {
          args: false,
          extends: Icon,
          data: (vm) => ({
            icon: hyphenate(vm.constructor.options.name)
          }),
          beforeConnect() {
            addClass(this.$el, this.$options.id);
          }
        };
        const NavParentIcon = {
          extends: IconComponent,
          beforeConnect() {
            const icon = this.$props.icon;
            this.icon = this.$el.closest(".uk-nav-primary") ? `${icon}-large` : icon;
          }
        };
        const Search = {
          extends: IconComponent,
          mixins: [I18n],
          i18n: { toggle: "Open Search", submit: "Submit Search" },
          beforeConnect() {
            const isToggle = hasClass(this.$el, "uk-search-toggle") || hasClass(this.$el, "uk-navbar-toggle");
            this.icon = isToggle ? "search-toggle-icon" : hasClass(this.$el, "uk-search-icon") && closest(this.$el, ".uk-search-large") ? "search-large" : closest(this.$el, ".uk-search-navbar") ? "search-navbar" : this.$props.icon;
            if (hasAttr(this.$el, "aria-label")) {
              return;
            }
            if (isToggle) {
              const label = this.t("toggle");
              attr(this.$el, "aria-label", label);
            } else {
              const button = this.$el.closest("a,button");
              if (button) {
                const label = this.t("submit");
                attr(button, "aria-label", label);
              }
            }
          }
        };
        const Spinner = {
          extends: IconComponent,
          beforeConnect() {
            attr(this.$el, "role", "status");
          },
          methods: {
            async getSvg() {
              const icon = await Icon.methods.getSvg.call(this);
              if (this.ratio !== 1) {
                css($("circle", icon), "strokeWidth", 1 / this.ratio);
              }
              return icon;
            }
          }
        };
        const ButtonComponent = {
          extends: IconComponent,
          mixins: [I18n],
          beforeConnect() {
            const button = this.$el.closest("a,button");
            attr(button, "role", this.role !== null && isTag(button, "a") ? "button" : this.role);
            const label = this.t("label");
            if (label && !hasAttr(button, "aria-label")) {
              attr(button, "aria-label", label);
            }
          }
        };
        const Slidenav = {
          extends: ButtonComponent,
          beforeConnect() {
            addClass(this.$el, "uk-slidenav");
            const icon = this.$props.icon;
            this.icon = hasClass(this.$el, "uk-slidenav-large") ? `${icon}-large` : icon;
          }
        };
        const NavbarToggleIcon = {
          extends: ButtonComponent,
          i18n: { label: "Open menu" }
        };
        const Close = {
          extends: ButtonComponent,
          i18n: { label: "Close" },
          beforeConnect() {
            this.icon = `close-${hasClass(this.$el, "uk-close-large") ? "large" : "icon"}`;
          }
        };
        const Marker = {
          extends: ButtonComponent,
          i18n: { label: "Open" }
        };
        const Totop = {
          extends: ButtonComponent,
          i18n: { label: "Back to top" }
        };
        const PaginationNext = {
          extends: ButtonComponent,
          i18n: { label: "Next page" },
          data: { role: null }
        };
        const PaginationPrevious = {
          extends: ButtonComponent,
          i18n: { label: "Previous page" },
          data: { role: null }
        };
        const parsed = {};
        function install$1(UIkit) {
          UIkit.icon.add = (name, svg2) => {
            const added = isString(name) ? { [name]: svg2 } : name;
            each(added, (svg22, name2) => {
              icons[name2] = svg22;
              delete parsed[name2];
            });
            if (UIkit._initialized) {
              apply(
                document.body,
                (el) => each(UIkit.getComponents(el), (cmp) => {
                  cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
                })
              );
            }
          };
        }
        const aliases = { twitter: "x" };
        function getIcon(icon) {
          icon = aliases[icon] || icon;
          if (!icons[icon]) {
            return null;
          }
          if (!parsed[icon]) {
            parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
          }
          return parsed[icon].cloneNode(true);
        }
        function applyRtl(icon) {
          return isRtl ? swap(swap(icon, "left", "right"), "previous", "next") : icon;
        }
        const nativeLazyLoad = inBrowser && "loading" in HTMLImageElement.prototype;
        var img = {
          args: "dataSrc",
          props: {
            dataSrc: String,
            sources: String,
            margin: String,
            target: String,
            loading: String
          },
          data: {
            dataSrc: "",
            sources: false,
            margin: "50%",
            target: false,
            loading: "lazy"
          },
          connected() {
            if (this.loading !== "lazy") {
              this.load();
              return;
            }
            if (nativeLazyLoad && isImg(this.$el)) {
              this.$el.loading = "lazy";
              setSrcAttrs(this.$el);
            }
            ensureSrcAttribute(this.$el);
          },
          disconnected() {
            if (this.img) {
              this.img.onload = "";
            }
            delete this.img;
          },
          observe: intersection({
            target: ({ $el, $props }) => [$el, ...queryAll($props.target, $el)],
            handler(entries, observer2) {
              this.load();
              observer2.disconnect();
            },
            options: ({ margin }) => ({ rootMargin: margin }),
            filter: ({ loading }) => loading === "lazy"
          }),
          methods: {
            load() {
              if (this.img) {
                return this.img;
              }
              const image = isImg(this.$el) ? this.$el : getImageFromElement(this.$el, this.dataSrc, this.sources);
              removeAttr(image, "loading");
              setSrcAttrs(this.$el, image.currentSrc);
              return this.img = image;
            }
          }
        };
        function setSrcAttrs(el, src) {
          if (isImg(el)) {
            const parentNode = parent(el);
            const elements = isTag(parentNode, "picture") ? children(parentNode) : [el];
            elements.forEach((el2) => setSourceProps(el2, el2));
          } else if (src) {
            const change = !includes(el.style.backgroundImage, src);
            if (change) {
              css(el, "backgroundImage", `url(${escape(src)})`);
              trigger(el, createEvent("load", false));
            }
          }
        }
        const srcProps = ["data-src", "data-srcset", "sizes"];
        function setSourceProps(sourceEl, targetEl) {
          for (const prop of srcProps) {
            const value = data(sourceEl, prop);
            if (value) {
              attr(targetEl, prop.replace(/^(data-)+/, ""), value);
            }
          }
        }
        function getImageFromElement(el, src, sources) {
          const img2 = new Image();
          wrapInPicture(img2, sources);
          setSourceProps(el, img2);
          img2.onload = () => {
            setSrcAttrs(el, img2.currentSrc);
          };
          attr(img2, "src", src);
          return img2;
        }
        function wrapInPicture(img2, sources) {
          sources = parseSources(sources);
          if (sources.length) {
            const picture = fragment("<picture>");
            for (const attrs of sources) {
              const source = fragment("<source>");
              attr(source, attrs);
              append(picture, source);
            }
            append(picture, img2);
          }
        }
        function parseSources(sources) {
          if (!sources) {
            return [];
          }
          if (startsWith(sources, "[")) {
            try {
              sources = JSON.parse(sources);
            } catch (e) {
              sources = [];
            }
          } else {
            sources = parseOptions(sources);
          }
          if (!isArray(sources)) {
            sources = [sources];
          }
          return sources.filter((source) => !isEmpty(source));
        }
        function ensureSrcAttribute(el) {
          if (isImg(el) && !hasAttr(el, "src")) {
            attr(el, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
          }
        }
        function isImg(el) {
          return isTag(el, "img");
        }
        var inverse = {
          props: {
            target: String,
            selActive: String
          },
          data: {
            target: false,
            selActive: false
          },
          computed: {
            target: ({ target }, $el) => target ? $$(target, $el) : [$el]
          },
          observe: [
            mutation({
              target: ({ target }) => target,
              options: { attributes: true, attributeFilter: ["class"], attributeOldValue: true }
            }),
            {
              target: ({ target }) => target,
              observe: (target, handler) => {
                const observer2 = observeResize([...target, document.documentElement], handler);
                const listener = [
                  on(document, "scroll itemshown itemhidden", handler, {
                    passive: true,
                    capture: true
                  }),
                  on(document, "show hide transitionstart", (e) => {
                    handler();
                    return observer2.observe(e.target);
                  }),
                  on(document, "shown hidden transitionend transitioncancel", (e) => {
                    handler();
                    return observer2.unobserve(e.target);
                  })
                ];
                return {
                  disconnect() {
                    observer2.disconnect();
                    listener.map((off2) => off2());
                  }
                };
              },
              handler() {
                this.$emit();
              }
            }
          ],
          update: {
            read() {
              for (const target of this.target) {
                replaceClass(
                  target,
                  "uk-light,uk-dark",
                  !this.selActive || matches(target, this.selActive) ? findTargetColor(target) : ""
                );
              }
            }
          }
        };
        function findTargetColor(target) {
          const { left, top, height: height2, width: width2 } = dimensions$1(target);
          let last2;
          for (const percent2 of [0.25, 0.5, 0.75]) {
            const elements = target.ownerDocument.elementsFromPoint(
              Math.max(0, left) + width2 * percent2,
              Math.max(0, top) + height2 / 2
            );
            for (const element of elements) {
              if (target.contains(element) || element.closest('[class*="-leave"]') && elements.some((el) => element !== el && matches(el, '[class*="-enter"]'))) {
                continue;
              }
              const color = css(element, "--uk-inverse");
              if (color) {
                if (color === last2) {
                  return `uk-${color}`;
                }
                last2 = color;
                break;
              }
            }
          }
          return last2 ? `uk-${last2}` : "";
        }
        var leader = {
          mixins: [Class, Media],
          props: {
            fill: String
          },
          data: {
            fill: "",
            clsWrapper: "uk-leader-fill",
            clsHide: "uk-leader-hide",
            attrFill: "data-fill"
          },
          computed: {
            fill: ({ fill }, $el) => fill || css($el, "--uk-leader-fill-content")
          },
          connected() {
            [this.wrapper] = wrapInner(this.$el, `<span class="${this.clsWrapper}">`);
          },
          disconnected() {
            unwrap(this.wrapper.childNodes);
          },
          observe: resize(),
          update: {
            read() {
              const width2 = Math.trunc(this.$el.offsetWidth / 2);
              return {
                width: width2,
                fill: this.fill,
                hide: !this.matchMedia
              };
            },
            write({ width: width2, fill, hide: hide2 }) {
              toggleClass(this.wrapper, this.clsHide, hide2);
              attr(this.wrapper, this.attrFill, new Array(width2).join(fill));
            },
            events: ["resize"]
          }
        };
        var modal = {
          install,
          mixins: [Modal],
          data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
          },
          events: [
            {
              name: "fullscreenchange webkitendfullscreen",
              capture: true,
              handler(e) {
                if (isTag(e.target, "video") && this.isToggled() && !document.fullscreenElement) {
                  this.hide();
                }
              }
            },
            {
              name: "show",
              self: true,
              handler() {
                if (hasClass(this.panel, "uk-margin-auto-vertical")) {
                  addClass(this.$el, "uk-flex");
                } else {
                  css(this.$el, "display", "block");
                }
                height(this.$el);
              }
            },
            {
              name: "hidden",
              self: true,
              handler() {
                css(this.$el, "display", "");
                removeClass(this.$el, "uk-flex");
              }
            }
          ]
        };
        function install({ modal: modal2 }) {
          modal2.dialog = function(content, options) {
            const dialog = modal2(
              `<div class="uk-modal"> <div class="uk-modal-dialog">${content}</div> </div>`,
              { stack: true, role: "alertdialog", ...options }
            );
            dialog.show();
            on(
              dialog.$el,
              "hidden",
              async () => {
                await Promise.resolve();
                dialog.$destroy(true);
              },
              { self: true }
            );
            return dialog;
          };
          modal2.alert = function(message, options) {
            return openDialog(
              ({ i18n }) => `<div class="uk-modal-body">${isString(message) ? message : html(message)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${i18n.ok}</button> </div>`,
              options
            );
          };
          modal2.confirm = function(message, options) {
            return openDialog(
              ({ i18n }) => `<form> <div class="uk-modal-body">${isString(message) ? message : html(message)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${i18n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${i18n.ok}</button> </div> </form>`,
              options,
              () => Promise.reject()
            );
          };
          modal2.prompt = function(message, value, options) {
            const promise = openDialog(
              ({ i18n }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${isString(message) ? message : html(message)}</label> <input class="uk-input" value="${value || ""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${i18n.cancel}</button> <button class="uk-button uk-button-primary">${i18n.ok}</button> </div> </form>`,
              options,
              () => null,
              () => input.value
            );
            const { $el } = promise.dialog;
            const input = $("input", $el);
            on($el, "show", () => input.select());
            return promise;
          };
          modal2.i18n = {
            ok: "Ok",
            cancel: "Cancel"
          };
          function openDialog(tmpl, options, hideFn = noop, submitFn = noop) {
            options = {
              bgClose: false,
              escClose: true,
              ...options,
              i18n: { ...modal2.i18n, ...options == null ? void 0 : options.i18n }
            };
            const dialog = modal2.dialog(tmpl(options), options);
            return assign(
              new Promise((resolve) => {
                const off2 = on(dialog.$el, "hide", () => resolve(hideFn()));
                on(dialog.$el, "submit", "form", (e) => {
                  e.preventDefault();
                  resolve(submitFn(dialog));
                  off2();
                  dialog.hide();
                });
              }),
              { dialog }
            );
          }
        }
        var nav = {
          extends: Accordion,
          data: {
            targets: "> .uk-parent",
            toggle: "> a",
            content: "> ul"
          }
        };
        const clsNavbarTransparent = "uk-navbar-transparent";
        var navbar = {
          extends: Dropnav,
          props: {
            dropbarTransparentMode: Boolean
          },
          data: {
            clsDrop: "uk-navbar-dropdown",
            selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle",
            // Simplify with :where() selector once browser target is Safari 14+
            dropbarTransparentMode: false
          },
          computed: {
            navbarContainer: (_, $el) => $el.closest(".uk-navbar-container")
          },
          watch: {
            items() {
              const justify = hasClass(this.$el, "uk-navbar-justify");
              const containers = $$(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
              for (const container of containers) {
                const items = justify ? $$(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", container).length : "";
                css(container, "flexGrow", items);
              }
            }
          },
          events: [
            {
              name: "show",
              el() {
                return this.dropContainer;
              },
              handler({ target }) {
                if (this.getTransparentMode(target) === "remove" && hasClass(this.navbarContainer, clsNavbarTransparent)) {
                  removeClass(this.navbarContainer, clsNavbarTransparent);
                  this._transparent = true;
                }
              }
            },
            {
              name: "hide",
              el() {
                return this.dropContainer;
              },
              async handler() {
                await awaitMacroTask();
                if (!this.getActive() && this._transparent) {
                  addClass(this.navbarContainer, clsNavbarTransparent);
                  this._transparent = null;
                }
              }
            }
          ],
          methods: {
            getTransparentMode(el) {
              if (!this.navbarContainer) {
                return;
              }
              if (this.dropbar && this.isDropbarDrop(el)) {
                return this.dropbarTransparentMode;
              }
              const drop2 = this.getDropdown(el);
              if (drop2 && hasClass(el, "uk-dropbar")) {
                return drop2.inset ? "behind" : "remove";
              }
            },
            getDropbarOffset(offsetTop) {
              const { top, height: height2 } = offset(this.navbarContainer);
              return top + (this.dropbarTransparentMode === "behind" ? 0 : height2 + offsetTop);
            }
          }
        };
        function awaitMacroTask() {
          return new Promise((resolve) => setTimeout(resolve));
        }
        var offcanvas = {
          mixins: [Modal],
          args: "mode",
          props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean,
            swiping: Boolean
          },
          data: {
            mode: "slide",
            flip: false,
            overlay: false,
            clsPage: "uk-offcanvas-page",
            clsContainer: "uk-offcanvas-container",
            selPanel: ".uk-offcanvas-bar",
            clsFlip: "uk-offcanvas-flip",
            clsContainerAnimation: "uk-offcanvas-container-animation",
            clsSidebarAnimation: "uk-offcanvas-bar-animation",
            clsMode: "uk-offcanvas",
            clsOverlay: "uk-offcanvas-overlay",
            selClose: ".uk-offcanvas-close",
            container: false,
            swiping: true
          },
          computed: {
            clsFlip: ({ flip: flip2, clsFlip }) => flip2 ? clsFlip : "",
            clsOverlay: ({ overlay, clsOverlay }) => overlay ? clsOverlay : "",
            clsMode: ({ mode, clsMode }) => `${clsMode}-${mode}`,
            clsSidebarAnimation: ({ mode, clsSidebarAnimation }) => mode === "none" || mode === "reveal" ? "" : clsSidebarAnimation,
            clsContainerAnimation: ({ mode, clsContainerAnimation }) => mode !== "push" && mode !== "reveal" ? "" : clsContainerAnimation,
            transitionElement({ mode }) {
              return mode === "reveal" ? parent(this.panel) : this.panel;
            }
          },
          observe: swipe({ filter: ({ swiping }) => swiping }),
          update: {
            read() {
              if (this.isToggled() && !isVisible(this.$el)) {
                this.hide();
              }
            },
            events: ["resize"]
          },
          events: [
            {
              name: "touchmove",
              self: true,
              passive: false,
              filter() {
                return this.overlay;
              },
              handler(e) {
                e.cancelable && e.preventDefault();
              }
            },
            {
              name: "show",
              self: true,
              handler() {
                if (this.mode === "reveal" && !hasClass(parent(this.panel), this.clsMode)) {
                  wrapAll(this.panel, "<div>");
                  addClass(parent(this.panel), this.clsMode);
                }
                const { body, scrollingElement: scrollingElement2 } = document;
                addClass(body, this.clsContainer, this.clsFlip);
                css(body, "touch-action", "pan-y pinch-zoom");
                css(this.$el, "display", "block");
                css(this.panel, "maxWidth", scrollingElement2.clientWidth);
                addClass(this.$el, this.clsOverlay);
                addClass(
                  this.panel,
                  this.clsSidebarAnimation,
                  this.mode === "reveal" ? "" : this.clsMode
                );
                height(body);
                addClass(body, this.clsContainerAnimation);
                this.clsContainerAnimation && suppressUserScale();
              }
            },
            {
              name: "hide",
              self: true,
              handler() {
                removeClass(document.body, this.clsContainerAnimation);
                css(document.body, "touch-action", "");
              }
            },
            {
              name: "hidden",
              self: true,
              handler() {
                this.clsContainerAnimation && resumeUserScale();
                if (this.mode === "reveal") {
                  unwrap(this.panel);
                }
                removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                removeClass(this.$el, this.clsOverlay);
                css(this.$el, "display", "");
                css(this.panel, "maxWidth", "");
                removeClass(document.body, this.clsContainer, this.clsFlip);
              }
            },
            {
              name: "swipeLeft swipeRight",
              handler(e) {
                if (this.isToggled() && endsWith(e.type, "Left") ^ this.flip) {
                  this.hide();
                }
              }
            }
          ]
        };
        function suppressUserScale() {
          getViewport().content += ",user-scalable=0";
        }
        function resumeUserScale() {
          const viewport2 = getViewport();
          viewport2.content = viewport2.content.replace(/,user-scalable=0$/, "");
        }
        function getViewport() {
          return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
        }
        var overflowAuto = {
          mixins: [Class],
          props: {
            selContainer: String,
            selContent: String,
            minHeight: Number
          },
          data: {
            selContainer: ".uk-modal",
            selContent: ".uk-modal-dialog",
            minHeight: 150
          },
          computed: {
            container: ({ selContainer }, $el) => $el.closest(selContainer),
            content: ({ selContent }, $el) => $el.closest(selContent)
          },
          observe: resize({
            target: ({ container, content }) => [container, content]
          }),
          update: {
            read() {
              if (!this.content || !this.container || !isVisible(this.$el)) {
                return false;
              }
              return {
                max: Math.max(
                  this.minHeight,
                  height(this.container) - (dimensions$1(this.content).height - height(this.$el))
                )
              };
            },
            write({ max }) {
              css(this.$el, { minHeight: this.minHeight, maxHeight: max });
            },
            events: ["resize"]
          }
        };
        var responsive = {
          props: ["width", "height"],
          connected() {
            addClass(this.$el, "uk-responsive-width");
            css(this.$el, "aspectRatio", `${this.width}/${this.height}`);
          }
        };
        var scroll = {
          props: {
            offset: Number
          },
          data: {
            offset: 0
          },
          connected() {
            registerClick(this);
          },
          disconnected() {
            unregisterClick(this);
          },
          methods: {
            async scrollTo(el) {
              el = el && $(el) || document.body;
              if (trigger(this.$el, "beforescroll", [this, el])) {
                await scrollIntoView(el, { offset: this.offset });
                trigger(this.$el, "scrolled", [this, el]);
              }
            }
          }
        };
        const instances = /* @__PURE__ */ new Set();
        function registerClick(cmp) {
          if (!instances.size) {
            on(document, "click", clickHandler);
          }
          instances.add(cmp);
        }
        function unregisterClick(cmp) {
          instances.delete(cmp);
          if (!instances.size) {
            off(document, "click", clickHandler);
          }
        }
        function clickHandler(e) {
          if (e.defaultPrevented) {
            return;
          }
          for (const instance of instances) {
            if (instance.$el.contains(e.target) && isSameSiteAnchor(instance.$el)) {
              e.preventDefault();
              if (window.location.href !== instance.$el.href) {
                window.history.pushState({}, "", instance.$el.href);
              }
              instance.scrollTo(getTargetedElement(instance.$el));
            }
          }
        }
        var scrollspy = {
          args: "cls",
          props: {
            cls: String,
            target: String,
            hidden: Boolean,
            margin: String,
            repeat: Boolean,
            delay: Number
          },
          data: () => ({
            cls: "",
            target: false,
            hidden: true,
            margin: "-1px",
            repeat: false,
            delay: 0,
            inViewClass: "uk-scrollspy-inview"
          }),
          computed: {
            elements: ({ target }, $el) => target ? $$(target, $el) : [$el]
          },
          watch: {
            elements(elements) {
              if (this.hidden) {
                css(filter$1(elements, `:not(.${this.inViewClass})`), "opacity", 0);
              }
            }
          },
          connected() {
            this.elementData = /* @__PURE__ */ new Map();
          },
          disconnected() {
            for (const [el, state] of this.elementData.entries()) {
              removeClass(el, this.inViewClass, (state == null ? void 0 : state.cls) || "");
            }
            delete this.elementData;
          },
          observe: intersection({
            target: ({ elements }) => elements,
            handler(records) {
              const elements = this.elementData;
              for (const { target: el, isIntersecting } of records) {
                if (!elements.has(el)) {
                  elements.set(el, {
                    cls: data(el, "uk-scrollspy-class") || this.cls
                  });
                }
                const state = elements.get(el);
                if (!this.repeat && state.show) {
                  continue;
                }
                state.show = isIntersecting;
              }
              this.$emit();
            },
            options: ({ margin }) => ({ rootMargin: margin }),
            args: { intersecting: false }
          }),
          update: [
            {
              write(data2) {
                for (const [el, state] of this.elementData.entries()) {
                  if (state.show && !state.inview && !state.queued) {
                    state.queued = true;
                    data2.promise = (data2.promise || Promise.resolve()).then(() => new Promise((resolve) => setTimeout(resolve, this.delay))).then(() => {
                      this.toggle(el, true);
                      setTimeout(() => {
                        state.queued = false;
                        this.$emit();
                      }, 300);
                    });
                  } else if (!state.show && state.inview && !state.queued && this.repeat) {
                    this.toggle(el, false);
                  }
                }
              }
            }
          ],
          methods: {
            toggle(el, inview) {
              var _a;
              const state = this.elementData.get(el);
              if (!state) {
                return;
              }
              (_a = state.off) == null ? void 0 : _a.call(state);
              css(el, "opacity", !inview && this.hidden ? 0 : "");
              toggleClass(el, this.inViewClass, inview);
              toggleClass(el, state.cls);
              if (/\buk-animation-/.test(state.cls)) {
                const removeAnimationClasses = () => removeClasses(el, "uk-animation-[\\w-]+");
                if (inview) {
                  state.off = once(el, "animationcancel animationend", removeAnimationClasses, {
                    self: true
                  });
                } else {
                  removeAnimationClasses();
                }
              }
              trigger(el, inview ? "inview" : "outview");
              state.inview = inview;
              this.$update(el);
            }
          }
        };
        var scrollspyNav = {
          props: {
            cls: String,
            closest: Boolean,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
          },
          data: {
            cls: "uk-active",
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
          },
          computed: {
            links: (_, $el) => $$('a[href*="#"]', $el).filter((el) => el.hash && isSameSiteAnchor(el)),
            elements({ closest: selector }) {
              return this.links.map((el) => el.closest(selector || "*"));
            }
          },
          watch: {
            links(links) {
              if (this.scroll) {
                this.$create("scroll", links, { offset: this.offset });
              }
            }
          },
          observe: [intersection(), scroll$1()],
          update: [
            {
              read() {
                const targets = this.links.map(getTargetedElement).filter(Boolean);
                const { length } = targets;
                if (!length || !isVisible(this.$el)) {
                  return false;
                }
                const scrollElement = scrollParent(targets, true);
                const { scrollTop, scrollHeight } = scrollElement;
                const viewport2 = offsetViewport(scrollElement);
                const max = scrollHeight - viewport2.height;
                let active2 = false;
                if (scrollTop === max) {
                  active2 = length - 1;
                } else {
                  for (let i = 0; i < targets.length; i++) {
                    const fixedEl = getCoveringElement(targets[i]);
                    const offsetBy = this.offset + (fixedEl ? offset(fixedEl).height : 0);
                    if (offset(targets[i]).top - viewport2.top - offsetBy > 0) {
                      break;
                    }
                    active2 = +i;
                  }
                  if (active2 === false && this.overflow) {
                    active2 = 0;
                  }
                }
                return { active: active2 };
              },
              write({ active: active2 }) {
                const changed = active2 !== false && !hasClass(this.elements[active2], this.cls);
                this.links.forEach((el) => el.blur());
                for (let i = 0; i < this.elements.length; i++) {
                  toggleClass(this.elements[i], this.cls, +i === active2);
                }
                if (changed) {
                  trigger(this.$el, "active", [active2, this.elements[active2]]);
                }
              },
              events: ["scroll", "resize"]
            }
          ]
        };
        var sticky = {
          mixins: [Class, Media],
          props: {
            position: String,
            top: null,
            bottom: null,
            start: null,
            end: null,
            offset: String,
            overflowFlip: Boolean,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            showOnUp: Boolean,
            targetOffset: Number
          },
          data: {
            position: "top",
            top: false,
            bottom: false,
            start: false,
            end: false,
            offset: 0,
            overflowFlip: false,
            animation: "",
            clsActive: "uk-active",
            clsInactive: "",
            clsFixed: "uk-sticky-fixed",
            clsBelow: "uk-sticky-below",
            selTarget: "",
            showOnUp: false,
            targetOffset: false
          },
          computed: {
            target: ({ selTarget }, $el) => selTarget && $(selTarget, $el) || $el
          },
          connected() {
            this.start = coerce(this.start || this.top);
            this.end = coerce(this.end || this.bottom);
            this.placeholder = $("+ .uk-sticky-placeholder", this.$el) || $('<div class="uk-sticky-placeholder"></div>');
            this.isFixed = false;
            this.setActive(false);
          },
          beforeDisconnect() {
            if (this.isFixed) {
              this.hide();
              removeClass(this.target, this.clsInactive);
            }
            reset(this.$el);
            remove$1(this.placeholder);
            this.placeholder = null;
          },
          observe: [
            viewport({
              handler() {
                if (toPx("100vh", "height") !== this._data.viewport) {
                  this.$emit("resize");
                }
              }
            }),
            scroll$1({ target: () => document.scrollingElement }),
            resize({
              target: () => document.scrollingElement,
              options: { box: "content-box" }
            }),
            resize({ target: ({ $el }) => $el })
          ],
          events: [
            {
              name: "load hashchange popstate",
              el() {
                return window;
              },
              filter() {
                return this.targetOffset !== false;
              },
              handler() {
                const { scrollingElement: scrollingElement2 } = document;
                if (!location.hash || scrollingElement2.scrollTop === 0) {
                  return;
                }
                setTimeout(() => {
                  const targetOffset = offset($(location.hash));
                  const elOffset = offset(this.$el);
                  if (this.isFixed && intersectRect(targetOffset, elOffset)) {
                    scrollingElement2.scrollTop = targetOffset.top - elOffset.height - toPx(this.targetOffset, "height", this.placeholder) - toPx(this.offset, "height", this.placeholder);
                  }
                });
              }
            },
            {
              name: "transitionstart",
              handler() {
                this.transitionInProgress = once(
                  this.$el,
                  "transitionend transitioncancel",
                  () => this.transitionInProgress = null
                );
              }
            }
          ],
          update: [
            {
              read({ height: height$1, width: width2, margin, sticky: sticky2 }) {
                this.inactive = !this.matchMedia || !isVisible(this.$el);
                if (this.inactive) {
                  return;
                }
                const hide2 = this.isFixed && !this.transitionInProgress;
                if (hide2) {
                  preventTransition(this.target);
                  this.hide();
                }
                if (!this.active) {
                  ({ height: height$1, width: width2 } = offset(this.$el));
                  margin = css(this.$el, "margin");
                }
                if (hide2) {
                  this.show();
                }
                const viewport2 = toPx("100vh", "height");
                const dynamicViewport = height(window);
                const maxScrollHeight = Math.max(
                  0,
                  document.scrollingElement.scrollHeight - viewport2
                );
                let position2 = this.position;
                if (this.overflowFlip && height$1 > viewport2) {
                  position2 = position2 === "top" ? "bottom" : "top";
                }
                const referenceElement = this.isFixed ? this.placeholder : this.$el;
                let offset$1 = toPx(this.offset, "height", sticky2 ? this.$el : referenceElement);
                if (position2 === "bottom" && (height$1 < dynamicViewport || this.overflowFlip)) {
                  offset$1 += dynamicViewport - height$1;
                }
                const overflow = this.overflowFlip ? 0 : Math.max(0, height$1 + offset$1 - viewport2);
                const topOffset = offset(referenceElement).top;
                const elHeight = offset(this.$el).height;
                const start = (this.start === false ? topOffset : parseProp(this.start, this.$el, topOffset)) - offset$1;
                const end = this.end === false ? maxScrollHeight : Math.min(
                  maxScrollHeight,
                  parseProp(this.end, this.$el, topOffset + height$1, true) - elHeight - offset$1 + overflow
                );
                sticky2 = maxScrollHeight && !this.showOnUp && start + offset$1 === topOffset && end === Math.min(
                  maxScrollHeight,
                  parseProp(true, this.$el, 0, true) - elHeight - offset$1 + overflow
                ) && css(parent(this.$el), "overflowY") === "visible";
                return {
                  start,
                  end,
                  offset: offset$1,
                  overflow,
                  height: height$1,
                  elHeight,
                  width: width2,
                  margin,
                  top: offsetPosition(referenceElement)[0],
                  sticky: sticky2,
                  viewport: viewport2
                };
              },
              write({ height: height2, width: width2, margin, offset: offset2, sticky: sticky2 }) {
                if (this.inactive || sticky2 || !this.isFixed) {
                  reset(this.$el);
                }
                if (this.inactive) {
                  return;
                }
                if (sticky2) {
                  height2 = width2 = margin = 0;
                  css(this.$el, { position: "sticky", top: offset2 });
                }
                const { placeholder } = this;
                css(placeholder, { height: height2, width: width2, margin });
                if (parent(placeholder) !== parent(this.$el) || sticky2 ^ index(placeholder) < index(this.$el)) {
                  (sticky2 ? before : after)(this.$el, placeholder);
                  placeholder.hidden = true;
                }
              },
              events: ["resize"]
            },
            {
              read({
                scroll: prevScroll = 0,
                dir: prevDir = "down",
                overflow,
                overflowScroll = 0,
                start,
                end,
                elHeight,
                height: height2,
                sticky: sticky2
              }) {
                const scroll2 = document.scrollingElement.scrollTop;
                const dir = prevScroll <= scroll2 ? "down" : "up";
                const referenceElement = this.isFixed ? this.placeholder : this.$el;
                return {
                  dir,
                  prevDir,
                  scroll: scroll2,
                  prevScroll,
                  below: scroll2 > offset(referenceElement).top + (sticky2 ? Math.min(height2, elHeight) : height2),
                  offsetParentTop: offset(referenceElement.offsetParent).top,
                  overflowScroll: clamp(
                    overflowScroll + clamp(scroll2, start, end) - clamp(prevScroll, start, end),
                    0,
                    overflow
                  )
                };
              },
              write(data2, types) {
                const isScrollUpdate = types.has("scroll");
                const {
                  initTimestamp = 0,
                  dir,
                  prevDir,
                  scroll: scroll2,
                  prevScroll = 0,
                  top,
                  start,
                  below
                } = data2;
                if (scroll2 < 0 || scroll2 === prevScroll && isScrollUpdate || this.showOnUp && !isScrollUpdate && !this.isFixed) {
                  return;
                }
                const now = Date.now();
                if (now - initTimestamp > 300 || dir !== prevDir) {
                  data2.initScroll = scroll2;
                  data2.initTimestamp = now;
                }
                if (this.showOnUp && !this.isFixed && Math.abs(data2.initScroll - scroll2) <= 30 && Math.abs(prevScroll - scroll2) <= 10) {
                  return;
                }
                if (this.inactive || scroll2 < start || this.showOnUp && (scroll2 <= start || dir === "down" && isScrollUpdate || dir === "up" && !this.isFixed && !below)) {
                  if (!this.isFixed) {
                    if (Animation.inProgress(this.$el) && top > scroll2) {
                      Animation.cancel(this.$el);
                      this.hide();
                    }
                    return;
                  }
                  if (this.animation && below) {
                    if (hasClass(this.$el, "uk-animation-leave")) {
                      return;
                    }
                    Animation.out(this.$el, this.animation).then(() => this.hide(), noop);
                  } else {
                    this.hide();
                  }
                } else if (this.isFixed) {
                  this.update();
                } else if (this.animation && below) {
                  this.show();
                  Animation.in(this.$el, this.animation).catch(noop);
                } else {
                  preventTransition(this.target);
                  this.show();
                }
              },
              events: ["resize", "resizeViewport", "scroll"]
            }
          ],
          methods: {
            show() {
              this.isFixed = true;
              this.update();
              this.placeholder.hidden = false;
            },
            hide() {
              const { offset: offset2, sticky: sticky2 } = this._data;
              this.setActive(false);
              removeClass(this.$el, this.clsFixed, this.clsBelow);
              if (sticky2) {
                css(this.$el, "top", offset2);
              } else {
                css(this.$el, {
                  position: "",
                  top: "",
                  width: "",
                  marginTop: ""
                });
              }
              this.placeholder.hidden = true;
              this.isFixed = false;
            },
            update() {
              let {
                width: width2,
                scroll: scroll2 = 0,
                overflow,
                overflowScroll = 0,
                start,
                end,
                offset: offset2,
                offsetParentTop,
                sticky: sticky2,
                below
              } = this._data;
              const active2 = start !== 0 || scroll2 > start;
              if (!sticky2) {
                let position2 = "fixed";
                if (scroll2 > end) {
                  offset2 += end - offsetParentTop + overflowScroll - overflow;
                  position2 = "absolute";
                }
                css(this.$el, { position: position2, width: width2, marginTop: 0 }, "important");
              }
              css(this.$el, "top", offset2 - overflowScroll);
              this.setActive(active2);
              toggleClass(this.$el, this.clsBelow, below);
              addClass(this.$el, this.clsFixed);
            },
            setActive(active2) {
              const prev = this.active;
              this.active = active2;
              if (active2) {
                replaceClass(this.target, this.clsInactive, this.clsActive);
                prev !== active2 && trigger(this.$el, "active");
              } else {
                replaceClass(this.target, this.clsActive, this.clsInactive);
                if (prev !== active2) {
                  preventTransition(this.target);
                  trigger(this.$el, "inactive");
                }
              }
            }
          }
        };
        function parseProp(value, el, propOffset, padding) {
          if (!value) {
            return 0;
          }
          if (isNumeric(value) || isString(value) && value.match(/^-?\d/)) {
            return propOffset + toPx(value, "height", el, true);
          } else {
            const refElement = value === true ? parent(el) : query(value, el);
            return offset(refElement).bottom - (padding && (refElement == null ? void 0 : refElement.contains(el)) ? toFloat(css(refElement, "paddingBottom")) : 0);
          }
        }
        function coerce(value) {
          if (value === "true") {
            return true;
          } else if (value === "false") {
            return false;
          }
          return value;
        }
        function reset(el) {
          css(el, { position: "", top: "", marginTop: "", width: "" });
        }
        function preventTransition(el) {
          addClass(el, "uk-transition-disable");
          requestAnimationFrame(() => removeClass(el, "uk-transition-disable"));
        }
        var svg = {
          mixins: [Svg],
          args: "src",
          props: {
            src: String,
            icon: String,
            attributes: "list",
            strokeAnimation: Boolean
          },
          data: {
            strokeAnimation: false
          },
          observe: [
            mutation({
              async handler() {
                const svg2 = await this.svg;
                if (svg2) {
                  applyAttributes.call(this, svg2);
                }
              },
              options: {
                attributes: true,
                attributeFilter: ["id", "class", "style"]
              }
            })
          ],
          async connected() {
            if (includes(this.src, "#")) {
              [this.src, this.icon] = this.src.split("#");
            }
            const svg2 = await this.svg;
            if (svg2) {
              applyAttributes.call(this, svg2);
              if (this.strokeAnimation) {
                applyAnimation(svg2);
              }
            }
          },
          methods: {
            async getSvg() {
              if (isTag(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy") {
                await new Promise((resolve) => once(this.$el, "load", resolve));
              }
              return parseSVG(await loadSVG(this.src), this.icon) || Promise.reject("SVG not found.");
            }
          }
        };
        function applyAttributes(el) {
          const { $el } = this;
          addClass(el, attr($el, "class"), "uk-svg");
          for (let i = 0; i < $el.style.length; i++) {
            const prop = $el.style[i];
            css(el, prop, css($el, prop));
          }
          for (const attribute in this.attributes) {
            const [prop, value] = this.attributes[attribute].split(":", 2);
            attr(el, prop, value);
          }
          if (!this.$el.id) {
            removeAttr(el, "id");
          }
        }
        const loadSVG = memoize(async (src) => {
          if (src) {
            if (startsWith(src, "data:")) {
              return decodeURIComponent(src.split(",")[1]);
            } else {
              return (await fetch(src)).text();
            }
          } else {
            return Promise.reject();
          }
        });
        function parseSVG(svg2, icon) {
          if (icon && includes(svg2, "<symbol")) {
            svg2 = parseSymbols(svg2)[icon] || svg2;
          }
          svg2 = $(svg2.substr(svg2.indexOf("<svg")));
          return (svg2 == null ? void 0 : svg2.hasChildNodes()) && svg2;
        }
        const symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
        const parseSymbols = memoize(function(svg2) {
          const symbols = {};
          symbolRe.lastIndex = 0;
          let match2;
          while (match2 = symbolRe.exec(svg2)) {
            symbols[match2[3]] = `<svg ${match2[1]}svg>`;
          }
          return symbols;
        });
        function applyAnimation(el) {
          const length = getMaxPathLength(el);
          if (length) {
            css(el, "--uk-animation-stroke", length);
          }
        }
        const selDisabled = ".uk-disabled *, .uk-disabled, [disabled]";
        var Switcher = {
          mixins: [Togglable],
          args: "connect",
          props: {
            connect: String,
            toggle: String,
            itemNav: String,
            active: Number,
            followFocus: Boolean,
            swiping: Boolean
          },
          data: {
            connect: "~.uk-switcher",
            toggle: "> * > :first-child",
            itemNav: false,
            active: 0,
            cls: "uk-active",
            attrItem: "uk-switcher-item",
            selVertical: ".uk-nav",
            followFocus: false,
            swiping: true
          },
          computed: {
            connects: ({ connect: connect2 }, $el) => queryAll(connect2, $el),
            connectChildren() {
              return this.connects.map((el) => children(el)).flat();
            },
            toggles: ({ toggle: toggle2 }, $el) => $$(toggle2, $el),
            children(_, $el) {
              return children($el).filter(
                (child) => this.toggles.some((toggle2) => child.contains(toggle2))
              );
            }
          },
          watch: {
            connects(connects) {
              if (this.swiping) {
                css(connects, "touchAction", "pan-y pinch-zoom");
              }
              this.$emit();
            },
            connectChildren() {
              let index2 = Math.max(0, this.index());
              for (const el of this.connects) {
                children(el).forEach((child, i) => toggleClass(child, this.cls, i === index2));
              }
              this.$emit();
            },
            toggles(toggles) {
              this.$emit();
              const active2 = this.index();
              this.show(~active2 ? active2 : toggles[this.active] || toggles[0]);
            }
          },
          connected() {
            attr(this.$el, "role", "tablist");
          },
          observe: [
            lazyload({ targets: ({ connectChildren }) => connectChildren }),
            swipe({ target: ({ connects }) => connects, filter: ({ swiping }) => swiping })
          ],
          events: [
            {
              name: "click keydown",
              delegate() {
                return this.toggle;
              },
              handler(e) {
                if (!matches(e.current, selDisabled) && (e.type === "click" || e.keyCode === keyMap.SPACE)) {
                  e.preventDefault();
                  this.show(e.current);
                }
              }
            },
            {
              name: "keydown",
              delegate() {
                return this.toggle;
              },
              handler(e) {
                const { current, keyCode } = e;
                const isVertical = matches(this.$el, this.selVertical);
                let i = keyCode === keyMap.HOME ? 0 : keyCode === keyMap.END ? "last" : keyCode === keyMap.LEFT && !isVertical || keyCode === keyMap.UP && isVertical ? "previous" : keyCode === keyMap.RIGHT && !isVertical || keyCode === keyMap.DOWN && isVertical ? "next" : -1;
                if (~i) {
                  e.preventDefault();
                  const toggles = this.toggles.filter((el) => !matches(el, selDisabled));
                  const next = toggles[getIndex(i, toggles, toggles.indexOf(current))];
                  next.focus();
                  if (this.followFocus) {
                    this.show(next);
                  }
                }
              }
            },
            {
              name: "click",
              el() {
                return this.connects.concat(this.itemNav ? queryAll(this.itemNav, this.$el) : []);
              },
              delegate() {
                return `[${this.attrItem}],[data-${this.attrItem}]`;
              },
              handler(e) {
                if (e.target.closest("a,button")) {
                  e.preventDefault();
                  this.show(data(e.current, this.attrItem));
                }
              }
            },
            {
              name: "swipeRight swipeLeft",
              filter() {
                return this.swiping;
              },
              el() {
                return this.connects;
              },
              handler({ type }) {
                this.show(endsWith(type, "Left") ? "next" : "previous");
              }
            }
          ],
          update() {
            var _a;
            attr(this.connects, "role", "presentation");
            attr(children(this.$el), "role", "presentation");
            for (const index2 in this.toggles) {
              const toggle2 = this.toggles[index2];
              const item = (_a = this.connects[0]) == null ? void 0 : _a.children[index2];
              attr(toggle2, "role", "tab");
              if (!item) {
                continue;
              }
              toggle2.id = generateId(this, toggle2);
              item.id = generateId(this, item);
              attr(toggle2, "aria-controls", item.id);
              attr(item, { role: "tabpanel", "aria-labelledby": toggle2.id });
            }
            attr(this.$el, "aria-orientation", matches(this.$el, this.selVertical) ? "vertical" : null);
          },
          methods: {
            index() {
              return findIndex(this.children, (el) => hasClass(el, this.cls));
            },
            show(item) {
              const toggles = this.toggles.filter((el) => !matches(el, selDisabled));
              const prev = this.index();
              const next = getIndex(
                !isNode(item) || includes(toggles, item) ? item : 0,
                toggles,
                getIndex(this.toggles[prev], toggles)
              );
              const active2 = getIndex(toggles[next], this.toggles);
              this.children.forEach((child, i) => {
                toggleClass(child, this.cls, active2 === i);
                attr(this.toggles[i], {
                  "aria-selected": active2 === i,
                  tabindex: active2 === i ? null : -1
                });
              });
              const animate2 = prev >= 0 && prev !== next;
              this.connects.forEach(async ({ children: children2 }) => {
                const actives = toArray(children2).filter(
                  (child, i) => i !== active2 && hasClass(child, this.cls)
                );
                await this.toggleElement(actives, false, animate2);
                await this.toggleElement(children2[active2], true, animate2);
              });
            }
          }
        };
        var tab = {
          mixins: [Class],
          extends: Switcher,
          props: {
            media: Boolean
          },
          data: {
            media: 960,
            attrItem: "uk-tab-item",
            selVertical: ".uk-tab-left,.uk-tab-right"
          },
          connected() {
            const cls = hasClass(this.$el, "uk-tab-left") ? "uk-tab-left" : hasClass(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
            if (cls) {
              this.$create("toggle", this.$el, { cls, mode: "media", media: this.media });
            }
          }
        };
        const KEY_SPACE = 32;
        var toggle = {
          mixins: [Media, Togglable],
          args: "target",
          props: {
            href: String,
            target: null,
            mode: "list",
            queued: Boolean
          },
          data: {
            href: false,
            target: false,
            mode: "click",
            queued: true
          },
          computed: {
            target({ target }, $el) {
              target = queryAll(target || $el.hash, $el);
              return target.length ? target : [$el];
            }
          },
          connected() {
            if (!includes(this.mode, "media")) {
              if (!isFocusable(this.$el)) {
                attr(this.$el, "tabindex", "0");
              }
              if (!this.cls && isTag(this.$el, "a")) {
                attr(this.$el, "role", "button");
              }
            }
          },
          observe: lazyload({ target: ({ target }) => target }),
          events: [
            {
              name: pointerDown$1,
              filter() {
                return includes(this.mode, "hover");
              },
              handler(e) {
                this._preventClick = null;
                if (!isTouch(e) || isBoolean(this._showState) || this.$el.disabled) {
                  return;
                }
                trigger(this.$el, "focus");
                once(
                  document,
                  pointerDown$1,
                  () => trigger(this.$el, "blur"),
                  true,
                  (e2) => !this.$el.contains(e2.target)
                );
                if (includes(this.mode, "click")) {
                  this._preventClick = true;
                }
              }
            },
            {
              // mouseenter mouseleave are added because of Firefox bug,
              // where pointerleave is triggered immediately after pointerenter on scroll
              name: `mouseenter mouseleave ${pointerEnter} ${pointerLeave} focus blur`,
              filter() {
                return includes(this.mode, "hover");
              },
              handler(e) {
                if (isTouch(e) || this.$el.disabled) {
                  return;
                }
                const show = includes(["mouseenter", pointerEnter, "focus"], e.type);
                const expanded = this.isToggled(this.target);
                if (!show && (!isBoolean(this._showState) || e.type !== "blur" && matches(this.$el, ":focus") || e.type === "blur" && matches(this.$el, ":hover"))) {
                  if (expanded === this._showState) {
                    this._showState = null;
                  }
                  return;
                }
                if (show && isBoolean(this._showState) && expanded !== this._showState) {
                  return;
                }
                this._showState = show ? expanded : null;
                this.toggle(`toggle${show ? "show" : "hide"}`);
              }
            },
            {
              name: "keydown",
              filter() {
                return includes(this.mode, "click") && !isTag(this.$el, "input");
              },
              handler(e) {
                if (e.keyCode === KEY_SPACE) {
                  e.preventDefault();
                  this.$el.click();
                }
              }
            },
            {
              name: "click",
              filter() {
                return ["click", "hover"].some((mode) => includes(this.mode, mode));
              },
              handler(e) {
                let link;
                if (this._preventClick || e.target.closest('a[href="#"], a[href=""]') || (link = e.target.closest("a[href]")) && (!this.isToggled(this.target) || link.hash && matches(this.target, link.hash))) {
                  e.preventDefault();
                }
                if (!this._preventClick && includes(this.mode, "click")) {
                  this.toggle();
                }
              }
            },
            {
              name: "mediachange",
              filter() {
                return includes(this.mode, "media");
              },
              el() {
                return this.target;
              },
              handler(e, mediaObj) {
                if (mediaObj.matches ^ this.isToggled(this.target)) {
                  this.toggle();
                }
              }
            }
          ],
          methods: {
            async toggle(type) {
              if (!trigger(this.target, type || "toggle", [this])) {
                return;
              }
              if (hasAttr(this.$el, "aria-expanded")) {
                attr(this.$el, "aria-expanded", !this.isToggled(this.target));
              }
              if (!this.queued) {
                return this.toggleElement(this.target);
              }
              const leaving = this.target.filter((el) => hasClass(el, this.clsLeave));
              if (leaving.length) {
                for (const el of this.target) {
                  const isLeaving = includes(leaving, el);
                  this.toggleElement(el, isLeaving, isLeaving);
                }
                return;
              }
              const toggled = this.target.filter(this.isToggled);
              if (await this.toggleElement(toggled, false)) {
                await this.toggleElement(
                  this.target.filter((el) => !includes(toggled, el)),
                  true
                );
              }
            }
          }
        };
        var components = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          Accordion,
          Alert: alert,
          Close,
          Cover: cover,
          Drop: drop,
          DropParentIcon: IconComponent,
          Dropdown: drop,
          Dropnav,
          FormCustom: formCustom,
          Grid: grid,
          HeightMatch: heightMatch,
          HeightPlaceholder: heightPlaceholder,
          HeightViewport: heightViewport,
          Icon,
          Img: img,
          Inverse: inverse,
          Leader: leader,
          Margin,
          Marker,
          Modal: modal,
          Nav: nav,
          NavParentIcon,
          Navbar: navbar,
          NavbarParentIcon: IconComponent,
          NavbarToggleIcon,
          Offcanvas: offcanvas,
          OverflowAuto: overflowAuto,
          OverlayIcon: IconComponent,
          PaginationNext,
          PaginationPrevious,
          Responsive: responsive,
          Scroll: scroll,
          Scrollspy: scrollspy,
          ScrollspyNav: scrollspyNav,
          SearchIcon: Search,
          SlidenavNext: Slidenav,
          SlidenavPrevious: Slidenav,
          Spinner,
          Sticky: sticky,
          Svg: svg,
          Switcher,
          Tab: tab,
          Toggle: toggle,
          Totop,
          Video
        });
        each(components, (component2, name) => App.component(name, component2));
        boot(App);
        each(components$1, (component2, name) => App.component(name, component2));
        return App;
      });
    }
  });

  // frontend/javascript/uikit-icons.js
  var require_uikit_icons = __commonJS({
    "frontend/javascript/uikit-icons.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define("uikiticons", factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.UIkitIcons = factory());
      })(exports, function() {
        "use strict";
        function plugin(UIkit) {
          if (plugin.installed) {
            return;
          }
          UIkit.icon.add({
            "youtube": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>',
            "yootheme": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m16.15,5.48c-1.37,0-2.45.61-3.11,1.54-.66-.93-1.74-1.54-3.11-1.54-1.75,0-3.03,1-3.57,2.41v-2.22h-2.01v4.45c0,.85-.31,1.35-1.18,1.35s-1.18-.5-1.18-1.35v-4.45H0v4.86c0,.7.17,1.33.53,1.82.34.49.88.85,1.6,1v3.16h2.1v-3.16c1.28-.28,1.96-1.17,2.1-2.35.52,1.44,1.81,2.48,3.59,2.48,1.37,0,2.45-.61,3.11-1.54.66.93,1.74,1.54,3.11,1.54,2.37,0,3.85-1.82,3.85-4s-1.49-4-3.85-4Zm-6.22,5.99c-1.11,0-1.85-.72-1.85-1.99s.74-1.99,1.85-1.99,1.85.72,1.85,1.99-.74,1.99-1.85,1.99Zm6.22,0c-1.11,0-1.85-.72-1.85-1.99s.74-1.99,1.85-1.99,1.85.72,1.85,1.99-.74,1.99-1.85,1.99Z"/></svg>',
            "yelp": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069	c-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276	c0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789	c-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025	c0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155	c-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351	c-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479	c0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421	c-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272	c0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749	C10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794	C2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667	c0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
            "xing": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
            "x": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m15.08,2.1h2.68l-5.89,6.71,6.88,9.1h-5.4l-4.23-5.53-4.84,5.53H1.59l6.24-7.18L1.24,2.1h5.54l3.82,5.05,4.48-5.05Zm-.94,14.23h1.48L6,3.61h-1.6l9.73,12.71h0Z"/></svg>',
            "world": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
            "wordpress": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
            "whatsapp": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
            "warning": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
            "vimeo": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
            "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="19.5 5.9 19.5 14.1 14.5 10.4 14.5 15.5 .5 15.5 .5 4.5 14.5 4.5 14.5 9.6 19.5 5.9"/></svg>',
            "users": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
            "user": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
            "upload": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
            "unlock": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
            "uikit": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
            "twitter": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
            "twitch": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z"/><rect x="12.98" y="4.55" width="1.29" height="3.88"/><rect x="9.43" y="4.55" width="1.29" height="3.88"/></svg>',
            "tv": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
            "tumblr": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
            "tripadvisor": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0	c0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009	c1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15	c2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594	c-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811	c-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079	c2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066	c-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002	c2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775	c0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468	C3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479	c1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775	c0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627	c-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618	c0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968	c-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72	C9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
            "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="5 13 10 8 15 13"/></svg>',
            "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="8 5 13 10 8 15"/></svg>',
            "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="12 5 7 10 12 15"/></svg>',
            "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="5 7 15 7 10 12"/></svg>',
            "trash": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
            "tiktok": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"/></svg>',
            "thumbnails": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
            "threads": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m14.47,9.29c-.08-.04-.16-.08-.25-.11-.14-2.66-1.6-4.18-4.04-4.2-.01,0-.02,0-.03,0-1.46,0-2.67.62-3.42,1.76l1.34.92c.56-.85,1.43-1.03,2.08-1.03,0,0,.01,0,.02,0,.8,0,1.41.24,1.8.69.29.33.48.79.57,1.37-.71-.12-1.48-.16-2.31-.11-2.32.13-3.81,1.49-3.71,3.37.05.95.53,1.77,1.34,2.31.69.45,1.57.67,2.49.62,1.21-.07,2.16-.53,2.83-1.38.5-.64.82-1.48.96-2.52.58.35,1.01.81,1.24,1.36.4.94.43,2.48-.83,3.74-1.1,1.1-2.43,1.58-4.43,1.59-2.22-.02-3.9-.73-4.99-2.12-1.02-1.3-1.55-3.18-1.57-5.58.02-2.4.55-4.28,1.57-5.58,1.09-1.39,2.77-2.1,4.99-2.12,2.24.02,3.95.73,5.08,2.13.56.68.98,1.54,1.25,2.55l1.57-.42c-.33-1.23-.86-2.3-1.58-3.18-1.45-1.79-3.58-2.7-6.32-2.72h-.01c-2.73.02-4.84.94-6.25,2.73-1.26,1.6-1.9,3.82-1.93,6.61h0s0,.01,0,.01c.02,2.79.67,5.01,1.93,6.61,1.41,1.8,3.51,2.71,6.25,2.73h.01c2.43-.02,4.14-.65,5.55-2.06,1.85-1.84,1.79-4.16,1.18-5.58-.44-1.02-1.27-1.84-2.41-2.39Zm-4.2,3.95c-1.02.06-2.07-.4-2.12-1.38-.04-.72.52-1.53,2.19-1.63.19-.01.38-.02.56-.02.61,0,1.17.06,1.69.17-.19,2.41-1.32,2.8-2.32,2.85Z"/></svg>',
            "telegram": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m10,1.09C5.08,1.09,1.09,5.08,1.09,10s3.99,8.91,8.91,8.91,8.91-3.99,8.91-8.91S14.92,1.09,10,1.09Zm4.25,5.8c-.03.36-.23,1.62-.44,2.99-.31,1.93-.64,4.04-.64,4.04,0,0-.05.59-.49.7s-1.16-.36-1.29-.46c-.1-.08-1.93-1.24-2.6-1.8-.18-.15-.39-.46.03-.82.93-.85,2.04-1.91,2.7-2.58.31-.31.62-1.03-.67-.15-1.83,1.26-3.63,2.45-3.63,2.45,0,0-.41.26-1.19.03-.77-.23-1.67-.54-1.67-.54,0,0-.62-.39.44-.8h0s4.46-1.83,6-2.47c.59-.26,2.6-1.08,2.6-1.08,0,0,.93-.36.85.52Z"/></svg>',
            "tag": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
            "tablet": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
            "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
            "table": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
            "strikethrough": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
            "star": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
            "soundcloud": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
            "social": '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
            "signal": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m7.86,1.34l.2.81c-.79.19-1.54.51-2.24.93l-.43-.71c.77-.46,1.6-.81,2.47-1.02Zm4.28,0l-.2.81c.79.19,1.54.51,2.24.93l.43-.72c-.77-.46-1.6-.81-2.47-1.02h0ZM2.37,5.39c-.46.77-.81,1.6-1.02,2.47l.81.2c.19-.79.51-1.54.93-2.24l-.71-.43Zm-.45,4.61c0-.41.03-.81.09-1.21l-.83-.13c-.13.89-.13,1.79,0,2.67l.83-.13c-.06-.4-.09-.81-.09-1.21h0Zm12.69,7.63l-.43-.72c-.7.42-1.45.73-2.24.93l.2.81c.87-.21,1.7-.56,2.46-1.02h0Zm3.47-7.63c0,.41-.03.81-.09,1.21l.83.13c.13-.89.13-1.79,0-2.67l-.83.13c.06.4.09.81.09,1.21Zm.58,2.14l-.81-.2c-.19.79-.51,1.54-.93,2.24l.72.43c.46-.77.81-1.6,1.02-2.47h0Zm-7.44,5.85c-.8.12-1.62.12-2.42,0l-.13.83c.89.13,1.79.13,2.67,0l-.13-.83Zm5.29-3.2c-.48.65-1.06,1.23-1.71,1.71l.5.67c.72-.53,1.36-1.16,1.89-1.88l-.67-.5Zm-1.71-11.29c.65.48,1.23,1.06,1.71,1.71l.67-.5c-.53-.72-1.17-1.35-1.88-1.88l-.5.67Zm-11.29,1.71c.48-.65,1.06-1.23,1.71-1.71l-.5-.67c-.72.53-1.35,1.17-1.88,1.88l.67.5Zm14.14.18l-.72.43c.42.7.73,1.45.93,2.24l.81-.2c-.21-.87-.56-1.7-1.02-2.46h0Zm-8.84-3.38c.8-.12,1.62-.12,2.42,0l.13-.83c-.89-.13-1.79-.13-2.67,0l.13.83Zm-4.86,15.38l-1.73.4.4-1.73-.81-.19-.4,1.73c-.07.28.02.58.22.78s.5.29.78.22l1.73-.39-.19-.82Zm-1.96-2.26l.81.19.28-1.2c-.41-.68-.71-1.42-.9-2.19l-.81.2c.18.74.46,1.45.82,2.12l-.2.88Zm3.9,1.81l-1.19.28.19.81.88-.2c.67.36,1.38.64,2.12.82l.2-.81c-.77-.19-1.51-.5-2.19-.9h0ZM10,2.75c-2.63,0-5.06,1.43-6.34,3.74s-1.19,5.12.21,7.36l-.7,2.97,2.97-.7c2.61,1.64,5.96,1.46,8.37-.46s3.34-5.15,2.32-8.06c-1.02-2.91-3.77-4.85-6.85-4.85Z"/></svg>',
            "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
            "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
            "shrink": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
            "settings": '<svg width="20" height="20" viewBox="0 0 20 20"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
            "server": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
            "search": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            "rss": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
            "reply": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
            "refresh": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
            "reddit": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
            "receiver": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
            "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
            "question": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="9.99" cy="14.24" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="m7.72,7.61c0-3.04,4.55-3.06,4.55-.07,0,.95-.91,1.43-1.49,2.03-.48.49-.72.98-.78,1.65-.01.13-.02.24-.02.35"/></svg>',
            "push": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
            "pull": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
            "print": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
            "plus": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
            "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            "play": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
            "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            "pinterest": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
            "phone": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
            "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
            "pencil": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
            "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="m6.42,2.16l5.28,5.28"/><path d="m18.49,11.83s1.51,2.06,1.51,3.36c0,.92-.76,1.64-1.51,1.64h0c-.75,0-1.49-.72-1.49-1.64,0-1.3,1.49-3.36,1.49-3.36h0Z"/><line fill="none" stroke="#000" x1="1.26" y1="10.5" x2="16" y2="10.5"/><polygon fill="none" stroke="#000" stroke-width="1.1" points="10.2 1.55 17.6 8.93 8.08 18.45 .7 11.07 10.2 1.55"/></svg>',
            "nut": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
            "move": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
            "more": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
            "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
            "minus": '<svg width="20" height="20" viewBox="0 0 20 20"><rect height="1" width="18" y="9" x="1"/></svg>',
            "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            "microsoft": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m2,2h7.58v7.58H2V2Zm8.42,0h7.58v7.58h-7.58V2ZM2,10.42h7.58v7.58H2v-7.58Zm8.42,0h7.58v7.58h-7.58"/></svg>',
            "microphone": '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
            "menu": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
            "mastodon": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m18.5,6.87c0-3.95-2.59-5.11-2.59-5.11-1.31-.6-3.55-.85-5.88-.87h-.06c-2.33.02-4.57.27-5.88.87,0,0-2.59,1.16-2.59,5.11,0,.91-.02,1.99.01,3.14.09,3.87.71,7.68,4.28,8.62,1.65.44,3.06.53,4.2.47,2.07-.11,3.23-.74,3.23-.74l-.07-1.5s-1.48.47-3.14.41c-1.64-.06-3.38-.18-3.64-2.2-.02-.18-.04-.37-.04-.57,0,0,1.61.39,3.66.49,1.25.06,2.42-.07,3.61-.22,2.28-.27,4.27-1.68,4.52-2.97.39-2.02.36-4.94.36-4.94Zm-3.05,5.09h-1.9v-4.65c0-.98-.41-1.48-1.24-1.48-.91,0-1.37.59-1.37,1.76v2.54h-1.89v-2.54c0-1.17-.46-1.76-1.37-1.76-.82,0-1.24.5-1.24,1.48v4.65h-1.9v-4.79c0-.98.25-1.76.75-2.33.52-.58,1.19-.87,2.03-.87.97,0,1.71.37,2.19,1.12l.47.79.47-.79c.49-.75,1.22-1.12,2.19-1.12.84,0,1.51.29,2.03.87.5.58.75,1.35.75,2.33v4.79Z"/></svg>',
            "mail": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
            "lock": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
            "location": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
            "list": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
            "linkedin": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
            "link": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
            "link-external": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="14.5 10.5 14.5 16.5 3.5 16.5 3.5 5.5 8.5 5.5"/><polyline fill="none" stroke="#000" points="17.5 8.5 17.5 2.5 11.5 2.5"/><line fill="none" stroke="#000" x1="6.5" y1="13.5" x2="17.5" y2="2.5"/></svg>',
            "lifesaver": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="9"/><circle fill="none" stroke="#000" cx="10" cy="10" r="5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="5.17" y1="2.39" x2="8.11" y2="5.33"/><line fill="none" stroke="#000" stroke-width="1.1" x1="5.33" y1="8.11" x2="2.39" y2="5.17"/><line fill="none" stroke="#000" stroke-width="1.1" x1="14.83" y1="17.61" x2="11.89" y2="14.67"/><line fill="none" stroke="#000" stroke-width="1.1" x1="14.67" y1="11.89" x2="17.61" y2="14.83"/><line fill="none" stroke="#000" stroke-width="1.1" x1="17.61" y1="5.17" x2="14.67" y2="8.11"/><line fill="none" stroke="#000" stroke-width="1.1" x1="11.89" y1="5.33" x2="14.83" y2="2.39"/><line fill="none" stroke="#000" stroke-width="1.1" x1="8.11" y1="14.67" x2="5.17" y2="17.61"/><line fill="none" stroke="#000" stroke-width="1.1" x1="2.39" y1="14.83" x2="5.33" y2="11.89"/></svg>',
            "laptop": '<svg width="20" height="20" viewBox="0 0 20 20"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
            "joomla": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
            "italic": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
            "instagram": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
            "info": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            "image": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
            "home": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
            "history": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            "heart": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
            "hashtag": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
            "happy": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
            "grid": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
            "google": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
            "gitter": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
            "github": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
            "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
            "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="6" cy="3" r="1.79"/><circle fill="none" stroke="#000" cx="14" cy="3" r="1.79"/><circle fill="none" stroke="#000" cx="10" cy="17" r="1.79"/><path fill="none" stroke="#000" d="m6,4.78v1.99c0,2.63,4,3.66,4,6.75,0,1.55.01,1.24.01,1.24,0-.18,0,.31,0-1.24,0-3.09,3.99-4.12,3.99-6.75v-1.99"/></svg>',
            "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="m13.5,8c0,2.41-1.57,2.87-3.44,3.25-1.47.29-3.56.81-3.56,3.75V5"/><circle fill="none" stroke="#000" cx="6.5" cy="3" r="1.79"/><circle fill="none" stroke="#000" cx="13.5" cy="6" r="1.79"/><circle fill="none" stroke="#000" cx="6.5" cy="17" r="1.79"/></svg>',
            "future": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
            "foursquare": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
            "forward": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
            "folder": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
            "flickr": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
            "file": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
            "file-text": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
            "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
            "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
            "facebook": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
            "eye": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="3.45"/><path fill="none" stroke="#000" d="m19.5,10c-2.4,3.66-5.26,7-9.5,7h0,0,0c-4.24,0-7.1-3.34-9.49-7C2.89,6.34,5.75,3,9.99,3h0,0,0c4.25,0,7.11,3.34,9.5,7Z"/></svg>',
            "eye-slash": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="m7.56,7.56c.62-.62,1.49-1.01,2.44-1.01,1.91,0,3.45,1.54,3.45,3.45,0,.95-.39,1.82-1.01,2.44"/><path fill="none" stroke="#000" d="m19.5,10c-2.4,3.66-5.26,7-9.5,7h0,0,0c-4.24,0-7.1-3.34-9.49-7C2.89,6.34,5.75,3,9.99,3h0,0,0c4.25,0,7.11,3.34,9.5,7Z"/><line fill="none" stroke="#000" x1="2.5" y1="2.5" x2="17.5" y2="17.5"/></svg>',
            "expand": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
            "etsy": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
            "dribbble": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
            "download": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
            "discord": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z"/></svg>',
            "desktop": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
            "database": '<svg width="20" height="20" viewBox="0 0 20 20"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
            "crosshairs": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="10" cy="10" r="7.5"/><line fill="none" stroke="#000" x1="10" x2="10" y2="8"/><line fill="none" stroke="#000" x1="10" y1="12" x2="10" y2="20"/><line fill="none" stroke="#000" y1="10" x2="8" y2="10"/><line fill="none" stroke="#000" x1="12" y1="10" x2="20" y2="10"/></svg>',
            "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
            "copy": '<svg width="20" height="20" viewBox="0 0 20 20"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
            "comments": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
            "commenting": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
            "comment": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
            "cog": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
            "code": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
            "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            "close": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
            "clock": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
            "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
            "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
            "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
            "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
            "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
            "check": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
            "cart": '<svg width="20" height="20" viewBox="0 0 20 20"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
            "camera": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
            "calendar": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
            "bookmark": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
            "bolt": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
            "bold": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
            "bell": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
            "behance": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
            "ban": '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
            "bag": '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="#000" d="M7.5,7.5V4A2.48,2.48,0,0,1,10,1.5,2.54,2.54,0,0,1,12.5,4V7.5"/><polygon fill="none" stroke="#000" points="16.5 7.5 3.5 7.5 2.5 18.5 17.5 18.5 16.5 7.5"/></svg>',
            "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
            "arrow-up-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="16 10 16 4 10 4"/><line fill="none" stroke="#000" x1="4" y1="16" x2="16" y2="4"/></svg>',
            "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
            "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
            "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
            "apple": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m17.23,6.93c-.1.08-1.95,1.12-1.95,3.43,0,2.67,2.35,3.62,2.42,3.64-.01.06-.37,1.29-1.24,2.55-.77,1.11-1.58,2.22-2.8,2.22s-1.54-.71-2.95-.71-1.87.73-2.99.73-1.9-1.03-2.8-2.29c-1.04-1.48-1.88-3.78-1.88-5.96,0-3.5,2.28-5.36,4.51-5.36,1.19,0,2.18.78,2.93.78s1.82-.83,3.17-.83c.51,0,2.36.05,3.57,1.79h0Zm-4.21-3.27c.56-.66.96-1.59.96-2.51,0-.13-.01-.26-.03-.36-.91.03-1.99.61-2.65,1.36-.51.58-.99,1.5-.99,2.44,0,.14.02.28.03.33.06.01.15.02.24.02.82,0,1.85-.55,2.44-1.28h0Z"/></svg>',
            "android": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m14.88,6.77l1.66-2.87c.09-.16.04-.37-.12-.46-.16-.09-.37-.04-.46.12l-1.68,2.91c-1.28-.59-2.73-.91-4.28-.91s-3,.33-4.28.91l-1.68-2.91c-.09-.16-.3-.22-.46-.12-.16.09-.22.3-.12.46l1.66,2.87C2.26,8.32.32,11.22,0,14.61h20c-.32-3.39-2.26-6.29-5.12-7.84h0Zm-9.47,5.03c-.46,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84c0,.46-.37.84-.84.84Zm9.18,0c-.46,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84c0,.46-.37.84-.84.84Z"/></svg>',
            "android-robot": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="m17.61,7.96v4.64c-.06,1.48-2.17,1.48-2.23,0v-4.64c.06-1.48,2.17-1.48,2.23,0Z"/><path d="m4.62,7.96v4.64c-.06,1.48-2.17,1.48-2.23,0v-4.64c.06-1.48,2.17-1.48,2.23,0Z"/><path d="m12.78,2.85c-.11-.07-.23-.13-.34-.19.13-.23.65-1.17.79-1.42.07-.12-.05-.27-.18-.23-.04.01-.07.04-.09.08l-.79,1.43c-1.32-.6-2.98-.6-4.3,0-.13-.23-.65-1.18-.79-1.43-.04-.07-.14-.1-.21-.06-.08.04-.1.14-.06.21,0,0,.79,1.42.79,1.42-1.49.77-2.53,2.28-2.53,3.99-.02,0,9.93,0,9.93,0,.01-1.55-.87-2.98-2.19-3.8Zm-5.07,1.98c-.23,0-.41-.19-.41-.41.01-.27.21-.41.41-.41s.4.14.42.41c0,.22-.18.42-.41.41Zm4.58,0c-.23,0-.42-.19-.41-.41.01-.28.21-.41.41-.41s.4.14.41.41c0,.23-.19.41-.41.41Z"/><path d="m14.97,7.03v7.2c0,.66-.54,1.2-1.2,1.2h-.8v2.46c-.06,1.48-2.16,1.48-2.23,0,0,0,0-2.46,0-2.46h-1.48v2.46c0,.61-.5,1.11-1.11,1.11s-1.11-.5-1.11-1.11v-2.46h-.8c-.66,0-1.2-.54-1.2-1.2,0,0,0-7.2,0-7.2h9.93Z"/></svg>',
            "album": '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
            "500px": '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>'
          });
        }
        if (typeof window !== "undefined" && window.UIkit) {
          window.UIkit.use(plugin);
        }
        return plugin;
      });
    }
  });

  // frontend/javascript/index.js
  var import_uikit = __toESM(require_uikit());
  var import_uikit_icons = __toESM(require_uikit_icons());
  console.info("Bridgetown is loaded!");
})();
/*! UIkit 3.18.3 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */
//# sourceMappingURL=/_bridgetown/static/index.6OWAGXQ7.js.map
