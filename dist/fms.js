window.FMS=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(e),n.d(e,"downConvertNote",function(){return D}),n.d(e,"toMidi",function(){return i}),n.d(e,"loader",function(){return j}),n.d(e,"ready",function(){return L}),n.d(e,"loadAndInit",function(){return N}),n.d(e,"load",function(){return O}),n.d(e,"msg",function(){return H}),n.d(e,"base64ToFloat32Array",function(){return U}),n.d(e,"base64ToBuffer",function(){return V}),n.d(e,"convertDataURIToBinary",function(){return W}),n.d(e,"getSoundfontUrl",function(){return Y}),n.d(e,"init",function(){return X});var o,a="0.41";var C={C0:0,"C#0":1,D0:2,"D#0":3,E0:4,F0:5,"F#0":6,G0:7,"G#0":8,A0:9,"A#0":10,B0:11,C1:12,"C#1":13,D1:14,"D#1":15,E1:16,F1:17,"F#1":18,G1:19,"G#1":20,A1:21,"A#1":22,B1:23,C2:24,"C#2":25,D2:26,"D#2":27,E2:28,F2:29,"F#2":30,G2:31,"G#2":32,A2:33,"A#2":34,B2:35,C3:36,"C#3":37,D3:38,"D#3":39,E3:40,F3:41,"F#3":42,G3:43,"G#3":44,A3:45,"A#3":46,B3:47,C4:48,"C#4":49,D4:50,"D#4":51,E4:52,F4:53,"F#4":54,G4:55,"G#4":56,A4:57,"A#4":58,B4:59,C5:60,"C#5":61,D5:62,"D#5":63,E5:64,F5:65,"F#5":66,G5:67,"G#5":68,A5:69,"A#5":70,B5:71,C6:72,"C#6":73,D6:74,"D#6":75,E6:76,F6:77,"F#6":78,G6:79,"G#6":80,A6:81,"A#6":82,B6:83,C7:84,"C#7":85,D7:86,"D#7":87,E7:88,F7:89,"F#7":90,G7:91,"G#7":92,A7:93,"A#7":94,B7:95,C8:96,"C#8":97,D8:98,"D#8":99,E8:100,F8:101,"F#8":102,G8:103,"G#8":104,A8:105,"A#8":106,B8:107,C9:108},A={C:["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"],bass:["G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],G:["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],D:["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],A:["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],E:["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],B:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"F#":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"C#":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],F:["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],Bb:["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],Eb:["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],Ab:["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],Db:["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Gb:["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],Cb:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],Em:["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],Bm:["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],"F#m":["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],"C#m":["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],"G#m":["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"D#m":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"A#m":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Dm:["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],Gm:["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],Cm:["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],Fm:["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],Bbm:["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Ebm:["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],Abm:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"]},F={1:{score:64,dot:"",beat:.0625,b64:1,b16:.25},2:{score:32,dot:"",beat:.125,b64:2,b16:.5},3:{score:32,dot:"d",beat:.1875,b64:3,b16:.75},4:{score:16,dot:"",beat:.25,b64:4,b16:1},6:{score:16,dot:"d",beat:.375,b64:6,b16:1.5},7:{score:16,dot:"dd",beat:.4375,b64:7,b16:1.75},8:{score:8,dot:"",beat:.5,b64:8,b16:2},12:{score:8,dot:"d",beat:.75,b64:12,b16:3},14:{score:8,dot:"dd",beat:.875,b64:14,b16:3.5},16:{score:4,dot:"",beat:1,b64:16,b16:4},24:{score:4,dot:"d",beat:1.5,b64:24,b16:6},28:{score:4,dot:"dd",beat:1.75,b64:28,b16:7},32:{score:2,dot:"",beat:2,b64:32,b16:8},48:{score:2,dot:"d",beat:3,b64:48,b16:12},56:{score:2,dot:"dd",beat:3.5,b64:56,b16:14},64:{score:1,dot:"",beat:4,b64:64,b16:16},96:{score:1,dot:"d",beat:6,b64:96,b16:24},112:{score:1,dot:"dd",beat:7,b64:112,b16:28}},G={C:"B",D:"C",E:"D",F:"E",G:"F",A:"G",B:"A"},D=function(t){var e=t.split("");return"b"==e[1]?G[e[0]]+("F"==e[0]||"C"==e[0]?"":"#")+e[2]:t},i=function(t){return C[t]},c=function(t,e){return e?t.sort(function(t,e){return C[e]-C[t]}):t.sort(function(t,e){return C[t]-C[e]})},u=function(t,e){var n=A.C.indexOf(t);return A[e][n]},l=Object.keys(F).map(function(t){return parseInt(t)}).sort(function(t,e){return-t-e}),s=l.length,f={fillStyle:"red",strokeStyle:"red"};function E(t){if(t<=0)throw new Error("wrong param");for(var e=-1,n=[];;)if(F[t]){if(n.push(F[t].b64),-1==e)break;t=e,e=-1}else for(var r=0;r<s;r++)if(t>=l[r]){e=t-l[r],t=l[r];break}return n}var d=/^([a-gA-G])([#b]+)?([0-9])$/;var B="c5";function h(t,e){return F[t]?F[t].score+F[t].dot+(e?"r":""):null}function b(t,e,n){var r=e,o=E(n).map(function(e){var n={note:[t||B],b64:r,length:e,endB64:r+e-1,duration:h(e,!0),isRest:!0,fixedRest:!t};return r+=e,n});return o.length>1&&(o[0].tieTail=o[o.length-1],o[o.length-1].tieHead=o[0]),o}function p(t,e){var n=t.note;e&&(t.isRest&&t.fixedRest||(n=n.map(function(t){return u(t,e)})));var r=function(t){var e=[],n=[];return t.forEach(function(t){var r=t.match(d);r?(e.push(r[1]+(r[2]||"")+"/"+r[3]),n.push(r[2])):(e.push(null),n.push(null))}),{notes:e,accidentals:n}}(n),a=new o.StaveNote({keys:r.notes,duration:t.duration,auto_stem:!0});t.isRest||r.accidentals.forEach(function(t,e){t&&a.addAccidental(e,new o.Accidental(t))});for(var C=function(t,e){for(var n=0,r=0,o=t.length;r<o;r++)t[r]==e&&n++;return n}(t.duration,"d"),A=0;A<C;A++)a.addDotToAll();return a}function v(t){t._el&&t._el.parentElement&&(t._el.parentElement.removeChild(t._el),t._el=null)}function m(t){t.beam&&t.beam._el&&t.beam._el.parentElement&&(t.beam._el.parentElement.removeChild(t.beam._el),t.beam._el=null)}function g(t){t._beamStem_el&&t._beamStem_el.parentElement&&(t._beamStem_el.parentElement.removeChild(t._beamStem_el),t._beamStem_el=null)}function y(t,e){!function(t,e){v(t),t._el=t.context.openGroup("stavenote-highlight",t.getAttribute("id")),t.setStyle(e),t.context.openGroup("note",null,{pointerBBox:!1}),t.hasStem()&&!t.beam&&(t.drawStem(),t.flag&&(t.flag.setStyle(e),t.drawFlag())),t.drawNoteHeads(),t.context.closeGroup(),t.drawModifiers(),t.context.closeGroup()}(t,f),t.beam&&((e||t.beam.notes[0]===t)&&(!function(t,e){t.beam&&(m(t),t.beam._el=t.context.openGroup("beam"),t.context.setFillStyle(e.fillStyle),t.context.setStrokeStyle("none"),t.beam.drawBeamLines(),t.context.closeGroup())}(t,f),t.beam._highlighted=!0),function(t,e){t.beam&&t.hasStem()&&(g(t),t._beamStem_el=t.context.openGroup("beam-stem"),t.stem.setStyle(e),t.stem.draw(),t.context.closeGroup())}(t,f))}var w,x={};function T(t,e){(t.isOn||e&&t.staveNote.beam&&t.staveNote.beam._highlighted)&&(delete x[t.id],function(t,e){v(t),t.beam&&(g(t),(e||t.beam.notes[t.beam.notes.length-1]===t)&&(m(t),t.beam._highlighted=!1))}(t.staveNote,e),t.isOn=!1)}var _={topMargin:80,leftMargin:50,measureWidth:299,groupGap:140,partGap:70};function S(t,e){console.error("data",t);var n=function(t){return t.map(function(t,e){var n=[];t.data.forEach(function(r,o){if(r){var a,C,A,F=[[],[]];for(a in r.data)for(C in r.data[a]){A=Math.floor(parseFloat(C)/16);var G={note:a,b64:Math.round(4*(32*o+parseFloat(C))),length:Math.round(4*r.data[a][C])};G.endB64=G.b64+G.length-1,F[A].push(G)}F.forEach(function(t){t.sort(function(t,e){return t.b64-e.b64})}),n=n.concat(F)}else e<t.data.length-1&&n.push([],[])});var o=n.reduce(function(t,e){return t.concat(e)},[]);o.sort(function(t,e){return t.b64==e.b64?t.length-e.length:t.b64-e.b64});var a,C,A=[];o.forEach(function(t){for(C=0;;){A[C]||(A[C]=[]);var e=(a=A[C]).length?a[a.length-1]:null;if(null==e||t.b64>e.endB64||t.b64==e.b64&&t.length==e.length){a.push(t);break}if(++C>100){console.error("??!!");break}}}),A.forEach(function(t,e){return t.forEach(function(t){return t.voiceIndex=e})});for(var F=0;F<n.length;F++){var G=n[F];G.length?n[F]=G.reduce(function(t,e){return t[e.voiceIndex]||(t[e.voiceIndex]=[]),t[e.voiceIndex].push(e),t},[]):n[F]=[[]]}return n.forEach(function(t,e){t.forEach(function(t){var e,n,o,a;(a=t.sort(function(t,e){return t.b64==e.b64?t.length-e.length:t.b64-e.b64}).reduce(function(t,r,a){return r.b64==e&&r.length==n?o.push(r.note):(e=r.b64,n=r.length,r.note=[r.note],o=r.note,t.push(r)),t},[])).forEach(function(t){t.note.length>1&&c(t.note)}),t.length=0,t.push.apply(t,r(a))})}),n.forEach(function(t,e){var o=[t];t.forEach(function(t,r){var a=t[t.length-1];if(a){var C=64*(e+1);if(a.endB64>=C){var A,F;e==n.length-1?A=[F=[]]:(A=n[e+1])[r]?F=A[r]:(F=[],A[r]=F);var G={note:a.note,b64:C,length:a.endB64-C+1};G.endB64=G.b64+G.length-1,G.voiceIndex=a.voiceIndex,F.unshift(G),a.endB64=C-1,a.length=a.endB64-a.b64+1,a.tieTail=G,G.tieHead=a,e==n.length-1&&(n.push(A),o.push(A))}}}),o.forEach(function(t){t.forEach(function(t){var e=t.reduce(function(t,e){var n=e.b64,r=E(e.length).map(function(t,r,o){var a=Object.assign({},e);return delete a.tieTail,delete a.tieHead,a.b64=n,a.length=t,a.endB64=a.b64+a.length-1,n+=t,a});return e.tieHead?(e.tieHead.tieTail=r[r.length-1],r[r.length-1].tieHead=e.tieHead):e.tieTail?(r[0].tieTail=e.tieTail,e.tieTail.tieHead=r[0]):r.length>1&&(r[0].tieTail=r[r.length-1],r[r.length-1].tieHead=r[0]),t.concat(r)},[]);t.length=0,t.push.apply(t,r(e))})})}),n.forEach(function(t,e){var n=1==t.length;t.forEach(function(t){var o,a,C,A=64*e,F=A+64;o=t.reduce(function(t,e,o){return e.b64-A>0&&t.push.apply(t,r(b(n?null:e.note[0],A,e.b64-A))),e.duration=h(e.length),t.push(e),A=e.endB64+1,t},[]),A<F&&(o.length?(a=o).push.apply(a,r(b(n?null:o[o.length-1].note[0],A,F-A))):(C=o).push.apply(C,r(b(null,64*e,64)))),t.length=0,t.push.apply(t,r(o))})}),n})}(t.data);(e=Object.assign({},_,e)).bpm=t.bpm,e.noteC=2*t.nodeLength,e.trackLength=t.data.length;var a=function(t,e){var n=e.startBarNum,r=e.partGap,a=(e.noteC,e.bpm),C=(e.trackLength,e.topMargin),A=e.leftMargin,F=e.measureWidth,G=e.groupGap;n=n||1;for(var D=document.rootElement;D.firstChild;)D.removeChild(D.firstChild);var i=new o.Renderer(D,"CANVAS"==D.tagName?o.Renderer.Backends.CANVAS:o.Renderer.Backends.SVG),c=[],u=i.getContext();u.setFont("Arial",10,"").setBackgroundFillStyle("#eed"),t.forEach(function(t,e){t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){t.staveNote=p(t,c[e])})})})});var l=0,s=t[0].length,f=t.length,E=[],d=[],B=[];i.resize(4*F+A+20,Math.ceil(s/4)*(f*G+r)+C),t=t.map(function(t,e){var D=[],i=[];t=t.map(function(t){return t.length>l&&(l=t.length),t.map(function(t){var e=t.map(function(t){return t.tieTail&&i.push(new o.StaveTie({first_note:t.staveNote,last_note:t.tieTail.staveNote,first_indices:[0],last_indices:[0]})),t.staveNote});return new o.Voice({num_beats:4,beat_value:4}).addTickables(e).setMode(o.Voice.Mode.SOFT)})});for(var c=function(i){var c=t[i]||[new o.Voice({num_beats:4,beat_value:4}).addTickables([new o.StaveNote({keys:["a/4"],duration:"1r"})])],l=new o.Stave(i%4*F+A,Math.floor(i/4)*(f*G+r)+e*G+C,F);D.push(l),i%4==0&&(e%2==0?l.addClef("treble"):l.addClef("bass"),l.addKeySignature("C"),0==i&&l.addTimeSignature("4/4"),0==e&&(l.setText(i+n,o.StaveModifier.Position.LEFT,{shift_x:-15,shift_y:-40}),l._isStartMeasure=!0)),0==e&&0==i&&l.setTempo({duration:"4",bpm:a},-20),l.setContext(u).draw(),c.forEach(function(t){E.push(o.Beam.applyAndGetBeams(t))}),(new o.Formatter).joinVoices(c).formatToStave(c,l),c.forEach(function(t,e){t.draw(u,l)})},h=0;h<s;h++)c(h);return i.forEach(function(t){return t.setContext(u).draw()}),d.push(D),B.push(i),t});var h=[];if(f>1)for(var b=0;b<s;b+=4){var v=new o.StaveConnector(d[0][b],d[f-1][b]);v.setType(o.StaveConnector.type.BRACE),v.setContext(u).draw()}return E.forEach(function(t){return t.forEach(function(t){return t.setContext(u).draw()})}),{renderer:i,context:u,stavesList:d,connectorList:h,tiesList:B,beamsList:E,voiceList:t,redraw:function(){var e,n;for(u.clear(),e=0;e<d.length;e++)for(n=0;n<d[e].length;n++)d[e][n].draw();for(e=0;e<h.length;e++)for(n=0;n<h[e].length;n++)h[e][n].draw();for(t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){return t.draw(u)})})}),e=0;e<B.length;e++)for(n=0;n<B[e].length;n++)B[e][n].draw();for(e=0;e<E.length;e++)for(n=0;n<E[e].length;n++)E[e][n].draw()}}}(n,e).context;w=Tone.Time("64n").toSeconds();var C=function(t){var e,n,r=!!(t=t||{}).scrollContainer,o=new Tone.Part(function(a,C){Tone.Draw.schedule(function(){if(!o._stopped){if(e){if(e!==C)return;e=null,function(){for(var t in x)x[t].isOn&&T(x[t],!0),delete x[t]}()}!function(t){if(!t.isOn){for(var e in x)x[e].endB64<t.b64&&(x[e].isOn&&T(x[e],!0),delete x[e]);x[t.id]=t;try{y(t.staveNote),t.isOn=!0}catch(e){console.error(t,e)}}}(C),r&&C.staveNote.stave&&C.staveNote.stave._isStartMeasure&&n!=C.staveNote.stave&&(a=t.scrollContainer,A=C.staveNote.stave.y,(a.scrollTop>A-M||a.scrollTop<=A-M-(window.innerHeight-500))&&a.scrollTo(0,A-M),n=C.staveNote.stave)}var a,A},a)});o._stopped=!0;var a=new Tone.Part(function(t,e){Tone.Draw.schedule(function(){o._stopped||T(e)},t)}),C=[];return{notes:C,part:o,offPart:a,start:function(){e=this.part.at(0).value,this.part._stopped=!1,this.part.start("+0.1"),this.offPart.start("+0.1")},stop:function(){e=null,this.part._stopped=!0,this.part.stop(),this.offPart.stop(),Tone.Draw.cancel(),this.clear()},clear:function(){C.forEach(function(t){return T(t,!0)})},setLineList:function(t){o.removeAll(),a.removeAll(),t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){o.add(t.b64*w,t),a.add(t.endB64*w,t),t.id=""+Date.now()+Math.round(1e4*Math.random()),C.push(t),C[t.id]=t})})})})},setContext:function(t){this.ctx=t}}}({scrollContainer:e.scroll?document.rootElement:null});return C.setContext(a),C.setLineList(n),C}var M=0;var k=eval,j=function(){var t,e,n,r,o,a=0;function C(A){if(a>=t)console.error("over index");else{console.error("load script:",A);var F=new XMLHttpRequest;F.open("GET",A,!0),F.onreadystatechange=function(){4==F.readyState&&(200==F.status?function(A){o.push(A),n&&n(a,A);++a<t?C(e[a]):(console.error("load complete"),r&&r(o))}(k(F.responseText)):console.error("실패: ",F.status))},F.send(null)}}return{load:function(A,F,G){o=[],a=0,t=A.length,G?(n=F,r=G):(n=null,r=F),C((e=A)[a])}}}();function L(t,e){function n(n){console.error("start loading"),e||(e={}),e.instrument=n,e.autoStart=!0,N(t,e)}e&&e.instrument?(H("악보 연주가 가능한 모드입니다. 페이지를 클릭하면 연주를 시작합니다."),document.rootElement.addEventListener("click",function t(){document.rootElement.removeEventListener("click",t),n(e.instrument)})):(H("악기 목록 로딩중.."),j.load(["https://gleitz.github.io/midi-js-soundfonts/MusyngKite/names.json"],function(t){H("악기를 선택하면 연주를 시작합니다.");var e=t[0],r=10,o=10,a=I("g",{x:0,y:30}),C=I("rect",{x:0,y:0,width:1200,height:25,fill:"gray",stroke:"black"},a);e.forEach(function(t){var e=q(t,{x:r,y:o,click:function(){a.parentElement.removeChild(a),n(t)}},a),A=e.getBoundingClientRect();r+A.width>1200?(r=10,o+=A.height+10,e.setAttribute("transform","translate(".concat(r,",").concat(o,")")),r+=A.width+10,C.setAttribute("height",o+25+"")):r+=A.width+10})}))}function N(t,e){console.error("loadAndInit",a),O(function(){X(t,e)})}function O(t){j.load(["https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.10/Tone.min.js","https://cdnjs.cloudflare.com/ajax/libs/vexflow/1.2.89/vexflow-min.js"],function(t){H("스크립트 로딩("+t+")")},t)}var R,P="http://www.w3.org/2000/svg";function I(t,e,n){var r,o=document.createElementNS(P,t);if(e)for(var a in e)"text"==a?o.textContent=e[a]:"g"==t&&"x"==a||"y"==a&&!r?(o.setAttribute("transform","translate(".concat(e.x||0,",").concat(e.y||0,")")),r=!0):o.setAttribute(a,e[a]);return(n||document.rootElement).appendChild(o),o}function H(t){R||(R=I("text",{x:100,y:18,fill:"#000"})),setTimeout(function(){console.info("progress:",t),R.textContent="v"+a+" "+t})}function U(t){for(var e=t.indexOf(K)+K.length,n=t.substring(e),r=window.atob(n),o=r.length/Float32Array.BYTES_PER_ELEMENT,a=new DataView(new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT)),C=new Float32Array(o),A=0,F=0;F<o;F++)A=4*F,a.setUint8(0,r.charCodeAt(A)),a.setUint8(1,r.charCodeAt(A+1)),a.setUint8(2,r.charCodeAt(A+2)),a.setUint8(3,r.charCodeAt(A+3)),C[F]=a.getFloat32(0,!0);return C}function V(t){for(var e=t.indexOf(K)+K.length,n=t.substring(e),r=window.atob(n),o=new ArrayBuffer(r.length),a=new Uint8Array(o),C=0;C<o.byteLength;C++)a[C]=255&r.charCodeAt(C);return a}var z,K=";base64,";function W(t){for(var e=t.indexOf(K)+K.length,n=t.substring(e),r=window.atob(n),o=r.length,a=new Uint8Array(new ArrayBuffer(o)),C=0;C<o;C++)a[C]=r.charCodeAt(C);return a}function Y(t,e,n){return"https://gleitz.github.io/midi-js-soundfonts/"+(e="FluidR3_GM"===e?e:"MusyngKite")+"/"+t+"-"+(n="ogg"===n?n:"mp3")+".js"}function q(t,e,n){var r=I("g",{transform:"translate(".concat((e=e||{}).x||0,",").concat(e.y||0,")")},n),o=I("text",{x:0,y:0,text:t,fill:e.color||"black"},r),a=o.getBBox();o.setAttribute("y","".concat(-a.y)),o.setAttribute("pointer-events","none");var C=I("rect",{x:a.x,y:0,width:a.width,height:a.height,fill:e.fill||"white",stroke:e.stroke||"black"},r);return C.style.cursor="pointer",r.insertBefore(C,o),r._text=o,r._rect=C,e.click&&r.addEventListener("click",e.click),r}function X(t,e){var n,r,a,C,A,F,G,i;if(o=Vex.Flow,console.error("start tone setting"),Tone.Transport.bpm.value=t.bpm,e&&e.synth&&e.playSynthFunc)z=e.synth,F=e.playSynthFunc,l();else{H("악기 로딩중...");var c=e&&e.instrument?e.instrument:"acoustic_grand_piano";j.load(["https://gleitz.github.io/midi-js-soundfonts/MusyngKite/"+c+"-mp3.js"],function(){var t={},e=window.MIDI.Soundfont[c];for(var n in e)t[D(n)]=URL.createObjectURL(new Blob([W(e[n])],{type:"audio/mp3"}));z=new Tone.Players(t,function(){l()}).toMaster(),F=function(t,e,n){for(var r=0;r<e.notes.length;r++)t.get(e.notes[r]).start(n,0,e.durations[r])}})}function u(t,e){F(z,t,e)}function l(){var o,F;console.error("ready"),H("악보 변환중..."),(e=e||{}).scroll=!0,A=S(t,e),H("재생 데이터 변환중..."),n=function(t){var e=Tone.Time("16n").toSeconds();return t.data.map(function(t){var n=[];return t.data.forEach(function(t,r){if(t){var o,a=[],C=32*r*e,A=t.data;for(var F in A)for(var G in A[F])parseFloat(G)>=32||(null==a[G]&&(a[G]=[[],[]]),a[G][0].push(F),a[G][1].push(A[F][G]));for(var D in a)a[D]&&((o={beat:parseInt(D)}).notes=a[D][0],o.durations=a[D][1].map(function(t){return Math.floor(t*e*1e4)/1e4}),n.push([Math.floor(1e4*(parseFloat(D)*e+C))/1e4,o]))}}),n.sort(function(t,e){return t[0]>e[0]?1:-1})})}(t),r=function(t){var e=0;return t.forEach(function(t){var n=t[t.length-1],r=0;n[1].durations.forEach(function(t){t>r&&(r=t)}),n[0]+r>e&&(e=n[0]+r)}),e}(n),console.error("totalTime",r),H("스케쥴 생성중..."),a=function(t,e){return console.error("start schedule"),t.map(function(t){return new Tone.Part(function(t,n){n.notes&&e(n,t)},t)})}(n,u),G=!0,H("재생준비 완료!"),o=f,(F=q("재생/정지",{x:10,y:20})).addEventListener("click",o),F.setColor=function(t){F._rect.style.fill=t},F.activeColor=function(){F._rect.style.fill="rgb(53, 236, 31)"},F.deactiveColor=function(){F._rect.style.fill="rgb(238, 51, 25)"},(C=F).activeColor(),e.autoStart&&f()}function s(){G&&(C&&C.activeColor(),console.error("stop"),A.stop(),a.forEach(function(t){return t.stop()}),Tone.Transport.stop(),Tone.Transport.clear(i))}function f(){G&&("started"==Tone.Transport.state?s():(s(),console.error("play"),C&&C.deactiveColor(),a.forEach(function(t){t.start("+0.1")}),A.start(),i=Tone.Transport.schedule(function(t){s()},"+"+(r+.5)),Tone.Transport.start("+0.5")))}}}]);
//# sourceMappingURL=fms.js.map