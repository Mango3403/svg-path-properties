!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.pathProperties=n():t.pathProperties=n()}(this,function(){return function(t){function n(e){if(r[e])return r[e].exports;var i=r[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=r(1);Object.defineProperty(n,"pathProperties",{enumerable:!0,get:function(){return e(i).default}})},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function i(t,n,r,e){function o(){return i}return i.get=function(i){var o=(n-t)*i,s=(e-r)*i;return{x:t+o,y:r+s}},o()}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){function n(t){for(var u,f=(0,s.default)(t),h=[0,0],c=[0,0],p=0;p<f.length;p++)"M"===f[p][0]?(h=[f[p][1],f[p][2]],o.push(null)):"m"===f[p][0]?(h=[f[p][1]+h[0],f[p][2]+h[1]],o.push(null)):"L"===f[p][0]?(r+=Math.sqrt(Math.pow(h[0]-f[p][1],2)+Math.pow(h[1]-f[p][2],2)),o.push(i(h[0],f[p][1],h[1],f[p][2])),h=[f[p][1],f[p][2]]):"l"===f[p][0]?(r+=Math.sqrt(Math.pow(f[p][1],2)+Math.pow(f[p][2],2)),h=[f[p][1]+h[0],f[p][2]+h[1]],o.push()):"H"===f[p][0]?(r+=Math.abs(h[0]-f[p][1]),h[0]=f[p][1],o.push()):"h"===f[p][0]?(r+=Math.abs(f[p][1]),h[0]=f[p][1]+h[0],o.push()):"V"===f[p][0]?(r+=Math.abs(h[1]-f[p][1]),h[1]=f[p][1],o.push()):"v"===f[p][0]?(r+=Math.abs(f[p][1]),h[1]=f[p][1]+h[1],o.push()):"z"===f[p][0]||"Z"===f[p][0]?(r+=Math.sqrt(Math.pow(f[0][1]-h[0],2)+Math.pow(f[0][1]-h[1],2)),h=[f[0][1],f[0][2]],o.push()):"C"===f[p][0]?(u=new a.default(h[0],h[1],f[p][1],f[p][2],f[p][3],f[p][4],f[p][5],f[p][6]),r+=u.length(),h=[f[p][5],f[p][6]],o.push(u)):"c"===f[p][0]?(u=new a.default(h[0],h[1],h[0]+f[p][1],h[1]+f[p][2],h[0]+f[p][3],h[1]+f[p][4],h[0]+f[p][5],h[1]+f[p][6]),r+=u.length(),h=[f[p][5]+h[0],f[p][6]+h[1]],o.push(u)):"S"===f[p][0]?(u=p>0&&["C","c","S","s"].indexOf(f[p-1][0])>-1?new a.default(h[0],h[1],h[0]+f[p][1]-f[p][3],h[1]+f[p][2]-f[p][4],f[p][1],f[p][2],f[p][3],f[p][4]):new a.default(h[0],h[1],h[0],h[1],f[p][1],f[p][2],f[p][3],f[p][4]),r+=u.length(),h=[f[p][3],f[p][4]],o.push(u)):"s"===f[p][0]?(u=p>0&&["C","c","S","s"].indexOf(f[p-1][0])>-1?new a.default(h[0],h[1],h[0]+f[p][1]-f[p][3],h[1]+f[p][2]-f[p][4],h[0]+f[p][1],h[1]+f[p][2],h[0]+f[p][3],h[1]+f[p][4]):new a.default(h[0],h[1],h[0],h[1],h[0]+f[p][1],h[1]+f[p][2],h[0]+f[p][3],h[1]+f[p][4]),r+=u.length(),h=[f[p][3]+h[0],f[p][4]+h[1]],o.push(u)):"Q"===f[p][0]?(console.info(h[0],h[1],f[p][1],f[p][2],f[p][3],f[p][4]),u=new a.default(h[0],h[1],f[p][1],f[p][2],f[p][3],f[p][4]),r+=u.length(),o.push(u),h=[f[p][3],f[p][4]],c=[f[p][1],f[p][2]]):"q"===f[p][0]?(u=new a.default(h[0],h[1],h[0]+f[p][1],h[1]+f[p][2],h[0]+f[p][3],h[1]+f[p][4]),r+=u.length(),c=[h[0]+f[p][1],h[1]+f[p][2]],h=[f[p][3]+h[0],f[p][4]+h[1]],o.push(u)):"T"===f[p][0]?(u=p>0&&["Q","q","T","t"].indexOf(f[p-1][0])>-1?new a.default(h[0],h[1],2*h[0]-c[0],2*h[1]-c[1],f[p][1],f[p][2]):new a.default(h[0],h[1],h[0],h[1],f[p][1],f[p][2]),o.push(u),r+=u.length(),c=[2*h[0]-c[0],2*h[1]-c[1]],h=[f[p][1],f[p][2]]):"t"===f[p][0]&&(u=p>0&&["Q","q","T","t"].indexOf(f[p-1][0])>-1?new a.default(h[0],h[1],2*h[0]-c[0],2*h[1]-c[1],h[0]+f[p][1],h[1]+f[p][2]):new a.default(h[0],h[1],h[0],h[1],h[0]+f[p][1],h[1]+f[p][2]),r+=u.length(),c=[2*h[0]-c[0],2*h[1]-c[1]],h=[f[p][1]+h[0],f[p][2]+h[0]],o.push(u)),e.push(r);return n}var r=0,e=[],o=[];return n.getLength=function(){return r},n.getPointAt=function(t){for(var n=e.length-1;e[n]>=t&&e[n]>0;)n--;n++;var r=(t-e[n-1])/e[n];return console.info("--",r),o[n].get(r)},n(t)};var o=r(2),s=e(o),u=r(3),a=e(u)},function(t,n){"use strict";function r(t){var n=[];return t.replace(o,function(t,r,o){var s=r.toLowerCase();for(o=e(o),"m"==s&&o.length>2&&(n.push([r].concat(o.splice(0,2))),s="l",r="m"==r?"l":"L");;){if(o.length==i[s])return o.unshift(r),n.push(o);if(o.length<i[s])throw new Error("malformed path data");n.push([r].concat(o.splice(0,i[s])))}}),n}function e(t){var n=t.match(s);return n?n.map(Number):[]}t.exports=r;var i={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},o=/([astvzqmhlc])([^astvzqmhlc]*)/gi,s=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi},function(t,n,r){"use strict";t.exports=r(4)},function(t,n,r){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function n(t,n,r,e,i){"undefined"==typeof i&&(i=.5);var o=c.projectionratio(i,t),s=1-o,u={x:o*n.x+s*e.x,y:o*n.y+s*e.y},a=c.abcratio(i,t),f={x:r.x+(r.x-u.x)/a,y:r.y+(r.y-u.y)/a};return{A:f,B:r,C:u}}var i=Math.abs,o=Math.min,s=Math.max,u=Math.acos,a=Math.sqrt,f=Math.PI,h={x:0,y:0,z:0},c=r(5),p=r(6),l=function(t){var n=t&&t.forEach?t:[].slice.call(arguments),r=!1;if("object"===e(n[0])){r=n.length;var o=[];n.forEach(function(t){["x","y","z"].forEach(function(n){"undefined"!=typeof t[n]&&o.push(t[n])})}),n=o}var s=!1,u=n.length;if(r){if(r>4){if(1!==arguments.length)throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");s=!0}}else if(6!==u&&8!==u&&9!==u&&12!==u&&1!==arguments.length)throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");var a=!s&&(9===u||12===u)||t&&t[0]&&"undefined"!=typeof t[0].z;this._3d=a;for(var f=[],h=0,p=a?3:2;h<u;h+=p){var l={x:n[h],y:n[h+1]};a&&(l.z=n[h+2]),f.push(l)}this.order=f.length-1,this.points=f;var x=["x","y"];a&&x.push("z"),this.dims=x,this.dimlen=x.length,function(t){for(var n=t.order,r=t.points,e=c.align(r,{p1:r[0],p2:r[n]}),o=0;o<e.length;o++)if(i(e[o].y)>1e-4)return void(t._linear=!1);t._linear=!0}(this),this._t1=0,this._t2=1,this.update()};l.fromSVG=function(t){var n=t.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g).map(parseFloat),r=/[cq]/.test(t);return r?(n=n.map(function(t,r){return r<2?t:t+n[r%2]}),new l(n)):new l(n)},l.quadraticFromPoints=function(t,r,e,i){if("undefined"==typeof i&&(i=.5),0===i)return new l(r,r,e);if(1===i)return new l(t,r,r);var o=n(2,t,r,e,i);return new l(t,o.A,e)},l.cubicFromPoints=function(t,r,e,i,o){"undefined"==typeof i&&(i=.5);var s=n(3,t,r,e,i);"undefined"==typeof o&&(o=c.dist(r,s.C));var u=o*(1-i)/i,a=c.dist(t,e),f=(e.x-t.x)/a,h=(e.y-t.y)/a,p=o*f,x=o*h,y=u*f,d=u*h,v={x:r.x-p,y:r.y-x},m={x:r.x+y,y:r.y+d},g=s.A,z={x:g.x+(v.x-g.x)/(1-i),y:g.y+(v.y-g.y)/(1-i)},b={x:g.x+(m.x-g.x)/i,y:g.y+(m.y-g.y)/i},_={x:t.x+(z.x-t.x)/i,y:t.y+(z.y-t.y)/i},w={x:e.x+(b.x-e.x)/(1-i),y:e.y+(b.y-e.y)/(1-i)};return new l(t,_,w,e)};var x=function(){return c};l.getUtils=x,l.prototype={getUtils:x,valueOf:function(){return this.toString()},toString:function(){return c.pointsToString(this.points)},toSVG:function(t){if(this._3d)return!1;for(var n=this.points,r=n[0].x,e=n[0].y,i=["M",r,e,2===this.order?"Q":"C"],o=1,s=n.length;o<s;o++)i.push(n[o].x),i.push(n[o].y);return i.join(" ")},update:function(){this.dpoints=[];for(var t=this.points,n=t.length,r=n-1;n>1;n--,r--){for(var e,i=[],o=0;o<r;o++)e={x:r*(t[o+1].x-t[o].x),y:r*(t[o+1].y-t[o].y)},this._3d&&(e.z=r*(t[o+1].z-t[o].z)),i.push(e);this.dpoints.push(i),t=i}this.computedirection()},computedirection:function(){var t=this.points,n=c.angle(t[0],t[this.order],t[1]);this.clockwise=n>0},length:function(){return c.length(this.derivative.bind(this))},_lut:[],getLUT:function(t){if(t=t||100,this._lut.length===t)return this._lut;this._lut=[];for(var n=0;n<=t;n++)this._lut.push(this.compute(n/t));return this._lut},on:function(t,n){n=n||5;for(var r,e=this.getLUT(),i=[],o=0,s=0;s<e.length;s++)r=e[s],c.dist(r,t)<n&&(i.push(r),o+=s/e.length);return!!i.length&&(o/=i.length)},project:function(t){var n=this.getLUT(),r=n.length-1,e=c.closest(n,t),i=e.mdist,o=e.mpos;if(0===o||o===r){var s=o/r,u=this.compute(s);return u.t=s,u.d=i,u}var a,s,f,h,p=(o-1)/r,l=(o+1)/r,x=.1/r;for(i+=1,s=p,a=s;s<l+x;s+=x)f=this.compute(s),h=c.dist(t,f),h<i&&(i=h,a=s);return f=this.compute(a),f.t=a,f.d=i,f},get:function(t){return this.compute(t)},point:function(t){return this.points[t]},compute:function(t){if(0===t)return this.points[0];if(1===t)return this.points[this.order];var n=this.points,r=1-t;if(1===this.order)return f={x:r*n[0].x+t*n[1].x,y:r*n[0].y+t*n[1].y},this._3d&&(f.z=r*n[0].z+t*n[1].z),f;if(this.order<4){var e,i,o,s=r*r,u=t*t,a=0;2===this.order?(n=[n[0],n[1],n[2],h],e=s,i=r*t*2,o=u):3===this.order&&(e=s*r,i=s*t*3,o=r*u*3,a=t*u);var f={x:e*n[0].x+i*n[1].x+o*n[2].x+a*n[3].x,y:e*n[0].y+i*n[1].y+o*n[2].y+a*n[3].y};return this._3d&&(f.z=e*n[0].z+i*n[1].z+o*n[2].z+a*n[3].z),f}for(var c=JSON.parse(JSON.stringify(this.points));c.length>1;){for(var p=0;p<c.length-1;p++)c[p]={x:c[p].x+(c[p+1].x-c[p].x)*t,y:c[p].y+(c[p+1].y-c[p].y)*t},"undefined"!=typeof c[p].z&&(c[p]=c[p].z+(c[p+1].z-c[p].z)*t);c.splice(c.length-1,1)}return c[0]},raise:function(){for(var t,n,r,e=this.points,i=[e[0]],o=e.length,t=1;t<o;t++)n=e[t],r=e[t-1],i[t]={x:(o-t)/o*n.x+t/o*r.x,y:(o-t)/o*n.y+t/o*r.y};return i[o]=e[o-1],new l(i)},derivative:function(t){var n,r,e=1-t,i=0,o=this.dpoints[0];2===this.order&&(o=[o[0],o[1],h],n=e,r=t),3===this.order&&(n=e*e,r=e*t*2,i=t*t);var s={x:n*o[0].x+r*o[1].x+i*o[2].x,y:n*o[0].y+r*o[1].y+i*o[2].y};return this._3d&&(s.z=n*o[0].z+r*o[1].z+i*o[2].z),s},inflections:function(){return c.inflections(this.points)},normal:function(t){return this._3d?this.__normal3(t):this.__normal2(t)},__normal2:function(t){var n=this.derivative(t),r=a(n.x*n.x+n.y*n.y);return{x:-n.y/r,y:n.x/r}},__normal3:function(t){var n=this.derivative(t),r=this.derivative(t+.01),e=a(n.x*n.x+n.y*n.y+n.z*n.z),i=a(r.x*r.x+r.y*r.y+r.z*r.z);n.x/=e,n.y/=e,n.z/=e,r.x/=i,r.y/=i,r.z/=i;var o={x:r.y*n.z-r.z*n.y,y:r.z*n.x-r.x*n.z,z:r.x*n.y-r.y*n.x},s=a(o.x*o.x+o.y*o.y+o.z*o.z);o.x/=s,o.y/=s,o.z/=s;var u=[o.x*o.x,o.x*o.y-o.z,o.x*o.z+o.y,o.x*o.y+o.z,o.y*o.y,o.y*o.z-o.x,o.x*o.z-o.y,o.y*o.z+o.x,o.z*o.z],f={x:u[0]*n.x+u[1]*n.y+u[2]*n.z,y:u[3]*n.x+u[4]*n.y+u[5]*n.z,z:u[6]*n.x+u[7]*n.y+u[8]*n.z};return f},hull:function(t){var n,r=this.points,e=[],i=[],o=0,s=0,u=0;for(i[o++]=r[0],i[o++]=r[1],i[o++]=r[2],3===this.order&&(i[o++]=r[3]);r.length>1;){for(e=[],s=0,u=r.length-1;s<u;s++)n=c.lerp(t,r[s],r[s+1]),i[o++]=n,e.push(n);r=e}return i},split:function(t,n){if(0===t&&n)return this.split(n).left;if(1===n)return this.split(t).right;var r=this.hull(t),e={left:new l(2===this.order?[r[0],r[3],r[5]]:[r[0],r[4],r[7],r[9]]),right:new l(2===this.order?[r[5],r[4],r[2]]:[r[9],r[8],r[6],r[3]]),span:r};if(e.left._t1=c.map(0,0,1,this._t1,this._t2),e.left._t2=c.map(t,0,1,this._t1,this._t2),e.right._t1=c.map(t,0,1,this._t1,this._t2),e.right._t2=c.map(1,0,1,this._t1,this._t2),!n)return e;n=c.map(n,t,1,0,1);var i=e.right.split(n);return i.left},extrema:function(){var t,n,r=this.dims,e={},i=[];return r.forEach(function(r){n=function(t){return t[r]},t=this.dpoints[0].map(n),e[r]=c.droots(t),3===this.order&&(t=this.dpoints[1].map(n),e[r]=e[r].concat(c.droots(t))),e[r]=e[r].filter(function(t){return t>=0&&t<=1}),i=i.concat(e[r].sort())}.bind(this)),i=i.sort().filter(function(t,n){return i.indexOf(t)===n}),e.values=i,e},bbox:function(){var t=this.extrema(),n={};return this.dims.forEach(function(r){n[r]=c.getminmax(this,r,t[r])}.bind(this)),n},overlaps:function(t){var n=this.bbox(),r=t.bbox();return c.bboxoverlap(n,r)},offset:function(t,n){if("undefined"!=typeof n){var r=this.get(t),e=this.normal(t),i={c:r,n:e,x:r.x+e.x*n,y:r.y+e.y*n};return this._3d&&(i.z=r.z+e.z*n),i}if(this._linear){var o=this.normal(0),s=this.points.map(function(n){var r={x:n.x+t*o.x,y:n.y+t*o.y};return n.z&&e.z&&(r.z=n.z+t*o.z),r});return[new l(s)]}var u=this.reduce();return u.map(function(n){return n.scale(t)})},simple:function(){if(3===this.order){var t=c.angle(this.points[0],this.points[3],this.points[1]),n=c.angle(this.points[0],this.points[3],this.points[2]);if(t>0&&n<0||t<0&&n>0)return!1}var r=this.normal(0),e=this.normal(1),o=r.x*e.x+r.y*e.y;this._3d&&(o+=r.z*e.z);var s=i(u(o));return s<f/3},reduce:function(){var t,n,r=0,e=0,o=.01,s=[],u=[],a=this.extrema().values;for(a.indexOf(0)===-1&&(a=[0].concat(a)),a.indexOf(1)===-1&&a.push(1),r=a[0],t=1;t<a.length;t++)e=a[t],n=this.split(r,e),n._t1=r,n._t2=e,s.push(n),r=e;return s.forEach(function(t){for(r=0,e=0;e<=1;)for(e=r+o;e<=1+o;e+=o)if(n=t.split(r,e),!n.simple()){if(e-=o,i(r-e)<o)return[];n=t.split(r,e),n._t1=c.map(r,0,1,t._t1,t._t2),n._t2=c.map(e,0,1,t._t1,t._t2),u.push(n),r=e;break}r<1&&(n=t.split(r,1),n._t1=c.map(r,0,1,t._t1,t._t2),n._t2=t._t2,u.push(n))}),u},scale:function(t){var n=this.order,r=!1;if("function"==typeof t&&(r=t),r&&2===n)return this.raise().scale(r);var e=this.clockwise,i=r?r(0):t,o=r?r(1):t,s=[this.offset(0,10),this.offset(1,10)],u=c.lli4(s[0],s[0].c,s[1],s[1].c);if(!u)throw new Error("cannot scale this curve. Try reducing it first.");var f=this.points,h=[];return[0,1].forEach(function(t){var r=h[t*n]=c.copy(f[t*n]);r.x+=(t?o:i)*s[t].n.x,r.y+=(t?o:i)*s[t].n.y}.bind(this)),r?([0,1].forEach(function(i){if(2!==this.order||!i){var o=f[i+1],s={x:o.x-u.x,y:o.y-u.y},c=r?r((i+1)/n):t;r&&!e&&(c=-c);var p=a(s.x*s.x+s.y*s.y);s.x/=p,s.y/=p,h[i+1]={x:o.x+c*s.x,y:o.y+c*s.y}}}.bind(this)),new l(h)):([0,1].forEach(function(t){if(2!==this.order||!t){var r=h[t*n],e=this.derivative(t),i={x:r.x+e.x,y:r.y+e.y};h[t+1]=c.lli4(r,i,u,f[t+1])}}.bind(this)),new l(h))},outline:function(t,n,r,e){function i(t,n,r,e,i){return function(o){var s=e/r,u=(e+i)/r,a=n-t;return c.map(o,0,1,t+s*a,t+u*a)}}n="undefined"==typeof n?t:n;var o,s=this.reduce(),u=s.length,a=[],f=[],h=0,l=this.length(),x="undefined"!=typeof r&&"undefined"!=typeof e;s.forEach(function(o){_=o.length(),x?(a.push(o.scale(i(t,r,l,h,_))),f.push(o.scale(i(-n,-e,l,h,_)))):(a.push(o.scale(t)),f.push(o.scale(-n))),h+=_}),f=f.map(function(t){return o=t.points,o[3]?t.points=[o[3],o[2],o[1],o[0]]:t.points=[o[2],o[1],o[0]],t}).reverse();var y=a[0].points[0],d=a[u-1].points[a[u-1].points.length-1],v=f[u-1].points[f[u-1].points.length-1],m=f[0].points[0],g=c.makeline(v,y),z=c.makeline(d,m),b=[g].concat(a).concat([z]).concat(f),_=b.length;return new p(b)},outlineshapes:function(t,n,r){n=n||t;for(var e=this.outline(t,n).curves,i=[],o=1,s=e.length;o<s/2;o++){var u=c.makeshape(e[o],e[s-o],r);u.startcap.virtual=o>1,u.endcap.virtual=o<s/2-1,i.push(u)}return i},intersects:function(t,n){return t?t.p1&&t.p2?this.lineIntersects(t):(t instanceof l&&(t=t.reduce()),this.curveintersects(this.reduce(),t,n)):this.selfintersects(n)},lineIntersects:function(t){var n=o(t.p1.x,t.p2.x),r=o(t.p1.y,t.p2.y),e=s(t.p1.x,t.p2.x),i=s(t.p1.y,t.p2.y),u=this;return c.roots(this.points,t).filter(function(t){var o=u.get(t);return c.between(o.x,n,e)&&c.between(o.y,r,i)})},selfintersects:function(t){var n,r,e,i,o=this.reduce(),s=o.length-2,u=[];for(n=0;n<s;n++)e=o.slice(n,n+1),i=o.slice(n+2),r=this.curveintersects(e,i,t),u=u.concat(r);return u},curveintersects:function(t,n,r){var e=[];t.forEach(function(t){n.forEach(function(n){t.overlaps(n)&&e.push({left:t,right:n})})});var i=[];return e.forEach(function(t){var n=c.pairiteration(t.left,t.right,r);n.length>0&&(i=i.concat(n))}),i},arcs:function(t){t=t||.5;var n=[];return this._iterate(t,n)},_error:function(t,n,r,e){var o=(e-r)/4,s=this.get(r+o),u=this.get(e-o),a=c.dist(t,n),f=c.dist(t,s),h=c.dist(t,u);return i(f-a)+i(h-a)},_iterate:function(t,n){var r,e=0,i=1;do{r=0,i=1;var o,s,u,a,f,h=this.get(e),p=!1,l=!1,x=i,y=1,d=0;do{l=p,a=u,x=(e+i)/2,d++,o=this.get(x),s=this.get(i),u=c.getccenter(h,o,s),u.interval={start:e,end:i};var v=this._error(u,h,e,i);if(p=v<=t,f=l&&!p,f||(y=i),p){if(i>=1){y=1,a=u;break}i+=(i-e)/2}else i=x}while(!f&&r++<100);if(r>=100){console.error("arc abstraction somehow failed...");break}a=a?a:u,n.push(a),e=y}while(i<1);return n}},t.exports=l}()},function(t,n,r){"use strict";!function(){var n=Math.abs,e=Math.cos,i=Math.sin,o=Math.acos,s=Math.atan2,u=Math.sqrt,a=Math.pow,f=function(t){return t<0?-a(-t,1/3):a(t,1/3)},h=Math.PI,c=2*h,p=h/2,l=1e-6,x={Tvalues:[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213],Cvalues:[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872],arcfn:function(t,n){var r=n(t),e=r.x*r.x+r.y*r.y;return"undefined"!=typeof r.z&&(e+=r.z*r.z),u(e)},between:function(t,n,r){return n<=t&&t<=r||x.approximately(t,n)||x.approximately(t,r)},approximately:function(t,r,e){return n(t-r)<=(e||l)},length:function(t){var n,r,e=.5,i=0,o=x.Tvalues.length;for(n=0;n<o;n++)r=e*x.Tvalues[n]+e,i+=x.Cvalues[n]*x.arcfn(r,t);return e*i},map:function(t,n,r,e,i){var o=r-n,s=i-e,u=t-n,a=u/o;return e+s*a},lerp:function(t,n,r){var e={x:n.x+t*(r.x-n.x),y:n.y+t*(r.y-n.y)};return n.z&&r.z&&(e.z=n.z+t*(r.z-n.z)),e},pointToString:function(t){var n=t.x+"/"+t.y;return"undefined"!=typeof t.z&&(n+="/"+t.z),n},pointsToString:function(t){return"["+t.map(x.pointToString).join(", ")+"]"},copy:function(t){return JSON.parse(JSON.stringify(t))},angle:function(t,n,r){var e,i=n.x-t.x,o=n.y-t.y,a=r.x-t.x,f=r.y-t.y,h=i*f-o*a,c=u(i*i+o*o),p=u(a*a+f*f);return i/=c,o/=c,a/=p,f/=p,e=i*a+o*f,s(h,e)},round:function(t,n){var r=""+t,e=r.indexOf(".");return parseFloat(r.substring(0,e+1+n))},dist:function(t,n){var r=t.x-n.x,e=t.y-n.y;return u(r*r+e*e)},closest:function(t,n){var r,e,i=a(2,63);return t.forEach(function(t,o){e=x.dist(n,t),e<i&&(i=e,r=o)}),{mdist:i,mpos:r}},abcratio:function(t,r){if(2!==r&&3!==r)return!1;if("undefined"==typeof t)t=.5;else if(0===t||1===t)return t;var e=a(t,r)+a(1-t,r),i=e-1;return n(i/e)},projectionratio:function(t,n){if(2!==n&&3!==n)return!1;if("undefined"==typeof t)t=.5;else if(0===t||1===t)return t;var r=a(1-t,n),e=a(t,n)+r;return r/e},lli8:function(t,n,r,e,i,o,s,u){var a=(t*e-n*r)*(i-s)-(t-r)*(i*u-o*s),f=(t*e-n*r)*(o-u)-(n-e)*(i*u-o*s),h=(t-r)*(o-u)-(n-e)*(i-s);return 0!=h&&{x:a/h,y:f/h}},lli4:function(t,n,r,e){var i=t.x,o=t.y,s=n.x,u=n.y,a=r.x,f=r.y,h=e.x,c=e.y;return x.lli8(i,o,s,u,a,f,h,c)},lli:function(t,n){return x.lli4(t,t.c,n,n.c)},makeline:function(t,n){var e=r(4),i=t.x,o=t.y,s=n.x,u=n.y,a=(s-i)/3,f=(u-o)/3;return new e(i,o,i+a,o+f,i+2*a,o+2*f,s,u)},findbbox:function(t){var n=99999999,r=n,e=-n,i=e;return t.forEach(function(t){var o=t.bbox();n>o.x.min&&(n=o.x.min),r>o.y.min&&(r=o.y.min),e<o.x.max&&(e=o.x.max),i<o.y.max&&(i=o.y.max)}),{x:{min:n,mid:(n+e)/2,max:e,size:e-n},y:{min:r,mid:(r+i)/2,max:i,size:i-r}}},shapeintersections:function(t,n,r,e,i){if(!x.bboxoverlap(n,e))return[];var o=[],s=[t.startcap,t.forward,t.back,t.endcap],u=[r.startcap,r.forward,r.back,r.endcap];return s.forEach(function(n){n.virtual||u.forEach(function(e){if(!e.virtual){var s=n.intersects(e,i);s.length>0&&(s.c1=n,s.c2=e,s.s1=t,s.s2=r,o.push(s))}})}),o},makeshape:function(t,n,r){var e=n.points.length,i=t.points.length,o=x.makeline(n.points[e-1],t.points[0]),s=x.makeline(t.points[i-1],n.points[0]),u={startcap:o,forward:t,back:n,endcap:s,bbox:x.findbbox([o,t,n,s])},a=x;return u.intersections=function(t){return a.shapeintersections(u,u.bbox,t,t.bbox,r)},u},getminmax:function(t,n,r){if(!r)return{min:0,max:0};var e,i,o=0x10000000000000000,s=-o;r.indexOf(0)===-1&&(r=[0].concat(r)),r.indexOf(1)===-1&&r.push(1);for(var u=0,a=r.length;u<a;u++)e=r[u],i=t.get(e),i[n]<o&&(o=i[n]),i[n]>s&&(s=i[n]);return{min:o,mid:(o+s)/2,max:s,size:s-o}},align:function(t,n){var r=n.p1.x,o=n.p1.y,u=-s(n.p2.y-o,n.p2.x-r),a=function(t){return{x:(t.x-r)*e(u)-(t.y-o)*i(u),y:(t.x-r)*i(u)+(t.y-o)*e(u)}};return t.map(a)},roots:function(t,n){n=n||{p1:{x:0,y:0},p2:{x:1,y:0}};var r=t.length-1,i=x.align(t,n),s=function(t){return 0<=t&&t<=1};if(2===r){var a=i[0].y,h=i[1].y,p=i[2].y,l=a-2*h+p;if(0!==l){var y=-u(h*h-a*p),d=-a+h,v=-(y+d)/l,m=-(-y+d)/l;return[v,m].filter(s)}return h!==p&&0===l?[(2*h-p)/2*(h-p)].filter(s):[]}var g,v,z,b,_,w=i[0].y,M=i[1].y,E=i[2].y,S=i[3].y,l=-w+3*M-3*E+S,a=(3*w-6*M+3*E)/l,h=(-3*w+3*M)/l,p=w/l,i=(3*h-a*a)/3,O=i/3,k=(2*a*a*a-9*a*h+27*p)/27,T=k/2,q=T*T+O*O*O;if(q<0){var j=-i/3,P=j*j*j,C=u(P),L=-k/(2*C),N=L<-1?-1:L>1?1:L,U=o(N),A=f(C),F=2*A;return z=F*e(U/3)-a/3,b=F*e((U+c)/3)-a/3,_=F*e((U+2*c)/3)-a/3,[z,b,_].filter(s)}if(0===q)return g=T<0?f(-T):-f(T),z=2*g-a/3,b=-g-a/3,[z,b].filter(s);var I=u(q);return g=f(-T+I),v=f(T+I),[g-v-a/3].filter(s)},droots:function(t){if(3===t.length){var n=t[0],r=t[1],e=t[2],i=n-2*r+e;if(0!==i){var o=-u(r*r-n*e),s=-n+r,a=-(o+s)/i,f=-(-o+s)/i;return[a,f]}return r!==e&&0===i?[(2*r-e)/(2*(r-e))]:[]}if(2===t.length){var n=t[0],r=t[1];return n!==r?[n/(n-r)]:[]}},inflections:function(t){if(t.length<4)return[];var n=x.align(t,{p1:t[0],p2:t.slice(-1)[0]}),r=n[2].x*n[1].y,e=n[3].x*n[1].y,i=n[1].x*n[2].y,o=n[3].x*n[2].y,s=18*(-3*r+2*e+3*i-o),u=18*(3*r-e-3*i),a=18*(i-r);if(x.approximately(s,0))return[];var f=u*u-4*s*a,h=Math.sqrt(f),o=2*s;return x.approximately(o,0)?[]:[(h-u)/o,-(u+h)/o].filter(function(t){return 0<=t&&t<=1})},bboxoverlap:function(t,r){var e,i,o,s,u,a=["x","y"],f=a.length;for(e=0;e<f;e++)if(i=a[e],o=t[i].mid,s=r[i].mid,u=(t[i].size+r[i].size)/2,n(o-s)>=u)return!1;return!0},expandbox:function(t,n){n.x.min<t.x.min&&(t.x.min=n.x.min),n.y.min<t.y.min&&(t.y.min=n.y.min),n.z&&n.z.min<t.z.min&&(t.z.min=n.z.min),n.x.max>t.x.max&&(t.x.max=n.x.max),n.y.max>t.y.max&&(t.y.max=n.y.max),n.z&&n.z.max>t.z.max&&(t.z.max=n.z.max),t.x.mid=(t.x.min+t.x.max)/2,t.y.mid=(t.y.min+t.y.max)/2,t.z&&(t.z.mid=(t.z.min+t.z.max)/2),t.x.size=t.x.max-t.x.min,t.y.size=t.y.max-t.y.min,t.z&&(t.z.size=t.z.max-t.z.min)},pairiteration:function(t,n,r){var e=t.bbox(),i=n.bbox(),o=1e5,s=r||.5;if(e.x.size+e.y.size<s&&i.x.size+i.y.size<s)return[(o*(t._t1+t._t2)/2|0)/o+"/"+(o*(n._t1+n._t2)/2|0)/o];var u=t.split(.5),a=n.split(.5),f=[{left:u.left,right:a.left},{left:u.left,right:a.right},{left:u.right,right:a.right},{left:u.right,right:a.left}];f=f.filter(function(t){return x.bboxoverlap(t.left.bbox(),t.right.bbox())});var h=[];return 0===f.length?h:(f.forEach(function(t){h=h.concat(x.pairiteration(t.left,t.right,s))}),h=h.filter(function(t,n){return h.indexOf(t)===n}))},getccenter:function(t,n,r){var o,u=n.x-t.x,a=n.y-t.y,f=r.x-n.x,h=r.y-n.y,l=u*e(p)-a*i(p),y=u*i(p)+a*e(p),d=f*e(p)-h*i(p),v=f*i(p)+h*e(p),m=(t.x+n.x)/2,g=(t.y+n.y)/2,z=(n.x+r.x)/2,b=(n.y+r.y)/2,_=m+l,w=g+y,M=z+d,E=b+v,S=x.lli8(m,g,_,w,z,b,M,E),O=x.dist(S,t),k=s(t.y-S.y,t.x-S.x),T=s(n.y-S.y,n.x-S.x),q=s(r.y-S.y,r.x-S.x);return k<q?((k>T||T>q)&&(k+=c),k>q&&(o=q,q=k,k=o)):q<T&&T<k?(o=q,q=k,k=o):q+=c,S.s=k,S.e=q,S.r=O,S}};t.exports=x}()},function(t,n,r){"use strict";!function(){var n=r(5),e=function(t){this.curves=[],this._3d=!1,t&&(this.curves=t,this._3d=this.curves[0]._3d)};e.prototype={valueOf:function(){return this.toString()},toString:function(){return n.pointsToString(this.points)},addCurve:function(t){this.curves.push(t),this._3d=this._3d||t._3d},length:function(){return this.curves.map(function(t){return t.length()}).reduce(function(t,n){return t+n})},curve:function(t){return this.curves[t]},bbox:function t(){for(var r=this.curves,t=r[0].bbox(),e=1;e<r.length;e++)n.expandbox(t,r[e].bbox());return t},offset:function t(n){var t=[];return this.curves.forEach(function(r){t=t.concat(r.offset(n))}),new e(t)}},t.exports=e}()}])});