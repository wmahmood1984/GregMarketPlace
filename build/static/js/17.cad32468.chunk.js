(this["webpackJsonptravel-coin"]=this["webpackJsonptravel-coin"]||[]).push([[17],{2046:function(r,n){},2362:function(r,n,t){"use strict";t.r(n),function(r){t.d(n,"getED25519Key",(function(){return i}));var a=t(46),e=t(2045),c=t.n(e).a.lowlevel;function i(n){var t;t="string"===typeof n?r.from(n,"hex"):n;var e=new Uint8Array(64),i=[c.gf(),c.gf(),c.gf(),c.gf()],o=new Uint8Array([].concat(Object(a.a)(new Uint8Array(t)),Object(a.a)(new Uint8Array(32)))),f=new Uint8Array(32);c.crypto_hash(e,o,32),e[0]&=248,e[31]&=127,e[31]|=64,c.scalarbase(i,e),c.pack(f,i);for(var s=0;s<32;s+=1)o[s+32]=f[s];return{sk:r.from(o),pk:r.from(f)}}}.call(this,t(36).Buffer)}}]);
//# sourceMappingURL=17.cad32468.chunk.js.map