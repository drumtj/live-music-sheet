!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FMS=t():e.FMS=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ready",function(){return ready}),__webpack_require__.d(__webpack_exports__,"loadAndInit",function(){return loadAndInit}),__webpack_require__.d(__webpack_exports__,"load",function(){return load}),__webpack_require__.d(__webpack_exports__,"msg",function(){return msg}),__webpack_require__.d(__webpack_exports__,"init",function(){return init});var version="0.19",VF;function createPlayData(e){var t=Tone.Time("16n").toSeconds();return e.data.map(function(e){var n=[];return e.data.forEach(function(e,o){if(e){var r,a=[],C=32*o*t,F=e.data;for(var A in F)for(var D in F[A])parseFloat(D)>=32||(null==a[D]&&(a[D]=[[],[]]),a[D][0].push(A),a[D][1].push(F[A][D]));for(var G in a)a[G]&&((r={beat:parseInt(G)}).notes=a[G][0],r.durations=a[G][1].map(function(e){return Math.floor(e*t*1e4)/1e4}),n.push([Math.floor(1e4*(parseFloat(G)*t+C))/1e4,r]))}}),n.sort(function(e,t){return e[0]>t[0]?1:-1})})}function schedule(e,t){return console.error("start schedule"),e.map(function(e){return new Tone.Part(function(e,n){n.notes&&t(n,e)},e)})}var noteToMidiMap={C0:0,"C#0":1,D0:2,"D#0":3,E0:4,F0:5,"F#0":6,G0:7,"G#0":8,A0:9,"A#0":10,B0:11,C1:12,"C#1":13,D1:14,"D#1":15,E1:16,F1:17,"F#1":18,G1:19,"G#1":20,A1:21,"A#1":22,B1:23,C2:24,"C#2":25,D2:26,"D#2":27,E2:28,F2:29,"F#2":30,G2:31,"G#2":32,A2:33,"A#2":34,B2:35,C3:36,"C#3":37,D3:38,"D#3":39,E3:40,F3:41,"F#3":42,G3:43,"G#3":44,A3:45,"A#3":46,B3:47,C4:48,"C#4":49,D4:50,"D#4":51,E4:52,F4:53,"F#4":54,G4:55,"G#4":56,A4:57,"A#4":58,B4:59,C5:60,"C#5":61,D5:62,"D#5":63,E5:64,F5:65,"F#5":66,G5:67,"G#5":68,A5:69,"A#5":70,B5:71,C6:72,"C#6":73,D6:74,"D#6":75,E6:76,F6:77,"F#6":78,G6:79,"G#6":80,A6:81,"A#6":82,B6:83,C7:84,"C#7":85,D7:86,"D#7":87,E7:88,F7:89,"F#7":90,G7:91,"G#7":92,A7:93,"A#7":94,B7:95,C8:96,"C#8":97,D8:98,"D#8":99,E8:100,F8:101,"F#8":102,G8:103,"G#8":104,A8:105,"A#8":106,B8:107,C9:108},keyMap={C:["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"],bass:["G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],G:["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],D:["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],A:["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],E:["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],B:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"F#":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"C#":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],F:["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],Bb:["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],Eb:["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],Ab:["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],Db:["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Gb:["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],Cb:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],Em:["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],Bm:["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],"F#m":["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],"C#m":["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],"G#m":["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"D#m":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"A#m":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Dm:["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],Gm:["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],Cm:["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],Fm:["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],Bbm:["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],Ebm:["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],Abm:["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"]},scoreTable={1:{score:64,dot:"",beat:.0625,b64:1,b16:.25},2:{score:32,dot:"",beat:.125,b64:2,b16:.5},3:{score:32,dot:"d",beat:.1875,b64:3,b16:.75},4:{score:16,dot:"",beat:.25,b64:4,b16:1},6:{score:16,dot:"d",beat:.375,b64:6,b16:1.5},7:{score:16,dot:"dd",beat:.4375,b64:7,b16:1.75},8:{score:8,dot:"",beat:.5,b64:8,b16:2},12:{score:8,dot:"d",beat:.75,b64:12,b16:3},14:{score:8,dot:"dd",beat:.875,b64:14,b16:3.5},16:{score:4,dot:"",beat:1,b64:16,b16:4},24:{score:4,dot:"d",beat:1.5,b64:24,b16:6},28:{score:4,dot:"dd",beat:1.75,b64:28,b16:7},32:{score:2,dot:"",beat:2,b64:32,b16:8},48:{score:2,dot:"d",beat:3,b64:48,b16:12},56:{score:2,dot:"dd",beat:3.5,b64:56,b16:14},64:{score:1,dot:"",beat:4,b64:64,b16:16},96:{score:1,dot:"d",beat:6,b64:96,b16:24},112:{score:1,dot:"dd",beat:7,b64:112,b16:28}},sortNote=function(e,t){return t?e.sort(function(e,t){return noteToMidiMap[t]-noteToMidiMap[e]}):e.sort(function(e,t){return noteToMidiMap[e]-noteToMidiMap[t]})},convertKey=function(e,t){var n=keyMap.C.indexOf(e);return keyMap[t][n]},scoreIndex64b=Object.keys(scoreTable).map(function(e){return parseInt(e)}).sort(function(e,t){return-e-t}),sil=scoreIndex64b.length,fillRed={fillStyle:"red",strokeStyle:"red"},fillBlack={fillStyle:"black",strokeStyle:"black"};function b64ToDurations(e,t){var n=t?"r":"";return b64Split(e).map(function(e){return scoreTable[e].score+scoreTable[e].dot+n})}function b64Split(e){if(e<=0)throw new Error("wrong param");for(var t=-1,n=[];;)if(scoreTable[e]){if(n.push(scoreTable[e].b64),-1==t)break;e=t,t=-1}else for(var o=0;o<sil;o++)if(e>=scoreIndex64b[o]){t=e-scoreIndex64b[o],e=scoreIndex64b[o];break}return n}var noteParseExp=/^([a-gA-G])([#b]+)?([0-9])$/;function noteToVFFormat(e){var t=e.match(noteParseExp);return t?{note:t[1]+(t[2]||"")+"/"+t[3],accidental:t[2]}:null}function noteToVFFormat2(e){var t=[],n=[];return e.forEach(function(e){var o=e.match(noteParseExp);o?(t.push(o[1]+(o[2]||"")+"/"+o[3]),n.push(o[2])):(t.push(null),n.push(null))}),{notes:t,accidentals:n}}function charCount(e,t){for(var n=0,o=0,r=e.length;o<r;o++)e[o]==t&&n++;return n}var REST_NOTE_KEY="c5";function b64ToDuration(e,t){return scoreTable[e]?scoreTable[e].score+scoreTable[e].dot+(t?"r":""):null}function makeRestNoteInfoSplitRest(e,t,n){var o=t,r=b64Split(n).map(function(t){var n={note:[e||REST_NOTE_KEY],b64:o,length:t,endB64:o+t-1,duration:b64ToDuration(t,!0),isRest:!0,fixedRest:!e};return o+=t,n});return r.length>1&&(r[0].tieTail=r[r.length-1],r[r.length-1].tieHead=r[0]),r}function createStaveNote(e,t){var n=e.note;t&&(e.isRest&&e.fixedRest||(n=n.map(function(e){return convertKey(e,t)})));var o=noteToVFFormat2(n),r=new VF.StaveNote({keys:o.notes,duration:e.duration,auto_stem:!0});e.isRest||o.accidentals.forEach(function(e,t){e&&r.addAccidental(t,new VF.Accidental(e))});for(var a=charCount(e.duration,"d"),C=0;C<a;C++)r.addDotToAll();return r}function convertToVexFlowData(e){return e.map(function(e,t){var n=[];e.data.forEach(function(o,r){if(o){var a,C,F,A=[[],[]];for(a in o.data)for(C in o.data[a]){F=Math.floor(parseFloat(C)/16);var D={note:a,b64:Math.round(4*(32*r+parseFloat(C))),length:Math.round(4*o.data[a][C])};D.endB64=D.b64+D.length-1,A[F].push(D)}A.forEach(function(e){e.sort(function(e,t){return e.b64-t.b64})}),n=n.concat(A)}else t<e.data.length-1&&n.push([],[])});var o=n.reduce(function(e,t){return e.concat(t)},[]);o.sort(function(e,t){return e.b64==t.b64?e.length-t.length:e.b64-t.b64});var r,a,C=[];o.forEach(function(e){for(a=0;;){C[a]||(C[a]=[]);var t=(r=C[a]).length?r[r.length-1]:null;if(null==t||e.b64>t.endB64||e.b64==t.b64&&e.length==t.length){r.push(e);break}if(++a>100){console.error("??!!");break}}}),C.forEach(function(e,t){return e.forEach(function(e){return e.voiceIndex=t})});for(var F=0;F<n.length;F++){var A=n[F];A.length?n[F]=A.reduce(function(e,t){return e[t.voiceIndex]||(e[t.voiceIndex]=[]),e[t.voiceIndex].push(t),e},[]):n[F]=[[]]}n.forEach(function(e,t){e.forEach(function(e){var t,n,o,r;(r=e.sort(function(e,t){return e.b64==t.b64?e.length-t.length:e.b64-t.b64}).reduce(function(e,r,a){return r.b64==t&&r.length==n?o.push(r.note):(t=r.b64,n=r.length,r.note=[r.note],o=r.note,e.push(r)),e},[])).forEach(function(e){e.note.length>1&&sortNote(e.note)}),e.length=0,e.push.apply(e,_toConsumableArray(r))})});return n.forEach(function(e,t){var o=[e];e.forEach(function(e,r){var a=e[e.length-1];if(a){var C=64*(t+1);if(a.endB64>=C){var F,A;t==n.length-1?F=[A=[]]:(F=n[t+1])[r]?A=F[r]:(A=[],F[r]=A);var D={note:a.note,b64:C,length:a.endB64-C+1};D.endB64=D.b64+D.length-1,D.voiceIndex=a.voiceIndex,A.unshift(D),a.endB64=C-1,a.length=a.endB64-a.b64+1,a.tieTail=D,D.tieHead=a,t==n.length-1&&(n.push(F),o.push(F))}}}),o.forEach(function(e){e.forEach(function(e){var t=e.reduce(function(e,t){var n=t.b64,o=b64Split(t.length).map(function(e,o,r){var a=Object.assign({},t);return delete a.tieTail,delete a.tieHead,a.b64=n,a.length=e,a.endB64=a.b64+a.length-1,n+=e,a});return t.tieHead?(t.tieHead.tieTail=o[o.length-1],o[o.length-1].tieHead=t.tieHead):t.tieTail?(o[0].tieTail=t.tieTail,t.tieTail.tieHead=o[0]):o.length>1&&(o[0].tieTail=o[o.length-1],o[o.length-1].tieHead=o[0]),e.concat(o)},[]);e.length=0,e.push.apply(e,_toConsumableArray(t))})})}),n.forEach(function(e,t){var n=1==e.length;e.forEach(function(e){var o,r,a,C=64*t,F=C+64;(o=e.reduce(function(e,t,o){return t.b64-C>0&&e.push.apply(e,_toConsumableArray(makeRestNoteInfoSplitRest(n?null:t.note[0],C,t.b64-C))),t.duration=b64ToDuration(t.length),e.push(t),C=t.endB64+1,e},[]),C<F)&&(o.length?(r=o).push.apply(r,_toConsumableArray(makeRestNoteInfoSplitRest(n?null:o[o.length-1].note[0],C,F-C))):(a=o).push.apply(a,_toConsumableArray(makeRestNoteInfoSplitRest(null,64*t,64))));e.length=0,e.push.apply(e,_toConsumableArray(o))})}),n})}function drawNotation(e,t){var n=t.startBarNum,o=t.partGap,r=(t.noteC,t.bpm),a=(t.trackLength,t.topMargin),C=t.leftMargin,F=t.measureWidth,A=t.groupGap;n=n||1;for(var D=document.rootElement;D.firstChild;)D.removeChild(D.firstChild);var G=new VF.Renderer(D,"CANVAS"==D.tagName?VF.Renderer.Backends.CANVAS:VF.Renderer.Backends.SVG),i=[],l=G.getContext();l.setFont("Arial",10,"").setBackgroundFillStyle("#eed"),e.forEach(function(e,t){e.forEach(function(e){e.forEach(function(e){e.forEach(function(e){e.staveNote=createStaveNote(e,i[t])})})})});var c=0,s=e[0].length,u=e.length,f=[],d=[],E=[];G.resize(4*F+C+20,Math.ceil(s/4)*(u*A+o)+a),e=e.map(function(e,t){var D=[],G=[];e=e.map(function(e){return e.length>c&&(c=e.length),e.map(function(e){var t=e.map(function(e){return e.tieTail&&G.push(new VF.StaveTie({first_note:e.staveNote,last_note:e.tieTail.staveNote,first_indices:[0],last_indices:[0]})),e.staveNote});return new VF.Voice({num_beats:4,beat_value:4}).addTickables(t).setMode(VF.Voice.Mode.SOFT)})});for(var i=function(G){var i=e[G]||[new VF.Voice({num_beats:4,beat_value:4}).addTickables([new VF.StaveNote({keys:["a/4"],duration:"1r"})])],c=new VF.Stave(G%4*F+C,Math.floor(G/4)*(u*A+o)+t*A+a,F);D.push(c),G%4==0&&(t%2==0?c.addClef("treble"):c.addClef("bass"),c.addKeySignature("C"),0==G&&c.addTimeSignature("4/4"),0==t&&(c.setText(G+n,VF.StaveModifier.Position.LEFT,{shift_x:-15,shift_y:-40}),c._isStartMeasure=!0)),0==t&&0==G&&c.setTempo({duration:"4",bpm:r},-20),c.setContext(l).draw(),i.forEach(function(e){f.push(VF.Beam.applyAndGetBeams(e))}),(new VF.Formatter).joinVoices(i).formatToStave(i,c),i.forEach(function(e,t){e.draw(l,c)})},B=0;B<s;B++)i(B);return G.forEach(function(e){return e.setContext(l).draw()}),d.push(D),E.push(G),e});var B=[];if(u>1)for(var p=0;p<s;p+=4){var b=new VF.StaveConnector(d[0][p],d[u-1][p]);b.setType(VF.StaveConnector.type.BRACE),b.setContext(l).draw()}return f.forEach(function(e){return e.forEach(function(e){return e.setContext(l).draw()})}),{renderer:G,context:l,stavesList:d,connectorList:B,tiesList:E,beamsList:f,voiceList:e,redraw:function(){var t,n;for(l.clear(),t=0;t<d.length;t++)for(n=0;n<d[t].length;n++)d[t][n].draw();for(t=0;t<B.length;t++)for(n=0;n<B[t].length;n++)B[t][n].draw();for(e.forEach(function(e){e.forEach(function(e){e.forEach(function(e){return e.draw(l)})})}),t=0;t<E.length;t++)for(n=0;n<E[t].length;n++)E[t][n].draw();for(t=0;t<f.length;t++)for(n=0;n<f[t].length;n++)f[t][n].draw()}}}function clearDrawNote(e){e._el&&e._el.parentElement&&(e._el.parentElement.removeChild(e._el),e._el=null)}function drawNote(e,t){clearDrawNote(e),e._el=e.context.openGroup("stavenote-highlight",e.getAttribute("id")),e.setStyle(t),e.context.openGroup("note",null,{pointerBBox:!1}),e.hasStem()&&!e.beam&&(e.drawStem(),e.flag&&(e.flag.setStyle(t),e.drawFlag())),e.drawNoteHeads(),e.context.closeGroup(),e.drawModifiers(),e.context.closeGroup()}function clearDrawBeam(e){e.beam&&e.beam._el&&e.beam._el.parentElement&&(e.beam._el.parentElement.removeChild(e.beam._el),e.beam._el=null)}function drawBeam(e,t){e.beam&&(clearDrawBeam(e),e.beam._el=e.context.openGroup("beam"),e.context.setFillStyle(t.fillStyle),e.context.setStrokeStyle("none"),e.beam.drawBeamLines(),e.context.closeGroup())}function clearDrawBeamStem(e){e._beamStem_el&&e._beamStem_el.parentElement&&(e._beamStem_el.parentElement.removeChild(e._beamStem_el),e._beamStem_el=null)}function drawBeamStem(e,t){e.beam&&e.hasStem()&&(clearDrawBeamStem(e),e._beamStem_el=e.context.openGroup("beam-stem"),e.stem.setStyle(t),e.stem.draw(),e.context.closeGroup())}function drawNoteOn(e,t){drawNote(e,fillRed),e.beam&&((t||e.beam.notes[0]===e)&&(drawBeam(e,fillRed),e.beam._highlighted=!0),drawBeamStem(e,fillRed))}function drawNoteOff(e,t){clearDrawNote(e),e.beam&&(clearDrawBeamStem(e),(t||e.beam.notes[e.beam.notes.length-1]===e)&&(clearDrawBeam(e),e.beam._highlighted=!1))}var noteOnList={},t64;function clearNoteOnList(){for(var e in noteOnList)noteOnList[e].isOn&&noteOff(noteOnList[e],!0),delete noteOnList[e]}function noteOn(e){if(!e.isOn){for(var t in noteOnList)noteOnList[t].endB64<e.b64&&(noteOnList[t].isOn&&noteOff(noteOnList[t],!0),delete noteOnList[t]);noteOnList[e.id]=e;try{drawNoteOn(e.staveNote),e.isOn=!0}catch(t){console.error(e,t)}}}function noteOff(e,t){(e.isOn||t&&e.staveNote.beam&&e.staveNote.beam._highlighted)&&(delete noteOnList[e.id],drawNoteOff(e.staveNote,t),e.isOn=!1)}var defaultDrawOption={topMargin:80,leftMargin:50,measureWidth:299,groupGap:140,partGap:70};function create(e,t){console.error("data",e);var n=convertToVexFlowData(e.data);(t=Object.assign({},defaultDrawOption,t)).bpm=e.bpm,t.noteC=2*e.nodeLength,t.trackLength=e.data.length;var o=drawNotation(n,t).context;t64=Tone.Time("64n").toSeconds();var r=createSync({scrollContainer:t.scroll?document.rootElement:null});return r.setContext(o),r.setLineList(n),r}var scrollOffset=0,scrollDuration=500;function scrollToStave(e,t){(e.scrollTop>t-scrollOffset||e.scrollTop<=t-scrollOffset-(window.innerHeight-500))&&e.scrollTo(0,t-scrollOffset)}function createSync(e){var t,n,o=!!(e=e||{}).scrollContainer,r=new Tone.Part(function(a,C){Tone.Draw.schedule(function(){if(!r._stopped){if(t){if(t!==C)return;t=null,clearNoteOnList()}noteOn(C),o&&C.staveNote.stave&&C.staveNote.stave._isStartMeasure&&n!=C.staveNote.stave&&(scrollToStave(e.scrollContainer,C.staveNote.stave.y),n=C.staveNote.stave)}},a)});r._stopped=!0;var a=new Tone.Part(function(e,t){Tone.Draw.schedule(function(){r._stopped||noteOff(t)},e)}),C=[];return{notes:C,part:r,offPart:a,start:function(){t=this.part.at(0).value,this.part._stopped=!1,this.part.start("+0.1"),this.offPart.start("+0.1")},stop:function(){t=null,this.part._stopped=!0,this.part.stop(),this.offPart.stop(),Tone.Draw.cancel(),this.clear()},clear:function(){C.forEach(function(e){return noteOff(e,!0)})},setLineList:function(e){r.removeAll(),a.removeAll(),e.forEach(function(e){e.forEach(function(e){e.forEach(function(e){e.forEach(function(e){r.add(e.b64*t64,e),a.add(e.endB64*t64,e),e.id=""+Date.now()+Math.round(1e4*Math.random()),C.push(e),C[e.id]=e})})})})},setContext:function(e){this.ctx=e}}}var loader=function(){var i=0,max,list,each,done;function start(e,t,n){i=0,max=e.length,n?(each=t,done=n):(each=null,done=t),load((list=e)[i])}function load(src){if(i>=max)console.error("over index");else{console.error("load script:",src);var xhr=new XMLHttpRequest;xhr.open("GET",src,!0),xhr.onreadystatechange=function(){4==xhr.readyState&&(200==xhr.status?(eval(xhr.responseText),loadComplete()):console.error("실패: ",xhr.status))},xhr.send(null)}}function loadComplete(){++i<max?(each&&each(i-1),load(list[i])):(console.error("load complete"),done&&done())}return{load:start}}();function ready(e,t){msg("악보 연주가 가능한 모드입니다. 연주준비를 원하시면 페이지를 클릭하세요"),document.rootElement.addEventListener("click",function n(){document.rootElement.removeEventListener("click",n),console.error("start loading"),loadAndInit(e,t)})}function loadAndInit(e,t){console.error("loadAndInit",version),load(function(){init(e,t)})}function load(e){loader.load(["https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js","https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.10/Tone.min.js","https://cdnjs.cloudflare.com/ajax/libs/vexflow/1.2.89/vexflow-min.js","https://cdn.jsdelivr.net/npm/soundfont-player@0.11.0/dist/soundfont-player.min.js"],function(e){msg("스크립트 로딩("+e+")")},e)}var ns="http://www.w3.org/2000/svg",progressText;function createNSElement(e,t,n){var o=document.createElementNS(ns,e);if(t)for(var r in t)o.setAttribute(r,t[r]);return(n||document.rootElement).appendChild(o),o}function msg(e){progressText||(progressText=createNSElement("text",{x:100,y:18,fill:"#000"})),setTimeout(function(){console.info("progress:",e),progressText.textContent="v"+version+" "+e})}function init(e,t){var n,o,r,a,C,F,A,D;function G(e,t){e.notes.forEach(function(o,r){n.play(o,t,e.durations[r])})}function i(){console.error("ready"),msg("악보 변환중..."),(t=t||{}).scroll=!0,F=create(e,t),msg("재생 데이터 변환중..."),o=createPlayData(e),r=function(e){var t=0;return e.forEach(function(e){var n=e[e.length-1],o=0;n[1].durations.forEach(function(e){e>o&&(o=e)}),n[0]+o>t&&(t=n[0]+o)}),t}(o),console.error("totalTime",r),msg("스케쥴 생성중..."),a=schedule(o,G),A=!0,msg("재생준비 완료!"),(C=function(e){var t=createNSElement("g",{x:10,y:10}),n=createNSElement("rect",{width:70,height:20,x:10,y:5},t),o=createNSElement("text",{x:10,y:20},t);return o.textContent="재생/정지",o.setAttribute("pointer-events","none"),t.btn=n,t.addEventListener("click",e),t.setColor=function(e){n.style.fill=e},t.activeColor=function(){n.style.fill="rgb(53, 236, 31)"},t.deactiveColor=function(){n.style.fill="rgb(238, 51, 25)"},t}(c)).activeColor()}function l(){A&&(C&&C.activeColor(),console.error("stop"),F.stop(),a.forEach(function(e){return e.stop()}),Tone.Transport.stop(),Tone.Transport.clear(D))}function c(){A&&("started"==Tone.Transport.state?l():(l(),console.error("play"),C&&C.deactiveColor(),a.forEach(function(e){e.start("+0.1")}),F.start(),D=Tone.Transport.schedule(function(e){l()},"+"+(r+.5)),Tone.Transport.start("+0.5")))}VF=Vex.Flow,console.error("start tone setting"),Tone.Transport.bpm.value=e.bpm,msg("악기 로딩중..."),/iPhone|iPad|iPod/i.test(navigator.userAgent)?(n=new Tone.PolySynth(68,Tone.Synth).toMaster(),i()):Soundfont.instrument(Tone.context._context,"acoustic_grand_piano").then(function(e){console.error("instrument loaded"),n=e,i()})}}])});
//# sourceMappingURL=fms.umd.js.map