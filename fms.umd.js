!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FMS=e():t.FMS=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r;n.r(e),n.d(e,"loadAndInit",function(){return w}),n.d(e,"load",function(){return x}),n.d(e,"init",function(){return k});var C={C0:0,"C#0":1,D0:2,"D#0":3,E0:4,F0:5,"F#0":6,G0:7,"G#0":8,A0:9,"A#0":10,B0:11,C1:12,"C#1":13,D1:14,"D#1":15,E1:16,F1:17,"F#1":18,G1:19,"G#1":20,A1:21,"A#1":22,B1:23,C2:24,"C#2":25,D2:26,"D#2":27,E2:28,F2:29,"F#2":30,G2:31,"G#2":32,A2:33,"A#2":34,B2:35,C3:36,"C#3":37,D3:38,"D#3":39,E3:40,F3:41,"F#3":42,G3:43,"G#3":44,A3:45,"A#3":46,B3:47,C4:48,"C#4":49,D4:50,"D#4":51,E4:52,F4:53,"F#4":54,G4:55,"G#4":56,A4:57,"A#4":58,B4:59,C5:60,"C#5":61,D5:62,"D#5":63,E5:64,F5:65,"F#5":66,G5:67,"G#5":68,A5:69,"A#5":70,B5:71,C6:72,"C#6":73,D6:74,"D#6":75,E6:76,F6:77,"F#6":78,G6:79,"G#6":80,A6:81,"A#6":82,B6:83,C7:84,"C#7":85,D7:86,"D#7":87,E7:88,F7:89,"F#7":90,G7:91,"G#7":92,A7:93,"A#7":94,B7:95,C8:96,"C#8":97,D8:98,"D#8":99,E8:100,F8:101,"F#8":102,G8:103,"G#8":104,A8:105,"A#8":106,B8:107,C9:108},A={C:["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"],bass:["G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],G:["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],D:["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],A:["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],E:["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],B:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"F#":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"C#":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],F:["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],Bb:["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],Eb:["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],Ab:["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],Db:["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Gb:["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],Cb:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],Em:["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],Bm:["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],"F#m":["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],"C#m":["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],"G#m":["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"D#m":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"A#m":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Dm:["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],Gm:["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],Cm:["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],Fm:["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],Bbm:["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Ebm:["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],Abm:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"]},G={1:{score:64,dot:"",beat:.0625,b64:1,b16:.25},2:{score:32,dot:"",beat:.125,b64:2,b16:.5},3:{score:32,dot:"d",beat:.1875,b64:3,b16:.75},4:{score:16,dot:"",beat:.25,b64:4,b16:1},6:{score:16,dot:"d",beat:.375,b64:6,b16:1.5},7:{score:16,dot:"dd",beat:.4375,b64:7,b16:1.75},8:{score:8,dot:"",beat:.5,b64:8,b16:2},12:{score:8,dot:"d",beat:.75,b64:12,b16:3},14:{score:8,dot:"dd",beat:.875,b64:14,b16:3.5},16:{score:4,dot:"",beat:1,b64:16,b16:4},24:{score:4,dot:"d",beat:1.5,b64:24,b16:6},28:{score:4,dot:"dd",beat:1.75,b64:28,b16:7},32:{score:2,dot:"",beat:2,b64:32,b16:8},48:{score:2,dot:"d",beat:3,b64:48,b16:12},56:{score:2,dot:"dd",beat:3.5,b64:56,b16:14},64:{score:1,dot:"",beat:4,b64:64,b16:16},96:{score:1,dot:"d",beat:6,b64:96,b16:24},112:{score:1,dot:"dd",beat:7,b64:112,b16:28}},F=function(t,e){return e?t.sort(function(t,e){return C[e]-C[t]}):t.sort(function(t,e){return C[t]-C[e]})},D=function(t,e){var n=A.C.indexOf(t);return A[e][n]},a=(Object.keys(G).reduce(function(t,e){return t[G[e].score+G[e].dot]=G[e],t},{}),Object.keys(G).map(function(t){return parseInt(t)}).sort(function(t,e){return-t-e})),i=a.length,c={fillStyle:"red",strokeStyle:"red"};function u(t){if(t<=0)throw new Error("wrong param");for(var e=-1,n=[];;)if(G[t]){if(n.push(G[t].b64),-1==e)break;t=e,e=-1}else for(var o=0;o<i;o++)if(t>=a[o]){e=t-a[o],t=a[o];break}return n}var l=/^([a-gA-G])([#b]+)?([0-9])$/;var s="c5";function E(t,e){return G[t]?G[t].score+G[t].dot+(e?"r":""):null}function f(t,e,n){var o=e,r=u(n).map(function(e){var n={note:[t||s],b64:o,length:e,endB64:o+e-1,duration:E(e,!0),isRest:!0,fixedRest:!t};return o+=e,n});return r.length>1&&(r[0].tieTail=r[r.length-1],r[r.length-1].tieHead=r[0]),r}function B(t,e){var n=t.note;e&&(t.isRest&&t.fixedRest||(n=n.map(function(t){return D(t,e)})));var o=function(t){var e=[],n=[];return t.forEach(function(t){var o=t.match(l);o?(e.push(o[1]+(o[2]||"")+"/"+o[3]),n.push(o[2])):(e.push(null),n.push(null))}),{notes:e,accidentals:n}}(n),C=new r.StaveNote({keys:o.notes,duration:t.duration,auto_stem:!0});t.isRest||o.accidentals.forEach(function(t,e){t&&C.addAccidental(e,new r.Accidental(t))});for(var A=function(t,e){for(var n=0,o=0,r=t.length;o<r;o++)t[o]==e&&n++;return n}(t.duration,"d"),G=0;G<A;G++)C.addDotToAll();return C}function d(t){t._el&&t._el.parentElement&&(t._el.parentElement.removeChild(t._el),t._el=null)}function h(t){t.beam&&t.beam._el&&t.beam._el.parentElement&&(t.beam._el.parentElement.removeChild(t.beam._el),t.beam._el=null)}function p(t){t._beamStem_el&&t._beamStem_el.parentElement&&(t._beamStem_el.parentElement.removeChild(t._beamStem_el),t._beamStem_el=null)}function b(t,e){!function(t,e){d(t),t._el=t.context.openGroup("stavenote-highlight",t.getAttribute("id")),t.setStyle(e),t.context.openGroup("note",null,{pointerBBox:!1}),t.hasStem()&&!t.beam&&(t.drawStem(),t.flag&&(t.flag.setStyle(e),t.drawFlag())),t.drawNoteHeads(),t.context.closeGroup(),t.drawModifiers(),t.context.closeGroup()}(t,c),t.beam&&((e||t.beam.notes[0]===t)&&(!function(t,e){t.beam&&(h(t),t.beam._el=t.context.openGroup("beam"),t.context.setFillStyle(e.fillStyle),t.context.setStrokeStyle("none"),t.beam.drawBeamLines(),t.context.closeGroup())}(t,c),t.beam._highlighted=!0),function(t,e){t.beam&&t.hasStem()&&(p(t),t._beamStem_el=t.context.openGroup("beam-stem"),t.stem.setStyle(e),t.stem.draw(),t.context.closeGroup())}(t,c))}var m,v={};function g(t,e){(t.isOn||e&&t.staveNote.beam&&t.staveNote.beam._highlighted)&&(delete v[t.id],function(t,e){d(t),t.beam&&(p(t),(e||t.beam.notes[t.beam.notes.length-1]===t)&&(h(t),t.beam._highlighted=!1))}(t.staveNote,e),t.isOn=!1)}var y={topMargin:80,leftMargin:50,measureWidth:299,groupGap:140,partGap:70};function T(t,e){console.error("data",t);var n=function(t){return t.map(function(t,e){var n=[];t.data.forEach(function(o,r){if(o){var C,A,G,F=[[],[]];for(C in o.data)for(A in o.data[C]){G=Math.floor(parseFloat(A)/16);var D={note:C,b64:Math.round(4*(32*r+parseFloat(A))),length:Math.round(4*o.data[C][A])};D.endB64=D.b64+D.length-1,F[G].push(D)}F.forEach(function(t){t.sort(function(t,e){return t.b64-e.b64})}),n=n.concat(F)}else e<t.data.length-1&&n.push([],[])});var r=n.reduce(function(t,e){return t.concat(e)},[]);r.sort(function(t,e){return t.b64==e.b64?t.length-e.length:t.b64-e.b64});var C,A,G=[];r.forEach(function(t){for(A=0;;){G[A]||(G[A]=[]);var e=(C=G[A]).length?C[C.length-1]:null;if(null==e||t.b64>e.endB64||t.b64==e.b64&&t.length==e.length){C.push(t);break}if(++A>100){console.error("??!!");break}}}),G.forEach(function(t,e){return t.forEach(function(t){return t.voiceIndex=e})});for(var D=0;D<n.length;D++){var a=n[D];a.length?n[D]=a.reduce(function(t,e){return t[e.voiceIndex]||(t[e.voiceIndex]=[]),t[e.voiceIndex].push(e),t},[]):n[D]=[[]]}return n.forEach(function(t,e){t.forEach(function(t){var e,n,r,C;(C=t.sort(function(t,e){return t.b64==e.b64?t.length-e.length:t.b64-e.b64}).reduce(function(t,o,C){return o.b64==e&&o.length==n?r.push(o.note):(e=o.b64,n=o.length,o.note=[o.note],r=o.note,t.push(o)),t},[])).forEach(function(t){t.note.length>1&&F(t.note)}),t.length=0,t.push.apply(t,o(C))})}),n.forEach(function(t,e){var r=[t];t.forEach(function(t,o){var C=t[t.length-1];if(C){var A=64*(e+1);if(C.endB64>=A){var G,F;e==n.length-1?G=[F=[]]:(G=n[e+1])[o]?F=G[o]:(F=[],G[o]=F);var D={note:C.note,b64:A,length:C.endB64-A+1};D.endB64=D.b64+D.length-1,D.voiceIndex=C.voiceIndex,F.unshift(D),C.endB64=A-1,C.length=C.endB64-C.b64+1,C.tieTail=D,D.tieHead=C,e==n.length-1&&(n.push(G),r.push(G))}}}),r.forEach(function(t){t.forEach(function(t){var e=t.reduce(function(t,e){var n=e.b64,o=u(e.length).map(function(t,o,r){var C=Object.assign({},e);return delete C.tieTail,delete C.tieHead,C.b64=n,C.length=t,C.endB64=C.b64+C.length-1,n+=t,C});return e.tieHead?(e.tieHead.tieTail=o[o.length-1],o[o.length-1].tieHead=e.tieHead):e.tieTail?(o[0].tieTail=e.tieTail,e.tieTail.tieHead=o[0]):o.length>1&&(o[0].tieTail=o[o.length-1],o[o.length-1].tieHead=o[0]),t.concat(o)},[]);t.length=0,t.push.apply(t,o(e))})})}),n.forEach(function(t,e){var n=1==t.length;t.forEach(function(t){var r,C,A,G=64*e,F=G+64;r=t.reduce(function(t,e,r){return e.b64-G>0&&t.push.apply(t,o(f(n?null:e.note[0],G,e.b64-G))),e.duration=E(e.length),t.push(e),G=e.endB64+1,t},[]),G<F&&(r.length?(C=r).push.apply(C,o(f(n?null:r[r.length-1].note[0],G,F-G))):(A=r).push.apply(A,o(f(null,64*e,64)))),t.length=0,t.push.apply(t,o(r))})}),n})}(t.data);(e=Object.assign({},y,e)).bpm=t.bpm,e.noteC=2*t.nodeLength,e.trackLength=t.data.length;var C=function(t,e){var n=e.startBarNum,o=e.partGap,C=(e.noteC,e.bpm),A=(e.trackLength,e.topMargin),G=e.leftMargin,F=e.measureWidth,D=e.groupGap;n=n||1;for(var a=document.rootElement;a.firstChild;)a.removeChild(a.firstChild);var i=new r.Renderer(a,"CANVAS"==a.tagName?r.Renderer.Backends.CANVAS:r.Renderer.Backends.SVG),c=[],u=i.getContext();u.setFont("Arial",10,"").setBackgroundFillStyle("#eed"),t.forEach(function(t,e){t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){t.staveNote=B(t,c[e])})})})});var l=0,s=t[0].length,E=t.length,f=[],d=[],h=[];i.resize(4*F+G+20,Math.ceil(s/4)*(E*D+o)+A),t=t.map(function(t,e){var a=[],i=[];t=t.map(function(t){return t.length>l&&(l=t.length),t.map(function(t){var e=t.map(function(t){return t.tieTail&&i.push(new r.StaveTie({first_note:t.staveNote,last_note:t.tieTail.staveNote,first_indices:[0],last_indices:[0]})),t.staveNote});return new r.Voice({num_beats:4,beat_value:4}).addTickables(e).setMode(r.Voice.Mode.SOFT)})});for(var c=function(i){var c=t[i]||[new r.Voice({num_beats:4,beat_value:4}).addTickables([new r.StaveNote({keys:["a/4"],duration:"1r"})])],l=new r.Stave(i%4*F+G,Math.floor(i/4)*(E*D+o)+e*D+A,F);a.push(l),i%4==0&&(e%2==0?l.addClef("treble"):l.addClef("bass"),l.addKeySignature("C"),0==i&&l.addTimeSignature("4/4"),0==e&&(l.setText(i+n,r.StaveModifier.Position.LEFT,{shift_x:-15,shift_y:-40}),l._isStartMeasure=!0)),0==e&&0==i&&l.setTempo({duration:"4",bpm:C},-20),l.setContext(u).draw(),c.forEach(function(t){f.push(r.Beam.applyAndGetBeams(t))}),(new r.Formatter).joinVoices(c).formatToStave(c,l),c.forEach(function(t,e){t.draw(u,l)})},B=0;B<s;B++)c(B);return i.forEach(function(t){return t.setContext(u).draw()}),d.push(a),h.push(i),t});var p=[];if(E>1)for(var b=0;b<s;b+=4){var m=new r.StaveConnector(d[0][b],d[E-1][b]);m.setType(r.StaveConnector.type.BRACE),m.setContext(u).draw()}return f.forEach(function(t){return t.forEach(function(t){return t.setContext(u).draw()})}),{renderer:i,context:u,stavesList:d,connectorList:p,tiesList:h,beamsList:f,voiceList:t,redraw:function(){var e,n;for(u.clear(),e=0;e<d.length;e++)for(n=0;n<d[e].length;n++)d[e][n].draw();for(e=0;e<p.length;e++)for(n=0;n<p[e].length;n++)p[e][n].draw();for(t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){return t.draw(u)})})}),e=0;e<h.length;e++)for(n=0;n<h[e].length;n++)h[e][n].draw();for(e=0;e<f.length;e++)for(n=0;n<f[e].length;n++)f[e][n].draw()}}}(n,e).context;m=Tone.Time("64n").toSeconds();var A=function(t){var e,n,o=!!(t=t||{}).scrollContainer,r=new Tone.Part(function(C,A){Tone.Draw.schedule(function(){if(!r._stopped){if(e){if(e!==A)return;e=null,function(){for(var t in v)v[t].isOn&&g(v[t],!0),delete v[t]}()}!function(t){if(!t.isOn){for(var e in v)v[e].endB64<t.b64&&(v[e].isOn&&g(v[e],!0),delete v[e]);v[t.id]=t;try{b(t.staveNote),t.isOn=!0}catch(e){console.error(t,e)}}}(A),o&&A.staveNote.stave&&A.staveNote.stave._isStartMeasure&&n!=A.staveNote.stave&&(C=t.scrollContainer,G=A.staveNote.stave.y,(C.scrollTop>G-_||C.scrollTop<=G-_-(window.innerHeight-500))&&C.scrollTo(0,G-_),n=A.staveNote.stave)}var C,G},C)});r._stopped=!0;var C=new Tone.Part(function(t,e){Tone.Draw.schedule(function(){r._stopped||g(e)},t)}),A=[];return{notes:A,part:r,offPart:C,start:function(){e=this.part.at(0).value,this.part._stopped=!1,this.part.start("+0.1"),this.offPart.start("+0.1")},stop:function(){e=null,this.part._stopped=!0,this.part.stop(),this.offPart.stop(),Tone.Draw.cancel(),this.clear()},clear:function(){A.forEach(function(t){return g(t,!0)})},setLineList:function(t){r.removeAll(),C.removeAll(),t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){r.add(t.b64*m,t),C.add(t.endB64*m,t),t.id=""+Date.now()+Math.round(1e4*Math.random()),A.push(t),A[t.id]=t})})})})},setContext:function(t){this.ctx=t}}}({scrollContainer:e.scroll?document.rootElement:null});return A.setContext(C),A.setLineList(n),A}var _=0;function w(t,e){console.error("loadAndInit",j),x(t,function(){k(e)})}function x(t,e){t.load(["https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js","https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.10/Tone.min.js","https://cdnjs.cloudflare.com/ajax/libs/vexflow/1.2.89/vexflow-min.js","https://cdn.jsdelivr.net/npm/soundfont-player@0.11.0/dist/soundfont-player.min.js"],function(t){O("스크립트 로딩("+t+")")},e)}var S,j="0.12",M="http://www.w3.org/2000/svg";function N(t,e){var n=document.createElementNS(M,t);for(var o in e)n.setAttribute(o,e[o]);return document.rootElement.appendChild(n),n}function O(t){S||(S=N("text",{x:100,y:18,fill:"#000"})),setTimeout(function(){console.info("progress:",t),S.textContent="v"+j+" "+t})}function k(t){var e,n,o,C,A,G,F,D;function a(t,n){t.notes.forEach(function(o,r){e.play(o,n,t.durations[r])})}function i(){F&&(A&&(A.style.fill="rgb(53, 236, 31)"),console.error("stop"),G.stop(),C.forEach(function(t){return t.stop()}),Tone.Transport.stop(),Tone.Transport.clear(D))}function c(){F&&("started"==Tone.Transport.state?i():(i(),console.error("play"),A&&(A.style.fill="rgb(238, 51, 25)"),C.forEach(function(t){t.start("+0.1")}),G.start(),D=Tone.Transport.schedule(function(t){i()},"+"+(o+.5)),Tone.Transport.start("+0.5")))}r=Vex.Flow,console.error("start tone setting"),Tone.Transport.bpm.value=t.bpm,O("악기 로딩중..."),Soundfont.instrument(Tone.context._context,"acoustic_grand_piano").then(function(r){console.error("instrument loaded"),e=r,O("악보 변환중..."),G=T(t,{scroll:!0}),document.rootElement.appendChild(S),console.error("ready"),O("재생 데이터 변환중..."),n=function(t){var e=Tone.Time("16n").toSeconds();return t.data.map(function(t){var n=[];return t.data.forEach(function(t,o){if(t){var r,C=[],A=32*o*e,G=t.data;for(var F in G)for(var D in G[F])parseFloat(D)>=32||(null==C[D]&&(C[D]=[[],[]]),C[D][0].push(F),C[D][1].push(G[F][D]));for(var a in C)C[a]&&((r={beat:parseInt(a)}).notes=C[a][0],r.durations=C[a][1].map(function(t){return Math.floor(t*e*1e4)/1e4}),n.push([Math.floor(1e4*(parseFloat(a)*e+A))/1e4,r]))}}),n.sort(function(t,e){return t[0]>e[0]?1:-1})})}(t),o=function(t){var e=0;return t.forEach(function(t){var n=t[t.length-1],o=0;n[1].durations.forEach(function(t){t>o&&(o=t)}),n[0]+o>e&&(e=n[0]+o)}),e}(n),console.error("totalTime",o),O("스케쥴 생성중..."),C=function(t,e){return console.error("start schedule"),t.map(function(t){return new Tone.Part(function(t,n){n.notes&&e(n,t)},t)})}(n,a),F=!0,O("재생준비 완료!"),(A=function(){var t=N("rect",{width:20,height:20,x:10,y:10});return t.addEventListener("click",c),t}())&&(A.style.fill="rgb(53, 236, 31)")})}O("악보 연주가 가능한 모드입니다. 연주준비를 원하시면 페이지를 클릭하세요")}])});
//# sourceMappingURL=fms.umd.js.map