(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7323)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,i=r(n(7294)),l=n(1003),s=n(7795),c=n(4465),a=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,r){if(l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(h.has(i))return;h.add(i)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function _(e){return"string"==typeof e?e:s.formatUrl(e)}let x=i.default.forwardRef(function(e,t){let n,r;let{href:s,as:h,children:x,prefetch:j,passHref:y,replace:m,shallow:w,scroll:b,locale:g,onClick:C,onMouseEnter:N,onTouchStart:M,legacyBehavior:R=!1}=e,E=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,R&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let k=!1!==j,P=i.default.useContext(a.RouterContext),O=i.default.useContext(u.AppRouterContext),L=null!=P?P:O,S=!P,{href:T,as:z}=i.default.useMemo(()=>{if(!P){let e=_(s);return{href:e,as:h?_(h):e}}let[t,n]=l.resolveHref(P,s,!0);return{href:t,as:h?l.resolveHref(P,h):n||t}},[P,s,h]),I=i.default.useRef(T),B=i.default.useRef(z);R&&(r=i.default.Children.only(n));let D=R?r&&"object"==typeof r&&r.ref:t,[H,U,A]=f.useIntersection({rootMargin:"200px"}),K=i.default.useCallback(e=>{(B.current!==z||I.current!==T)&&(A(),B.current=z,I.current=T),H(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[z,D,T,A,H]);i.default.useEffect(()=>{L&&U&&k&&v(L,T,z,{locale:g})},[z,T,U,g,k,null==P?void 0:P.locale,L]);let F={ref:K,onClick(e){R||"function"!=typeof C||C(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,o,s,c,a,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:s,locale:a,scroll:c}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?i.default.startTransition(h):h()}(e,L,T,z,m,w,b,g,S,k)},onMouseEnter(e){R||"function"!=typeof N||N(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(k||!S)&&v(L,T,z,{locale:g,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){R||"function"!=typeof M||M(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(k||!S)&&v(L,T,z,{locale:g,priority:!0,bypassPrefetchedCheck:!0})}};if(!R||y||"a"===r.type&&!("href"in r.props)){let Q=void 0!==g?g:null==P?void 0:P.locale,Z=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(z,Q,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);F.href=Z||p.addBasePath(c.addLocale(z,Q,null==P?void 0:P.defaultLocale))}return R?i.default.cloneElement(r,F):i.default.createElement("a",Object.assign({},E,F),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,a=c||!i,[u,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(i){if(!a&&!u&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},s.push(n),l.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(r);let t=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,a,n,t,u]);let h=r.useCallback(()=>{f(!1)},[]);return[p,u,h]};var r=n(7294),o=n(4686);let i="function"==typeof IntersectionObserver,l=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7323:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return _},default:function(){return x}});var r=n(5893),o=n(9008),i=n.n(o),l=n(1502),s=n.n(l);n(1019);var c=n(7294),a=n(9646),u=n.n(a);class f extends c.Component{render(){return(0,r.jsxs)("div",{className:u().box,children:[(0,r.jsxs)("div",{className:u().horizontal,children:[(0,r.jsx)("h3",{children:this.review.subject_name}),(0,r.jsx)("h4",{className:u().subject_code,children:this.review.subject_code}),(0,r.jsxs)("p",{className:u().sem,children:[this.review.semester,", ",this.review.year]})]}),(0,r.jsxs)("p",{children:[this.review.core," for ",this.review.major]}),(0,r.jsxs)("p",{children:["Lecturer(s): ",this.review.lecturers]}),(0,r.jsxs)("div",{className:u().horizontal,children:[(0,r.jsxs)("div",{className:u().cozyBox,children:[(0,r.jsxs)("h5",{children:[this.review.difficulty,"/10"]}),(0,r.jsx)("p",{children:"Difficulty"})]}),(0,r.jsxs)("div",{className:u().cozyBox,children:[(0,r.jsxs)("h5",{children:[this.review.interesting,"/10"]}),(0,r.jsx)("p",{children:"Interesting"})]}),(0,r.jsxs)("div",{className:u().cozyBox,children:[(0,r.jsxs)("h5",{children:[this.review.teaching_quality,"/10"]}),(0,r.jsx)("p",{children:"Teaching Quality"})]})]}),this.review.review]})}constructor(e){super(e),this.review=e.review}}var d=n(3321),p=n(1664),h=n.n(p);class v extends c.Component{render(){return(0,r.jsx)("div",{children:(0,r.jsx)(h(),{href:"/add-review",children:(0,r.jsx)(d.Z,{variant:"contained",children:"Add Review"})})})}}var _=!0;function x(e){let{reviews:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:s().main,children:[(0,r.jsx)(v,{}),(0,r.jsx)("p",{children:t.review}),t.map(e=>(0,r.jsx)(f,{review:e}))]})]})}},1502:function(e){e.exports={main:"Home_main__nLjiQ"}},9646:function(e){e.exports={box:"ReviewRow_box__nLGS7",horizontal:"ReviewRow_horizontal__NQDD0",subject_code:"ReviewRow_subject_code___9NLb",sem:"ReviewRow_sem__oU6y7",cozyBox:"ReviewRow_cozyBox__rMHw3"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1019:function(e,t,n){"use strict";n.d(t,{N8:function(){return r.N8},VF:function(){return r.VF},iH:function(){return r.iH}});var r=n(5276)}},function(e){e.O(0,[627,675,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);