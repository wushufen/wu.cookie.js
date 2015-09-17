/*by wushufen
wusfun@foxmail.com
https://github.com/wusfen/cookie.js*/
function cookie(a,b,c){if(c=c||{},null===b&&(c.expires=-1),null===a)for(i in cookie())cookie(i,null);if(void 0!==b){if(c.expires){var d=new Date;d.setTime(d.getTime()+c.expires)}document.cookie=[a+"="+escape(b),c.expires?";expires="+d.toUTCString():"",c.path?";path="+c.path:"",c.domain?";domain="+c.domain:"",c.secure?";secure":""].join("")}var e={},f=document.cookie?document.cookie.split("; "):[];for(i in f){var g=f[i].split("="),h=g[0],j=g[1];e[h]=unescape(j)}return a?e[a]:e}
