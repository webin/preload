var Preload=function(e){"use strict";var t,n,r=e.sources||null,a=e.connector||null,u=e.progress||function(){},o=0,i=0,l=0,c=0,s=[],f=[],h=[],g=["jpg","png","gif"],t={xhr:null,timeOut:e.loadingOverTime||15,timeOutCB:e.loadingOverTimeCB||function(){},id:0,max:3},p=document.getElementsByTagName("head")[0],d=[],m=[],x=function(){X(),null!=a&&y(),b(s[0],f[0],h)},v=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject){if("string"!=typeof arguments.callee.activeXString){var e,t,n=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];for(e=0,t=n.length;t>e;e++)try{new ActiveXObject(n[e]),arguments.callee.activeXString=n[e];break}catch(r){}}return new ActiveXObject(arguments.callee.activeXString)}throw new Error("No XHR object available.")}(),X=function(){if(null!==r){n=Object.getOwnPropertyNames(r).length;for(var e in r){for(var t=0,a=r[e].source.length;a>t;t++)s.push(r[e].source[t]);h.push(r[e].source.length),f.push("undefined"==typeof r[e].callback?null:r[e].callback)}for(var e=1,a=h.length;a>e;e++)h[e]=h[e-1]+h[e];i=s.length,d=document.getElementsByTagName("img");for(var e=0,a=d.length;a>e;e++)d[e].attributes.pSrc&&(m[e]=d[e].attributes.pSrc.value)}},b=function(e,r,a){if(l>=a[c]&&(null!=f[c]&&f[c](),++c),!(c>=n))if(M(e)){var h=new Image,g=setTimeout(function(){t.timeOutCB()},1e3*t.timeOut);h.src=e,h.onload=function(){clearTimeout(g),u(++o,i);for(var t=0,n=m.length;n>t;t++)if(m[t]==e){d[t].src=m[t];break}b(s[++l],r,a)},h.onerror=function(){u(++o,i),b(s[++l],r,a)}}else t.xhr=v,t.xhr.onreadystatechange=function(){4==t.xhr.readyState?(t.xhr.status>=200&&t.xhr.status<300||304===t.xhr.status)&&(u(++o,i),b(s[++l],r,a)):t.xhr.status>=400&&t.xhr.status<500&&(u(++o,i),b(s[++l],r,a))},t.xhr.open("GET",e,!0),t.xhr.send(null)},y=function(){for(var e in a)a[e].jsonp?S(a[e].url):O(a[e].url,a[e].callback)},M=function(e){for(var t=e.split(".").pop(),n=0,r=g.length;r>n;n++)if(t==g[n])return!0;return!1},O=function(e,n){t.xhr=v,t.xhr.onreadystatechange=function(){4==t.xhr.readyState&&(t.xhr.status>=200&&t.xhr.status<300||304===t.xhr.status)&&n(t.xhr.responseText)},t.xhr.open("GET",e,!0),t.xhr.send(null)},S=function(e){var t=document.createElement("script");t.src=e,p.appendChild(t)};x()};"object"==typeof module?module.exports=Preload:window.Preload=Preload;