window.FMS=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(e),n.d(e,"downConvertNote",function(){return D}),n.d(e,"toMidi",function(){return i}),n.d(e,"loader",function(){return N}),n.d(e,"ready",function(){return O}),n.d(e,"loadAndInit",function(){return k}),n.d(e,"load",function(){return L}),n.d(e,"msg",function(){return R}),n.d(e,"base64ToBuffer",function(){return V}),n.d(e,"convertDataURIToBinary",function(){return q}),n.d(e,"init",function(){return z});var o,C="0.25";var A={C0:0,"C#0":1,D0:2,"D#0":3,E0:4,F0:5,"F#0":6,G0:7,"G#0":8,A0:9,"A#0":10,B0:11,C1:12,"C#1":13,D1:14,"D#1":15,E1:16,F1:17,"F#1":18,G1:19,"G#1":20,A1:21,"A#1":22,B1:23,C2:24,"C#2":25,D2:26,"D#2":27,E2:28,F2:29,"F#2":30,G2:31,"G#2":32,A2:33,"A#2":34,B2:35,C3:36,"C#3":37,D3:38,"D#3":39,E3:40,F3:41,"F#3":42,G3:43,"G#3":44,A3:45,"A#3":46,B3:47,C4:48,"C#4":49,D4:50,"D#4":51,E4:52,F4:53,"F#4":54,G4:55,"G#4":56,A4:57,"A#4":58,B4:59,C5:60,"C#5":61,D5:62,"D#5":63,E5:64,F5:65,"F#5":66,G5:67,"G#5":68,A5:69,"A#5":70,B5:71,C6:72,"C#6":73,D6:74,"D#6":75,E6:76,F6:77,"F#6":78,G6:79,"G#6":80,A6:81,"A#6":82,B6:83,C7:84,"C#7":85,D7:86,"D#7":87,E7:88,F7:89,"F#7":90,G7:91,"G#7":92,A7:93,"A#7":94,B7:95,C8:96,"C#8":97,D8:98,"D#8":99,E8:100,F8:101,"F#8":102,G8:103,"G#8":104,A8:105,"A#8":106,B8:107,C9:108},a={C:["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"],bass:["G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],G:["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],D:["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],A:["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],E:["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],B:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"F#":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"C#":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],F:["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],Bb:["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],Eb:["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],Ab:["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],Db:["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Gb:["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],Cb:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],Em:["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],Bm:["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],"F#m":["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],"C#m":["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],"G#m":["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"D#m":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"A#m":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Dm:["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],Gm:["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],Cm:["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],Fm:["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],Bbm:["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Ebm:["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],Abm:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"]},G={1:{score:64,dot:"",beat:.0625,b64:1,b16:.25},2:{score:32,dot:"",beat:.125,b64:2,b16:.5},3:{score:32,dot:"d",beat:.1875,b64:3,b16:.75},4:{score:16,dot:"",beat:.25,b64:4,b16:1},6:{score:16,dot:"d",beat:.375,b64:6,b16:1.5},7:{score:16,dot:"dd",beat:.4375,b64:7,b16:1.75},8:{score:8,dot:"",beat:.5,b64:8,b16:2},12:{score:8,dot:"d",beat:.75,b64:12,b16:3},14:{score:8,dot:"dd",beat:.875,b64:14,b16:3.5},16:{score:4,dot:"",beat:1,b64:16,b16:4},24:{score:4,dot:"d",beat:1.5,b64:24,b16:6},28:{score:4,dot:"dd",beat:1.75,b64:28,b16:7},32:{score:2,dot:"",beat:2,b64:32,b16:8},48:{score:2,dot:"d",beat:3,b64:48,b16:12},56:{score:2,dot:"dd",beat:3.5,b64:56,b16:14},64:{score:1,dot:"",beat:4,b64:64,b16:16},96:{score:1,dot:"d",beat:6,b64:96,b16:24},112:{score:1,dot:"dd",beat:7,b64:112,b16:28}},F={C:"B",D:"C",E:"D",F:"E",G:"F",A:"G",B:"A"},D=function(t){var e=t.split("");return"b"==e[1]?F[e[0]]+("F"==e[0]||"C"==e[0]?"":"#")+e[2]:t},i=function(t){return A[t]},u=function(t,e){return e?t.sort(function(t,e){return A[e]-A[t]}):t.sort(function(t,e){return A[t]-A[e]})},c=function(t,e){var n=a.C.indexOf(t);return a[e][n]},l=Object.keys(G).map(function(t){return parseInt(t)}).sort(function(t,e){return-t-e}),s=l.length,E={fillStyle:"red",strokeStyle:"red"};function f(t){if(t<=0)throw new Error("wrong param");for(var e=-1,n=[];;)if(G[t]){if(n.push(G[t].b64),-1==e)break;t=e,e=-1}else for(var r=0;r<s;r++)if(t>=l[r]){e=t-l[r],t=l[r];break}return n}var B=/^([a-gA-G])([#b]+)?([0-9])$/;var d="c5";function h(t,e){return G[t]?G[t].score+G[t].dot+(e?"r":""):null}function b(t,e,n){var r=e,o=f(n).map(function(e){var n={note:[t||d],b64:r,length:e,endB64:r+e-1,duration:h(e,!0),isRest:!0,fixedRest:!t};return r+=e,n});return o.length>1&&(o[0].tieTail=o[o.length-1],o[o.length-1].tieHead=o[0]),o}function p(t,e){var n=t.note;e&&(t.isRest&&t.fixedRest||(n=n.map(function(t){return c(t,e)})));var r=function(t){var e=[],n=[];return t.forEach(function(t){var r=t.match(B);r?(e.push(r[1]+(r[2]||"")+"/"+r[3]),n.push(r[2])):(e.push(null),n.push(null))}),{notes:e,accidentals:n}}(n),C=new o.StaveNote({keys:r.notes,duration:t.duration,auto_stem:!0});t.isRest||r.accidentals.forEach(function(t,e){t&&C.addAccidental(e,new o.Accidental(t))});for(var A=function(t,e){for(var n=0,r=0,o=t.length;r<o;r++)t[r]==e&&n++;return n}(t.duration,"d"),a=0;a<A;a++)C.addDotToAll();return C}function v(t){t._el&&t._el.parentElement&&(t._el.parentElement.removeChild(t._el),t._el=null)}function m(t){t.beam&&t.beam._el&&t.beam._el.parentElement&&(t.beam._el.parentElement.removeChild(t.beam._el),t.beam._el=null)}function g(t){t._beamStem_el&&t._beamStem_el.parentElement&&(t._beamStem_el.parentElement.removeChild(t._beamStem_el),t._beamStem_el=null)}function y(t,e){!function(t,e){v(t),t._el=t.context.openGroup("stavenote-highlight",t.getAttribute("id")),t.setStyle(e),t.context.openGroup("note",null,{pointerBBox:!1}),t.hasStem()&&!t.beam&&(t.drawStem(),t.flag&&(t.flag.setStyle(e),t.drawFlag())),t.drawNoteHeads(),t.context.closeGroup(),t.drawModifiers(),t.context.closeGroup()}(t,E),t.beam&&((e||t.beam.notes[0]===t)&&(!function(t,e){t.beam&&(m(t),t.beam._el=t.context.openGroup("beam"),t.context.setFillStyle(e.fillStyle),t.context.setStrokeStyle("none"),t.beam.drawBeamLines(),t.context.closeGroup())}(t,E),t.beam._highlighted=!0),function(t,e){t.beam&&t.hasStem()&&(g(t),t._beamStem_el=t.context.openGroup("beam-stem"),t.stem.setStyle(e),t.stem.draw(),t.context.closeGroup())}(t,E))}var w,T={};function x(t,e){(t.isOn||e&&t.staveNote.beam&&t.staveNote.beam._highlighted)&&(delete T[t.id],function(t,e){v(t),t.beam&&(g(t),(e||t.beam.notes[t.beam.notes.length-1]===t)&&(m(t),t.beam._highlighted=!1))}(t.staveNote,e),t.isOn=!1)}var _={topMargin:80,leftMargin:50,measureWidth:299,groupGap:140,partGap:70};function S(t,e){console.error("data",t);var n=function(t){return t.map(function(t,e){var n=[];t.data.forEach(function(r,o){if(r){var C,A,a,G=[[],[]];for(C in r.data)for(A in r.data[C]){a=Math.floor(parseFloat(A)/16);var F={note:C,b64:Math.round(4*(32*o+parseFloat(A))),length:Math.round(4*r.data[C][A])};F.endB64=F.b64+F.length-1,G[a].push(F)}G.forEach(function(t){t.sort(function(t,e){return t.b64-e.b64})}),n=n.concat(G)}else e<t.data.length-1&&n.push([],[])});var o=n.reduce(function(t,e){return t.concat(e)},[]);o.sort(function(t,e){return t.b64==e.b64?t.length-e.length:t.b64-e.b64});var C,A,a=[];o.forEach(function(t){for(A=0;;){a[A]||(a[A]=[]);var e=(C=a[A]).length?C[C.length-1]:null;if(null==e||t.b64>e.endB64||t.b64==e.b64&&t.length==e.length){C.push(t);break}if(++A>100){console.error("??!!");break}}}),a.forEach(function(t,e){return t.forEach(function(t){return t.voiceIndex=e})});for(var G=0;G<n.length;G++){var F=n[G];F.length?n[G]=F.reduce(function(t,e){return t[e.voiceIndex]||(t[e.voiceIndex]=[]),t[e.voiceIndex].push(e),t},[]):n[G]=[[]]}return n.forEach(function(t,e){t.forEach(function(t){var e,n,o,C;(C=t.sort(function(t,e){return t.b64==e.b64?t.length-e.length:t.b64-e.b64}).reduce(function(t,r,C){return r.b64==e&&r.length==n?o.push(r.note):(e=r.b64,n=r.length,r.note=[r.note],o=r.note,t.push(r)),t},[])).forEach(function(t){t.note.length>1&&u(t.note)}),t.length=0,t.push.apply(t,r(C))})}),n.forEach(function(t,e){var o=[t];t.forEach(function(t,r){var C=t[t.length-1];if(C){var A=64*(e+1);if(C.endB64>=A){var a,G;e==n.length-1?a=[G=[]]:(a=n[e+1])[r]?G=a[r]:(G=[],a[r]=G);var F={note:C.note,b64:A,length:C.endB64-A+1};F.endB64=F.b64+F.length-1,F.voiceIndex=C.voiceIndex,G.unshift(F),C.endB64=A-1,C.length=C.endB64-C.b64+1,C.tieTail=F,F.tieHead=C,e==n.length-1&&(n.push(a),o.push(a))}}}),o.forEach(function(t){t.forEach(function(t){var e=t.reduce(function(t,e){var n=e.b64,r=f(e.length).map(function(t,r,o){var C=Object.assign({},e);return delete C.tieTail,delete C.tieHead,C.b64=n,C.length=t,C.endB64=C.b64+C.length-1,n+=t,C});return e.tieHead?(e.tieHead.tieTail=r[r.length-1],r[r.length-1].tieHead=e.tieHead):e.tieTail?(r[0].tieTail=e.tieTail,e.tieTail.tieHead=r[0]):r.length>1&&(r[0].tieTail=r[r.length-1],r[r.length-1].tieHead=r[0]),t.concat(r)},[]);t.length=0,t.push.apply(t,r(e))})})}),n.forEach(function(t,e){var n=1==t.length;t.forEach(function(t){var o,C,A,a=64*e,G=a+64;o=t.reduce(function(t,e,o){return e.b64-a>0&&t.push.apply(t,r(b(n?null:e.note[0],a,e.b64-a))),e.duration=h(e.length),t.push(e),a=e.endB64+1,t},[]),a<G&&(o.length?(C=o).push.apply(C,r(b(n?null:o[o.length-1].note[0],a,G-a))):(A=o).push.apply(A,r(b(null,64*e,64)))),t.length=0,t.push.apply(t,r(o))})}),n})}(t.data);(e=Object.assign({},_,e)).bpm=t.bpm,e.noteC=2*t.nodeLength,e.trackLength=t.data.length;var C=function(t,e){var n=e.startBarNum,r=e.partGap,C=(e.noteC,e.bpm),A=(e.trackLength,e.topMargin),a=e.leftMargin,G=e.measureWidth,F=e.groupGap;n=n||1;for(var D=document.rootElement;D.firstChild;)D.removeChild(D.firstChild);var i=new o.Renderer(D,"CANVAS"==D.tagName?o.Renderer.Backends.CANVAS:o.Renderer.Backends.SVG),u=[],c=i.getContext();c.setFont("Arial",10,"").setBackgroundFillStyle("#eed"),t.forEach(function(t,e){t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){t.staveNote=p(t,u[e])})})})});var l=0,s=t[0].length,E=t.length,f=[],B=[],d=[];i.resize(4*G+a+20,Math.ceil(s/4)*(E*F+r)+A),t=t.map(function(t,e){var D=[],i=[];t=t.map(function(t){return t.length>l&&(l=t.length),t.map(function(t){var e=t.map(function(t){return t.tieTail&&i.push(new o.StaveTie({first_note:t.staveNote,last_note:t.tieTail.staveNote,first_indices:[0],last_indices:[0]})),t.staveNote});return new o.Voice({num_beats:4,beat_value:4}).addTickables(e).setMode(o.Voice.Mode.SOFT)})});for(var u=function(i){var u=t[i]||[new o.Voice({num_beats:4,beat_value:4}).addTickables([new o.StaveNote({keys:["a/4"],duration:"1r"})])],l=new o.Stave(i%4*G+a,Math.floor(i/4)*(E*F+r)+e*F+A,G);D.push(l),i%4==0&&(e%2==0?l.addClef("treble"):l.addClef("bass"),l.addKeySignature("C"),0==i&&l.addTimeSignature("4/4"),0==e&&(l.setText(i+n,o.StaveModifier.Position.LEFT,{shift_x:-15,shift_y:-40}),l._isStartMeasure=!0)),0==e&&0==i&&l.setTempo({duration:"4",bpm:C},-20),l.setContext(c).draw(),u.forEach(function(t){f.push(o.Beam.applyAndGetBeams(t))}),(new o.Formatter).joinVoices(u).formatToStave(u,l),u.forEach(function(t,e){t.draw(c,l)})},h=0;h<s;h++)u(h);return i.forEach(function(t){return t.setContext(c).draw()}),B.push(D),d.push(i),t});var h=[];if(E>1)for(var b=0;b<s;b+=4){var v=new o.StaveConnector(B[0][b],B[E-1][b]);v.setType(o.StaveConnector.type.BRACE),v.setContext(c).draw()}return f.forEach(function(t){return t.forEach(function(t){return t.setContext(c).draw()})}),{renderer:i,context:c,stavesList:B,connectorList:h,tiesList:d,beamsList:f,voiceList:t,redraw:function(){var e,n;for(c.clear(),e=0;e<B.length;e++)for(n=0;n<B[e].length;n++)B[e][n].draw();for(e=0;e<h.length;e++)for(n=0;n<h[e].length;n++)h[e][n].draw();for(t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){return t.draw(c)})})}),e=0;e<d.length;e++)for(n=0;n<d[e].length;n++)d[e][n].draw();for(e=0;e<f.length;e++)for(n=0;n<f[e].length;n++)f[e][n].draw()}}}(n,e).context;w=Tone.Time("64n").toSeconds();var A=function(t){var e,n,r=!!(t=t||{}).scrollContainer,o=new Tone.Part(function(C,A){Tone.Draw.schedule(function(){if(!o._stopped){if(e){if(e!==A)return;e=null,function(){for(var t in T)T[t].isOn&&x(T[t],!0),delete T[t]}()}!function(t){if(!t.isOn){for(var e in T)T[e].endB64<t.b64&&(T[e].isOn&&x(T[e],!0),delete T[e]);T[t.id]=t;try{y(t.staveNote),t.isOn=!0}catch(e){console.error(t,e)}}}(A),r&&A.staveNote.stave&&A.staveNote.stave._isStartMeasure&&n!=A.staveNote.stave&&(C=t.scrollContainer,a=A.staveNote.stave.y,(C.scrollTop>a-M||C.scrollTop<=a-M-(window.innerHeight-500))&&C.scrollTo(0,a-M),n=A.staveNote.stave)}var C,a},C)});o._stopped=!0;var C=new Tone.Part(function(t,e){Tone.Draw.schedule(function(){o._stopped||x(e)},t)}),A=[];return{notes:A,part:o,offPart:C,start:function(){e=this.part.at(0).value,this.part._stopped=!1,this.part.start("+0.1"),this.offPart.start("+0.1")},stop:function(){e=null,this.part._stopped=!0,this.part.stop(),this.offPart.stop(),Tone.Draw.cancel(),this.clear()},clear:function(){A.forEach(function(t){return x(t,!0)})},setLineList:function(t){o.removeAll(),C.removeAll(),t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){t.forEach(function(t){o.add(t.b64*w,t),C.add(t.endB64*w,t),t.id=""+Date.now()+Math.round(1e4*Math.random()),A.push(t),A[t.id]=t})})})})},setContext:function(t){this.ctx=t}}}({scrollContainer:e.scroll?document.rootElement:null});return A.setContext(C),A.setLineList(n),A}var M=0;var j=eval,N=function(){var t,e,n,r,o=0;function C(A){if(o>=t)console.error("over index");else{console.error("load script:",A);var a=new XMLHttpRequest;a.open("GET",A,!0),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?(j(a.responseText),++o<t?(n&&n(o-1),C(e[o])):(console.error("load complete"),r&&r())):console.error("실패: ",a.status))},a.send(null)}}return{load:function(A,a,G){o=0,t=A.length,G?(n=a,r=G):(n=null,r=a),C((e=A)[o])}}}();function O(t,e){R("악보 연주가 가능한 모드입니다. 연주준비를 원하시면 페이지를 클릭하세요"),document.rootElement.addEventListener("click",function n(){document.rootElement.removeEventListener("click",n),console.error("start loading"),k(t,e)})}function k(t,e){console.error("loadAndInit",C),L(function(){z(t,e)})}function L(t){N.load(["https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.10/Tone.min.js","https://cdnjs.cloudflare.com/ajax/libs/vexflow/1.2.89/vexflow-min.js","https://cdn.jsdelivr.net/npm/soundfont-player@0.11.0/dist/soundfont-player.min.js"],function(t){R("스크립트 로딩("+t+")")},t)}var P,H="http://www.w3.org/2000/svg";function I(t,e,n){var r=document.createElementNS(H,t);if(e)for(var o in e)r.setAttribute(o,e[o]);return(n||document.rootElement).appendChild(r),r}function R(t){P||(P=I("text",{x:100,y:18,fill:"#000"})),setTimeout(function(){console.info("progress:",t),P.textContent="v"+C+" "+t})}function V(t){for(var e=t.indexOf(W)+W.length,n=t.substring(e),r=window.atob(n),o=new ArrayBuffer(r.length),C=new Uint8Array(o),A=0;A<o.byteLength;A++)C[A]=255&r.charCodeAt(A);return o}var U,W=";base64,";function q(t){for(var e=t.indexOf(W)+W.length,n=t.substring(e),r=window.atob(n),o=r.length,C=new Uint8Array(new ArrayBuffer(o)),A=0;A<o;A++)C[A]=r.charCodeAt(A);return C}function z(t,e){var n,r,C,A,a,G,F,D;function i(t,e){G(U,t,e)}function u(){console.error("ready"),R("악보 변환중..."),(e=e||{}).scroll=!0,a=S(t,e),R("재생 데이터 변환중..."),n=function(t){var e=Tone.Time("16n").toSeconds();return t.data.map(function(t){var n=[];return t.data.forEach(function(t,r){if(t){var o,C=[],A=32*r*e,a=t.data;for(var G in a)for(var F in a[G])parseFloat(F)>=32||(null==C[F]&&(C[F]=[[],[]]),C[F][0].push(G),C[F][1].push(a[G][F]));for(var D in C)C[D]&&((o={beat:parseInt(D)}).notes=C[D][0],o.durations=C[D][1].map(function(t){return Math.floor(t*e*1e4)/1e4}),n.push([Math.floor(1e4*(parseFloat(D)*e+A))/1e4,o]))}}),n.sort(function(t,e){return t[0]>e[0]?1:-1})})}(t),r=function(t){var e=0;return t.forEach(function(t){var n=t[t.length-1],r=0;n[1].durations.forEach(function(t){t>r&&(r=t)}),n[0]+r>e&&(e=n[0]+r)}),e}(n),console.error("totalTime",r),R("스케쥴 생성중..."),C=function(t,e){return console.error("start schedule"),t.map(function(t){return new Tone.Part(function(t,n){n.notes&&e(n,t)},t)})}(n,i),F=!0,R("재생준비 완료!"),(A=function(t){var e=I("g",{x:10,y:10}),n=I("rect",{width:70,height:20,x:10,y:5},e),r=I("text",{x:10,y:20},e);return r.textContent="재생/정지",r.setAttribute("pointer-events","none"),e.btn=n,e.addEventListener("click",t),e.setColor=function(t){n.style.fill=t},e.activeColor=function(){n.style.fill="rgb(53, 236, 31)"},e.deactiveColor=function(){n.style.fill="rgb(238, 51, 25)"},e}(l)).activeColor()}function c(){F&&(A&&A.activeColor(),console.error("stop"),a.stop(),C.forEach(function(t){return t.stop()}),Tone.Transport.stop(),Tone.Transport.clear(D))}function l(){F&&("started"==Tone.Transport.state?c():(c(),console.error("play"),A&&A.deactiveColor(),C.forEach(function(t){t.start("+0.1")}),a.start(),D=Tone.Transport.schedule(function(t){c()},"+"+(r+.5)),Tone.Transport.start("+0.5")))}o=Vex.Flow,console.error("start tone setting"),Tone.Transport.bpm.value=t.bpm,e&&e.synth&&e.playSynthFunc?(U=e.synth,G=e.playSynthFunc,u()):(R("악기 로딩중..."),/iPhone|iPad|iPod/i.test(navigator.userAgent)?(U=new Tone.PolySynth(68,Tone.Synth).toMaster(),G=function(t,e,n){t.triggerAttackRelease(e.notes,e.durations,n)},u()):Soundfont.instrument(Tone.context._context,"acoustic_grand_piano").then(function(t){console.error("instrument loaded"),U=t,G=function(t,e,n){e.notes.forEach(function(r,o){t.play(r,n,e.durations[o])})},u()}))}}]);
//# sourceMappingURL=fms.js.map