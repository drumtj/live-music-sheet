declare var Tone;
declare var Vex;
declare var Soundfont;

var version = "0.22";

function createPlayData(data){
  let t = Tone.Time("16n").toSeconds();
  //let t = t16 * (120 / data.bpm);
  return data.data.map(function(track){
    let rr = [];
    track.data.forEach(function(node, i){
      if(!node) return;

      let r = [];
      let startTime = i * 32 * t;
      let ndata = node.data;
      for(let note in ndata){
        for(let x in ndata[note]){
          if(parseFloat(x) >= 32) continue;
          if(r[x] == undefined) r[x] = [[],[]];
          r[x][0].push(note);
          r[x][1].push(ndata[note][x]);
        }
      }

      let info;
      for(let time in r){
        if(r[time]){
          info = {beat:parseInt(time)};
          info.notes = r[time][0];
          info.durations = r[time][1].map(l=>Math.floor(l*t*10000)/10000);
          rr.push([Math.floor((parseFloat(time) * t + startTime)*10000)/10000, info]);
        }
      }
    })
    return rr.sort((a,b)=>a[0]>b[0]?1:-1);
  })
}

function schedule(playData, callback){
  console.error("start schedule");
  return playData.map(events=>{
    return new Tone.Part((time, noteInfo)=>{
      if(noteInfo.notes){
        //synth.triggerAttackRelease(noteInfo.notes, noteInfo.durations, time);
        callback(noteInfo, time);


      }
    }, events);
  })
}


var VF;

const noteToMidiMap = {"C0":0,"C#0":1,"D0":2,"D#0":3,"E0":4,"F0":5,"F#0":6,"G0":7,"G#0":8,"A0":9,"A#0":10,"B0":11,"C1":12,"C#1":13,"D1":14,"D#1":15,"E1":16,"F1":17,"F#1":18,"G1":19,"G#1":20,"A1":21,"A#1":22,"B1":23,"C2":24,"C#2":25,"D2":26,"D#2":27,"E2":28,"F2":29,"F#2":30,"G2":31,"G#2":32,"A2":33,"A#2":34,"B2":35,"C3":36,"C#3":37,"D3":38,"D#3":39,"E3":40,"F3":41,"F#3":42,"G3":43,"G#3":44,"A3":45,"A#3":46,"B3":47,"C4":48,"C#4":49,"D4":50,"D#4":51,"E4":52,"F4":53,"F#4":54,"G4":55,"G#4":56,"A4":57,"A#4":58,"B4":59,"C5":60,"C#5":61,"D5":62,"D#5":63,"E5":64,"F5":65,"F#5":66,"G5":67,"G#5":68,"A5":69,"A#5":70,"B5":71,"C6":72,"C#6":73,"D6":74,"D#6":75,"E6":76,"F6":77,"F#6":78,"G6":79,"G#6":80,"A6":81,"A#6":82,"B6":83,"C7":84,"C#7":85,"D7":86,"D#7":87,"E7":88,"F7":89,"F#7":90,"G7":91,"G#7":92,"A7":93,"A#7":94,"B7":95,"C8":96,"C#8":97,"D8":98,"D#8":99,"E8":100,"F8":101,"F#8":102,"G8":103,"G#8":104,"A8":105,"A#8":106,"B8":107,"C9":108};
const keyMap = {"C":["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8"],"bass":["G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],"G":["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],"D":["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],"A":["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],"E":["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],"B":["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"F#":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"C#":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],"F":["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],"Bb":["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],"Eb":["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],"Ab":["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],"Db":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],"Gb":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"Cb":["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"Em":["G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8"],"Bm":["D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8"],"F#m":["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8"],"C#m":["E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8"],"G#m":["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"],"D#m":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"A#m":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],"Dm":["F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8"],"Gm":["A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8"],"Cm":["D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8"],"Fm":["G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8"],"Bbm":["C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"],"Ebm":["F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8"],"Abm":["B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8"]};
let scoreTable = {
  "1": {score: 64, dot: "", beat: 0.0625, b64: 1, b16: 0.25},
  "2": {score: 32, dot: "", beat: 0.125, b64: 2, b16: 0.5},
  "3": {score: 32, dot: "d", beat: 0.1875, b64: 3, b16: 0.75},
  "4": {score: 16, dot: "", beat: 0.25, b64: 4, b16: 1},
  "6": {score: 16, dot: "d", beat: 0.375, b64: 6, b16: 1.5},
  "7": {score: 16, dot: "dd", beat: 0.4375, b64: 7, b16: 1.75},
  "8": {score: 8, dot: "", beat: 0.5, b64: 8, b16: 2},
  "12": {score: 8, dot: "d", beat: 0.75, b64: 12, b16: 3},
  "14": {score: 8, dot: "dd", beat: 0.875, b64: 14, b16: 3.5},
  "16": {score: 4, dot: "", beat: 1, b64: 16, b16: 4},
  "24": {score: 4, dot: "d", beat: 1.5, b64: 24, b16: 6},
  "28": {score: 4, dot: "dd", beat: 1.75, b64: 28, b16: 7},
  "32": {score: 2, dot: "", beat: 2, b64: 32, b16: 8},
  "48": {score: 2, dot: "d", beat: 3, b64: 48, b16: 12},
  "56": {score: 2, dot: "dd", beat: 3.5, b64: 56, b16: 14},
  "64": {score: 1, dot: "", beat: 4, b64: 64, b16: 16},
  "96": {score: 1, dot: "d", beat: 6, b64: 96, b16: 24},
  "112": {score: 1, dot: "dd", beat: 7, b64: 112, b16: 28}
}

const downConvertNoteMap = {
  C:"B", D:"C", E:"D", F:"E", G:"F", A:"G", B:"A"
}

// export const downConvertNoteFromMidi = midi=>{
//   return downConvertNote(Midi(midi));
// }

export const downConvertNote = note=>{
  let c = note.split('');
  if(c[1] == "b"){
    return downConvertNoteMap[c[0]] + (c[0] == "F" || c[0] == "C" ? "" : "#") + c[2];
  }
  return note;
}

export const toMidi = (note) => {
  return noteToMidiMap[note];
}

const sortNote = (notes, desc?) => {
  //이것은 새배열반환
  // return notes.map(key=>{
  //   return {key:key, midi:Tonal.midi(key)}
  // }).sort((a,b)=>desc?b.midi-a.midi:a.midi-b.midi).map(o=>o.key)

  //기존배열을 정리하도록 하자
  if(desc){
    return notes.sort((a, b)=>noteToMidiMap[b] - noteToMidiMap[a]);
  }else{
    return notes.sort((b, a)=>noteToMidiMap[b] - noteToMidiMap[a]);
  }
}

const convertKey = (note, key)=>{
  let i = keyMap["C"].indexOf(note);
  return keyMap[key][i];
}


//역순
let scoreIndex64b = Object.keys(scoreTable).map(n=>parseInt(n)).sort((a,b)=>-a-b);
let sil = scoreIndex64b.length;
// let t64;
// let ties = [];

let fillRed = {fillStyle: "red", strokeStyle: "red"};
let fillBlack = {fillStyle: "black", strokeStyle: "black"};

// function timeToDurations(time, rest){
//   return b64ToDurations(time / Tone.Time("64n").toSeconds(), rest);
// }



function b64ToDurations(b64, rest?){
  let r = rest ? "r" : "";
  return b64Split(b64).map(b=>scoreTable[b].score + scoreTable[b].dot + r);
}

function b64Split(b64){
  if(b64 <= 0){
    throw new Error("wrong param");
  }

  let subCount = -1;
  let duration = [];

  // debugger;
  while(1){
    if(scoreTable[b64]){
      duration.push(scoreTable[b64].b64);
      if(subCount == -1){
        break;
      }else{
        b64 = subCount;
        subCount = -1;
      }
    }else{
      for(let i=0; i<sil; i++){
        if(b64 >= scoreIndex64b[i]){
          subCount = b64 - scoreIndex64b[i];
          b64 = scoreIndex64b[i];
          break;
        }
      }
    }
  }

  return duration;
}

let noteParseExp = /^([a-gA-G])([#b]+)?([0-9])$/;
function noteToVFFormat(note){
  let m = note.match(noteParseExp);
  if(m){
    return {
      note: m[1] + (m[2]||"") + '/' + m[3],
      accidental: m[2]
    }
  }
  return null;
}

function noteToVFFormat2(notes){
  let ns = [], ac = [];
  // let dir = notes.length == 1 ? NoteUtil.toMidi(notes[0])
  // console.error("notes", notes);
  notes.forEach(note=>{
    // if(!note) console.error("????");
    let m = note.match(noteParseExp);
    if(m){
      ns.push(m[1] + (m[2]||"") + '/' + m[3]);
      ac.push(m[2]);
    }else{
      ns.push(null);
      ac.push(null);
    }
  })
  return {
    notes: ns,
    accidentals: ac
  };
}


function charCount(str, c) {
  var result = 0, i = 0, l = str.length;
  for(i;i<l;i++)if(str[i]==c)result++;
  return result;
};

const REST_NOTE_KEY = "c5";

function b64ToDuration(b64, rest?){
  if(scoreTable[b64]){
    return scoreTable[b64].score + scoreTable[b64].dot + (rest ? "r" : "");
  }else{
    return null;
  }
}

function makeRestNoteInfoSplitRest(note, offset, length){
  let subOffset = offset;
  let notes:any = b64Split(length).map(b=>{
    let rn = {//Object.assign({}, note);//{note:"rest", b64:subOffset, length:b};
      //note: [REST_NOTE_KEY],
      //쉼표는 duration이 같으면 중복표기 안함.
      note: [note || REST_NOTE_KEY],//[note[0]],//"rest",
      b64: subOffset,
      length: b,
      endB64: subOffset + b - 1,
      duration: b64ToDuration(b, true),
      isRest: true,
      fixedRest: !note ? true : false
    }
    subOffset += b;
    return rn;
  });
  if(notes.length > 1){
    notes[0].tieTail = notes[notes.length-1];
    notes[notes.length-1].tieHead = notes[0];
  }
  // console.error("makeRestNoteInfoSplitRest", offset, length, notes)
  return notes;
}


function createStaveNote(noteInfo, keyDiff?){
  let notes = noteInfo.note;

  if(keyDiff){
    if(!noteInfo.isRest || !noteInfo.fixedRest){
      notes = notes.map(note=>{
        return convertKey(note, keyDiff);
      });
    }
  }
  // if(!notes[0]){
  //   console.error("!!", noteInfo.note, notes, noteInfo);
  // }

  let info = noteToVFFormat2(notes);//noteInfo.note);

  let sn = new VF.StaveNote({ keys: info.notes, duration: noteInfo.duration, auto_stem: true});
  if(!noteInfo.isRest){
    info.accidentals.forEach((ac,i)=>{
      if(ac) sn.addAccidental(i, new VF.Accidental(ac));
    })
  }

  let l = charCount(noteInfo.duration, 'd');
  for(let i=0; i<l; i++){
    sn.addDotToAll();
  }
  return sn;
}

function convertToVexFlowData(data){
  return data.map((tdata,ti)=>{
    //console.error(tdata.data);
    // debugger;
  	let line = [];
  	tdata.data.forEach((ndata,ni)=>{
      // debugger;
  		// console.error("node data", ni, ndata);
  		if(ndata){
	      let bars = [[],[]], note, beat, bi;//, nni;
        // debugger;
        for(note in ndata.data){
          for(beat in ndata.data[note]){
  					bi = Math.floor(parseFloat(beat) / 16);
            //nni = ni * 2 + bi;
  					// if(!bars[bi]) bars[bi] = [];
            //1 node = 2 bar
            //1 bar = 16 note
            //1 note = 4 t64
            let n:any = { note:note, b64:Math.round((ni * 32 + parseFloat(beat)) * 4), length:Math.round(ndata.data[note][beat] * 4)};
            n.endB64 = n.b64 + n.length - 1;
  					bars[bi].push(n);
          }
        }
        bars.forEach(bar=>{
          bar.sort((a,b)=>a.b64-b.b64)
        });
    		line = line.concat(bars);
      }else if(ti < tdata.data.length-1){
        //마지막 빈노드가 아닌 앞쪽 빈노드는 빈 bar를 추가 ()
        //1 node = 2 bar
        line.push([], []);
      }
    })

    //#voice분리를 위해 notes배열을 만들고 앞노트부터 긴노트위주로 채워가며 만든다. voice분리가 끝나지 않은 노트가 없을때까지 voice분리 진행
    // let lastNote;
    let notes = line.reduce((r,bar)=>r.concat(bar), []);
    //b64오름차순, length내림차순 정렬
    notes.sort((a,b)=>a.b64==b.b64?a.length-b.length:a.b64-b.b64);
    let voices = [], voice, p;
    notes.forEach(note=>{
      //#### 여기에 voice 분리로직
      //노트가, 다른노트 시간대에 포함되면서 길이가 다른것은 다른 voice여야함
      p = 0;
      while(1){
        if(!voices[p]) voices[p] = [];
        voice = voices[p];
        let lastNote = voice.length ? voice[voice.length-1] : null;
        // console.error();
        if(lastNote == null || note.b64 > lastNote.endB64 || (note.b64 == lastNote.b64 && note.length == lastNote.length)){
          // if(lastNote == null) {
          //   console.error("when lastnote null add note to voice", note);
          // }
          voice.push(note);
          break;
        }else{
          p++;
        }
        if(p>100){
          console.error("??!!");
          break;
        }
      }
    })
    voices.forEach((voice, vi)=>voice.forEach(note=>note.voiceIndex=vi));
    //console.error("voices", voices);



    //#voice분리
    for(let li=0; li<line.length; li++){
      let bar = line[li];
      if(bar.length){
        line[li] = bar.reduce((r, note)=>{
          if(!r[note.voiceIndex]) r[note.voiceIndex] = [];
          r[note.voiceIndex].push(note);
          return r;
        }, []);
      }else{
        //bar[voice[]];
        line[li] = [[]]
      }
    }


    //#화음판단 및 합치기
    line.forEach((bar,li)=>{
      bar.forEach(voice=>{
        let prevB64, prevLength, tempArr, newVoice;
        //b64오름차순, length내림차순 정렬
        newVoice = voice.sort((a,b)=>a.b64==b.b64?a.length-b.length:a.b64-b.b64)
        .reduce((r,note,i)=>{
          if(note.b64 == prevB64 && note.length == prevLength){
            tempArr.push(note.note);
          }else{
            prevB64 = note.b64;
            prevLength = note.length;
            note.note = [note.note];
            tempArr = note.note;
            r.push(note);
          }
          return r;
        }, []);

        // console.error("?", newVoice);

        //노트정렬.  vexflow 샵 붙일때 voice에 담긴 note의 index를 넣는데
        //note가 자동정렬되기때문에 샵의위치가 안맞는 현상이 생겨서 미리 정렬함.
        newVoice.forEach(voice=>{
          if(voice.note.length > 1){
            sortNote(voice.note);
          }
        });

        voice.length = 0;
        voice.push(...newVoice);
      });
    });


    /////////// 이 밑 작업을 bar안에 voice가 있는 구조로 처리하도록 바꿔보자
    let fb64 = 16 * 4;
    line.forEach((bar,li)=>{
      let bars = [bar];
      // debugger;
      bar.forEach((voice,vi)=>{
        let lastNote = voice[voice.length-1];
        if(lastNote){
          let sliceB64 = (li+1) * fb64;
          if(lastNote.endB64 >= sliceB64){
            //다음 보이스는 다음bar에 있다. 현재 voice index와 같은위치의 voice
            let nextBar, nextVoice;
            if(li == line.length-1){
              nextVoice = [];
              nextBar = [nextVoice];
            }else{
              nextBar = line[li+1];
              if(!nextBar[vi]){
                nextVoice = [];
                nextBar[vi] = nextVoice;
              }else{
                nextVoice = nextBar[vi];
              }
              // if(!nextVoice){
              //   debugger;
              // }
            }
            //짤라서 다음 bar에 note추가
            //nextBar
            let n:any = {note:lastNote.note, b64:sliceB64, length:lastNote.endB64 - sliceB64 + 1};
            n.endB64 = n.b64 + n.length - 1;

            n.voiceIndex = lastNote.voiceIndex;
            nextVoice.unshift(n);
            //prevBar lastNode 수정
            // debugger;
            lastNote.endB64 = sliceB64 - 1;//lastNote.b64 + lastNote.length;
            lastNote.length = lastNote.endB64 - lastNote.b64 + 1;
            lastNote.tieTail = n;

            n.tieHead = lastNote;
            if(li == line.length-1){
              line.push(nextBar);
              bars.push(nextBar);
            }
          }
        }
      });

      //긴노트 분리(한 음표로 처리안되는 애들)
      bars.forEach(bar=>{
        bar.forEach(voice=>{
          let newVoice = voice.reduce((r,note)=>{
            let b64Offset = note.b64;
            let notes = b64Split(note.length).map((b,bi,arr)=>{
              let n = Object.assign({}, note);
              delete n.tieTail;
              delete n.tieHead;
              n.b64 = b64Offset;
              n.length = b;
              n.endB64 = n.b64 + n.length - 1;
              //b64Offset = n.endB64 + 1;
              b64Offset += b;
              return n;
            })
            // debugger;
            // if(notes.length > 1){
              //기존 노트정보가 여러 노트로 분할된경우기때문에 하는 처리
              if(note.tieHead){
                //tie의 꼬리가 분할된경우라면
                //분할된 notes의 마지막 note에 tie를 유지시킴
                note.tieHead.tieTail = notes[notes.length-1];
                notes[notes.length-1].tieHead = note.tieHead;
              }else if(note.tieTail){
                //tie의 머리가 분할된 경우라면
                //0번 note에 꼬리정보유지
                notes[0].tieTail = note.tieTail;
                note.tieTail.tieHead = notes[0];
              }else if(notes.length > 1){
                //기존 분할로 tie가 형성된 놈아 이닌 일반 노트라면 첫노트와 마지막노트를 tie로 연결
                notes[0].tieTail = notes[notes.length-1];
                notes[notes.length-1].tieHead = notes[0];
              }
            // }
            return r.concat(notes);
          }, []);
          voice.length = 0;
          voice.push(...newVoice);
        });
      });
    })

    //#쉼표작업
    // let maxB64 = line.length * fb64;
    line.forEach((bar,li)=>{
      //voice가 1개인 bar들만 쉼표를 고정위치(c5)로 처리한다.
      //voice가 여러개인 경우에는 구분을 위해 해당 note에 위치시킨다.
      let yfix = bar.length == 1;
      bar.forEach(voice=>{
        let newVoice;

        let offset = li * fb64;
        let offsetEnd = offset + fb64;
        //#쉼표추가 및 duration정보 추가
        // if(newVoice.length){
        newVoice = voice.reduce((r,note,i)=>{
          if(note.b64 - offset > 0){
            r.push(...makeRestNoteInfoSplitRest(yfix ? null : note.note[0], offset, note.b64 - offset));
          }

          note.duration = b64ToDuration(note.length);
          r.push(note);

          offset = note.endB64 + 1;
          return r;
        }, []);

        //각 마디의 끝 노트가 마디박자를 다 못채우고있다면 쉼표추가
        if(offset < offsetEnd){
          if(newVoice.length){
            //188
            // console.error("@@", "offset",offset, "offsetEnd", offsetEnd, "length", offsetEnd - offset);
            newVoice.push(...makeRestNoteInfoSplitRest(yfix ? null : newVoice[newVoice.length-1].note[0], offset, offsetEnd - offset));
          }else{
            newVoice.push(...makeRestNoteInfoSplitRest(null, li * fb64, fb64));
          }
        }

        voice.length = 0;
        voice.push(...newVoice);
      })
    })

  	return line;
  })
}



function drawNotation(vexflowData, options){
  //console.error("[drawNotation]");

  let {startBarNum, partGap, noteC, bpm, trackLength, topMargin, leftMargin, measureWidth, groupGap} = options;
  // console.error({noteC, bpm, trackLength, topMargin, leftMargin, measureWidth, groupGap});
  let groupYC = 0;
  startBarNum = startBarNum || 1;
  //if(document.rootElement) document.rootElement.remove();
  let el = document["rootElement"];//document.createElement("div");
  //let el = typeof elementId === "string" ? document.getElementById(elementId) : elementId;

  while(el.firstChild){
    el.removeChild(el.firstChild);
  }

  let renderer = new VF.Renderer(el, el.tagName == "CANVAS" ? VF.Renderer.Backends.CANVAS : VF.Renderer.Backends.SVG);

  // renderer.resize(measureWidth * 4 + leftMargin + 20, (noteC / 4) * groupGap + ((noteC / 4) * (trackLength-1) * groupGap) + groupGap);
  //악보 키 설정하는 UI 필요
  let keySignature = "C";//"B";
  //이걸로 안돼. 조표 바꾸는 방법이 필요하다
  // let keyDiff = ["B", "bass"];
  let keyDiff = [];//["B", "bass"];

  let context = renderer.getContext();


  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
  vexflowData.forEach((line,li)=>{
    line.forEach(bar=>{
      bar.forEach(voice=>{
        //#StaveNote 생성
        voice.forEach(note=>{
          note.staveNote = createStaveNote(note, keyDiff[li]);
        })
      })
    })
  })

  let voiceMax = 0;
  let barMax = vexflowData[0].length;
  let lineMax = vexflowData.length;
  let beamsList = [];
  let stavesList = [];
  let tiesList = [];

  renderer.resize(measureWidth * 4 + leftMargin + 20, (Math.ceil(barMax / 4) * (lineMax * groupGap + partGap)) + topMargin);
  //let tempo;
  //line -> track;
  vexflowData = vexflowData.map((line, li)=>{
    let staves = [];
    let ties = [];
    // if(line.length > barMax){
    //   barMax = line.length;
    // }
    //# voice생성, tie 연결, beam 생성
    line = line.map(bar=>{
      if(bar.length > voiceMax){
        voiceMax = bar.length;
      }
      return bar.map(voice=>{
        let notes = voice.map(note=>{
          if(note.tieTail){
            ties.push(new VF.StaveTie({
              first_note: note.staveNote,
              last_note: note.tieTail.staveNote,
              first_indices: [0],
              last_indices: [0]
            }))
          }
          return note.staveNote;
        })
        return new VF.Voice({num_beats: 4,  beat_value: 4}).addTickables(notes).setMode(VF.Voice.Mode.SOFT);
      })
    })



    // line.forEach((bar, bi)=>{
    for(let bi=0; bi<barMax; bi++){
      //line에서 빈 bar들은 쉼표로 채운다.
      let bar = line[bi] || [new VF.Voice({num_beats: 4,  beat_value: 4}).addTickables([new VF.StaveNote({ keys: ["a/4"], duration: "1r" })])];
      let stave = new VF.Stave(
        //x
        (bi%4) * measureWidth + leftMargin,
        //y
        // Math.floor(bi/4) * groupGap + (groupYC * (trackLength-1) * groupGap) + topMargin,
        (Math.floor(bi/4) * (lineMax * groupGap + partGap)) + (li * groupGap) + topMargin,
        //width
        measureWidth
      );
      staves.push(stave);

      if(bi%4 == 0) {
        if(li%2 == 0) stave.addClef("treble");
        else stave.addClef("bass");//percussion
        stave.addKeySignature(keySignature);

        if(bi == 0) stave.addTimeSignature("4/4");

        if(li==0){
          // stave.setText(bi+1);
          stave.setText(bi+startBarNum, VF.StaveModifier.Position.LEFT, {
            shift_x: -15,
            shift_y: -40
          });
          stave._isStartMeasure = true;
        }
      }

      if(li==0 && bi==0){
        stave.setTempo({duration:'4', bpm:bpm}, -20);
      }

      stave.setContext(context).draw();


      //beam 생성은 format전에 해야한다
      bar.forEach(voice=>{
        beamsList.push(VF.Beam.applyAndGetBeams(voice));
        // if(voice.tickables){
        //   beamsList.push(VF.Beam.generateBeams(voice.tickables, {
        //     maintain_stem_directions: true
        //   }))
        // }
      });
      //bar == voices
      //new VF.Formatter().joinVoices(bar, {align_rests:true}).formatToStave(bar, stave, {align_rests:true});
      new VF.Formatter()
      .joinVoices(bar)
      .formatToStave(bar, stave);

      bar.forEach((voice,vi)=>{
        voice.draw(context, stave);
        // console.error("voice", voice);
        // if(beamsList[vi]) beamsList[vi].forEach(beam=>beam.setContext(context).draw());
      });
    }

    ties.forEach(t=>t.setContext(context).draw());
    stavesList.push(staves);
    tiesList.push(ties);
    return line;
  })
  //console.error("stavesList", stavesList);

  let connectorList = [];
  if(lineMax > 1){
    for(let i=0; i<barMax; i+=4){
      let sc = new VF.StaveConnector(stavesList[0][i], stavesList[lineMax-1][i]);
      // sc.setType(VF.StaveConnector.type.BRACKET);
      sc.setType(VF.StaveConnector.type.BRACE);
      sc.setContext(context).draw();
    }
  }

  beamsList.forEach(beams=>beams.forEach(beam=>beam.setContext(context).draw()));


  function redraw(){
    let i,j;
    context.clear();
    for(i=0; i<stavesList.length; i++){
      for(j=0; j<stavesList[i].length; j++){
        stavesList[i][j].draw();
      }
    }
    for(i=0; i<connectorList.length; i++){
      for(j=0; j<connectorList[i].length; j++){
        connectorList[i][j].draw();
      }
    }
    vexflowData.forEach(line=>{
      line.forEach(bar=>{
        bar.forEach(voice=>voice.draw(context));
      })
    })
    for(i=0; i<tiesList.length; i++){
      for(j=0; j<tiesList[i].length; j++){
        tiesList[i][j].draw();
      }
    }
    for(i=0; i<beamsList.length; i++){
      for(j=0; j<beamsList[i].length; j++){
        beamsList[i][j].draw();
      }
    }
  }

  /*
  var svg = document["rootElement"].firstChild;
  var root = document["rootElement"];
  svg.setAttribute("xmlns", root.getAttribute("xmlns"));
  svg.setAttribute("xmlns:xlink", root.getAttribute("xmlns:xlink"));
  // svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
  root.remove();
  document.appendChild(svg);
  */

  return {
    renderer: renderer,
    context: context,
    stavesList: stavesList,
    connectorList: connectorList,
    tiesList: tiesList,
    beamsList: beamsList,
    voiceList: vexflowData,
    redraw: redraw
  }
}

function clearDrawNote(staveNote){
  if(staveNote._el && staveNote._el.parentElement){
    // console.error("remove prevEl", staveNote._el);
    staveNote._el.parentElement.removeChild(staveNote._el);
    staveNote._el = null;
  }
}

function drawNote(staveNote, style){
  clearDrawNote(staveNote);
  // if(staveNote._el){
  //   staveNote._el.parentElement.removeChild(staveNote._el);
  //   staveNote._el = null;
  // }
  staveNote._el = staveNote.context.openGroup('stavenote-highlight', staveNote.getAttribute('id'));
  staveNote.setStyle(style);
  // staveNote.setAttribute('el', staveNote.context.openGroup('stavenote', staveNote.getAttribute('id')));
  staveNote.context.openGroup('note', null, { pointerBBox: false });
  if (staveNote.hasStem() && !staveNote.beam){
    staveNote.drawStem();
    if(staveNote.flag){
      staveNote.flag.setStyle(style);
      staveNote.drawFlag();
    }
  }
  staveNote.drawNoteHeads();

  staveNote.context.closeGroup();
  staveNote.drawModifiers();
  staveNote.context.closeGroup();
}

function clearDrawBeam(staveNote){
  if(staveNote.beam){
    if(staveNote.beam._el && staveNote.beam._el.parentElement){
      staveNote.beam._el.parentElement.removeChild(staveNote.beam._el);
      staveNote.beam._el = null;
    }
  }
}


function drawBeam(staveNote, style){
  if(staveNote.beam){
    clearDrawBeam(staveNote);
    staveNote.beam._el = staveNote.context.openGroup('beam');
    // staveNote.beam.setStyle(style);
    // console.error("beam", staveNote.beam);
    // staveNote.beam.draw();
    /////////////////////////
    // if (!staveNote.beam.postFormatted) {
    //   staveNote.beam.postFormat();
    // }
    // console.error(staveNote.beam);
    // staveNote.beam.drawStems();
    // drawBeamLines(staveNote.beam);
    staveNote.context.setFillStyle(style.fillStyle);
    staveNote.context.setStrokeStyle("none");
    staveNote.beam.drawBeamLines();
    //////////////////////////
    staveNote.context.closeGroup();
  }
}

function clearDrawBeamStem(staveNote){
  // if(staveNote.beam){
    if(staveNote._beamStem_el && staveNote._beamStem_el.parentElement){
      staveNote._beamStem_el.parentElement.removeChild(staveNote._beamStem_el);
      staveNote._beamStem_el = null;
    }
  // }
}

function drawBeamStem(staveNote, style){
  if(staveNote.beam && staveNote.hasStem()){
    clearDrawBeamStem(staveNote);
    staveNote._beamStem_el = staveNote.context.openGroup('beam-stem');
    // staveNote._beamStem_el.note = staveNote;
    // staveNote._beamStem_el._style = style;
    staveNote.stem.setStyle(style);
    staveNote.stem.draw();
    staveNote.context.closeGroup();
  }
}

function drawNoteOn(staveNote, just?){
  // debugger;
  drawNote(staveNote, fillRed);
  if(staveNote.beam){
    if(just || staveNote.beam.notes[0] === staveNote){
      drawBeam(staveNote, fillRed);
      staveNote.beam._highlighted = true;
    }
    drawBeamStem(staveNote, fillRed);
  }
}

function drawNoteOff(staveNote, just?){
  // console.error("------start drawNoteOff", just);
  // return;
  // debugger;
  clearDrawNote(staveNote);
  // console.error("drawNote");
  // drawNote(staveNote, fillBlack);
  if(staveNote.beam){
    // if(staveNote.beam._highlighted){
      // drawBeamStem(staveNote, fillBlack);
      clearDrawBeamStem(staveNote);
      // console.error("drawBeamStem");
      if(just || staveNote.beam.notes[staveNote.beam.notes.length-1] === staveNote){
        // console.error("drawBeam black");
        clearDrawBeam(staveNote);
        // drawBeam(staveNote, fillBlack);
        staveNote.beam._highlighted = false;
      }//else if(staveNote.beam._highlighted){
        // console.error("drawBeam red");
        //붉은 beam위에 검정 stem이 올라오는걸 막기위해 붉은 beam을 한번 더 그림
        // drawBeam(staveNote, fillRed);
      //}
    // }
  }
  // console.error("------end drawNoteOff");
}

//pc가 느려지면 Tone 스케쥴이 호출이 안되고 넘어가는 경우가 있다(타이밍이 지나버리면 싱크위해 그러는듯)
//그런경우 사운드라면 소리가 안나고 넘어가는게 맞지만
//음표싱크표시라면 제거해야한다. noteOnList는 그것을 처리하기위한 오브젝트.
let noteOnList = {};

function clearNoteOnList(){
  for(let i in noteOnList){
    if(noteOnList[i].isOn){
      noteOff(noteOnList[i], true);
    }
    delete noteOnList[i];
  }
}

function noteOn(note){
  if(!note.isOn){
    //////////
    // console.error("noteOn", note);
    for(let i in noteOnList){
      if(noteOnList[i].endB64 < note.b64){
        // console.error("지울대상이다. 켜져있는가?", noteOnList[i].isOn);
        if(noteOnList[i].isOn){
          noteOff(noteOnList[i], true);
        }
        delete noteOnList[i];
      }
    }
    noteOnList[note.id] = note;

    try{
      drawNoteOn(note.staveNote);
      note.isOn = true;
    }catch(e){
      console.error(note, e);
    }
  }
}


function noteOff(note, just?){
  //이미 노트가 off됐지만 beam은 살아있을때, clear호출시
  //살아있음을 확인하기위해 isOn외 판단 추가
  if(note.isOn || (just && note.staveNote.beam && note.staveNote.beam._highlighted)){
    //console.error("noteOff", note);
    delete noteOnList[note.id];
    drawNoteOff(note.staveNote, just);
    note.isOn = false;
  }
}

let t64;

let defaultDrawOption = {
  topMargin: 80,
  leftMargin: 50,
  measureWidth: 299,
  groupGap: 140,//bar group
  partGap: 70
}

function create(data, options?){
  console.error("data", data);

  let lineList = convertToVexFlowData(data.data);
  //console.error("lineList", lineList);

  options = Object.assign({}, defaultDrawOption, options);
  options.bpm = data.bpm;
  options.noteC = data.nodeLength * 2;
  options.trackLength = data.data.length;


  let ctx = drawNotation(lineList, options).context;


  // 하이라이트용 part 생성 테스트
  t64 = Tone.Time("64n").toSeconds();
  let sync = createSync({scrollContainer:options.scroll?document["rootElement"]:null});
  sync.setContext(ctx);
  sync.setLineList(lineList);
  return sync;
}

//let isScrolling;
let scrollOffset = 0;
let scrollDuration = 500;
function scrollToStave(con, staveY){
  if(
   (con.scrollTop > staveY - scrollOffset || con.scrollTop <= staveY - scrollOffset - (window.innerHeight - 500))
  ){
    // console.error("scroll");
    con.scrollTo(0, staveY - scrollOffset);
  }
}

function createSync(opt?){
  opt = opt || {};
  let startNote, currentStave;
  let isScrolling = !!opt.scrollContainer;
  let part = new Tone.Part((time, note)=>{
    Tone.Draw.schedule(()=>{
      // console.error(time, note);
      //정지시에도 스케쥴이 진행된다. part의 state또한 started상태로 스케쥴이 정지될때까지 남아있다.
      //part에 _stopped속성을 만들어 stop시킨 상황인지 기록하여 판단하도록하여
      //정지후 note가 하이라이트되지 않도록 처리했다.
      if(!part._stopped){
        //start시 첫이벤트가 간혹 전혀 다른 위치의 이벤트를 가져오는 경우가 있다.
        if(startNote){
          if(startNote === note){
            startNote = null;
            clearNoteOnList();
          }else{
            return;
          }
        }
        // note.time = time;
        //console.error("noteOn", note);
        noteOn(note);
        if(isScrolling && note.staveNote.stave && note.staveNote.stave._isStartMeasure && currentStave != note.staveNote.stave){
          scrollToStave(opt.scrollContainer, note.staveNote.stave.y);
          currentStave = note.staveNote.stave;
        }
      }
    }, time);
  });
  part._stopped = true;

  let offPart = new Tone.Part((time, note)=>{
    Tone.Draw.schedule(()=>{
      if(!part._stopped){
        noteOff(note);
      }
    }, time);
  })

  let notes = [];
  function setLineList(list){
    part.removeAll();
    offPart.removeAll();
    list.forEach(line=>{
      line.forEach(bar=>{
        bar.forEach(voice=>{
          voice.forEach(note=>{
            part.add(note.b64 * t64, note);
            offPart.add(note.endB64 * t64, note);
            // console.error(note.b64 * t64, note.note);
            note.id = '' + Date.now() + Math.round(Math.random()*10000);
            notes.push(note);
            notes[note.id] = note;
            // console.error(note.staveNote.getBoundingBox());
            //console.error(note);
          })
        })
      })
    })
    // console.error(1, notes.length);
  }
  // let c=0;
  return {
    notes: notes,
    part: part,
    offPart: offPart,
    start: function(){
      // console.error("start", c++);
      // console.error(this.part, Tone.Transport);
      // console.error(this.part.at(0));
      // console.error(this.part.at("0:0:2"));
      startNote = this.part.at(0).value;
      this.part._stopped = false;
      this.part.start("+0.1");
      this.offPart.start("+0.1");
    },
    stop: function(){
      startNote = null;
      this.part._stopped = true;
      this.part.stop();
      this.offPart.stop();
      Tone.Draw.cancel();
      this.clear();
    },
    clear: function(){
      // console.error(1, notes.length);
      // console.error(notes);
      notes.forEach(note=>noteOff(note, true));
      /////noteOff시 노드를 black으로 추가하는 방법에서 red노드를 제거하는 방법을 구현했다. 아래는 필요없음.
      // 항상 노드를 추가해서 표현하기 때문에 잔여물이 있다. 안지워도 되긴하는데,, 지우자
      // if(this.ctx){
      //   this.ctx.element.querySelectorAll(".vf-beam, .vf-beam-stem, .vf-stavenote-highlight").forEach(node=>{
      //     node.remove();
      //   });
      // }
    },
    setLineList: setLineList,
    setContext: function(ctx){
      this.ctx = ctx;
    }
  };
}


///////loader///////
var E = eval;
export var loader = (function(){
  var i = 0, max, list, each, done;
  function start(_list, _each, _done){
    i = 0;
    max = _list.length;
    list = _list;
    if(_done){
      each = _each;
      done = _done;
    }else{
      each = null;
      done = _each;
    }

    load(list[i]);
  }

  function load(src){
    if(i >= max) {
      console.error("over index");
      return;
    }

    console.error("load script:", src);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", src, true);
    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          E(xhr.responseText);
          loadComplete();
        } else {
          console.error("실패: ", xhr.status);
        }
      }
    }
    xhr.send(null);
  }

  function loadComplete(){
    if(++i < max){
      if(each){
        //setTimeout(function(){
          each(i-1);
        //})
      }
      load(list[i]);
    }else{
      console.error("load complete");
      if(done) done();
    }
  }

  return {
    load: start
  }
})();
//////////////
export function ready(data, opt?){
  msg("악보 연주가 가능한 모드입니다. 연주준비를 원하시면 페이지를 클릭하세요");
  document["rootElement"].addEventListener("click", function rootClick(){
    document["rootElement"].removeEventListener("click", rootClick);
    console.error("start loading");
    loadAndInit(data, opt);
  });
}

export function loadAndInit(data, opt?){
  console.error("loadAndInit", version);
  load(function(){
    init(data, opt);
  });
}

export function load(done){
  var scripts = [
    //"https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/tone/13.8.10/Tone.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/vexflow/1.2.89/vexflow-min.js",
    "https://cdn.jsdelivr.net/npm/soundfont-player@0.11.0/dist/soundfont-player.min.js"
  ];
  loader.load(scripts, function(i){
    msg("스크립트 로딩(" + i + ")");
  }, done);
}



var ns = "http://www.w3.org/2000/svg";
var progressText;
function createNSElement(tagName, attr?, parant?){
  var el = document.createElementNS(ns, tagName);
  if(attr){
    for(var o in attr){
      el.setAttribute(o, attr[o]);
    }
  }
  (parant || document["rootElement"]).appendChild(el);
  return el;
}
export function msg(str){
  if(!progressText) progressText = createNSElement("text", {x:100, y:18, fill:"#000"});
  setTimeout(function(){
    console.info("progress:", str);
    progressText.textContent = "v" + version + " " + str;
  })
}

export function base64ToBuffer(dataURI) {
    var binary = window.atob(dataURI);
    var buffer = new ArrayBuffer(binary.length);
    var bytes = new Uint8Array(buffer);
    for (var i = 0; i < buffer.byteLength; i++) {
        bytes[i] = binary.charCodeAt(i) & 0xFF;
    }
    return buffer;
};

var BASE64_MARKER = ';base64,';
export function convertDataURIToBinary(dataURI) {
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(var i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

export function base64ToBlob(dataURI){
  new Blob([convertDataURIToBinary(dataURI)], {type : 'audio/mp3'});
}

var synth;

// export function setSynth(s){
//   synth = s;
// }

export function init(data, opt?){
  VF = Vex.Flow;



  console.error("start tone setting");
  //synth = new Tone.PolySynth(68, Tone.Synth).toMaster();
  Tone.Transport.bpm.value = data.bpm;
  var playData, totalTime, parts, btn, highlight;
  var playSynthFunc;
  if(opt && opt.synth && opt.playSynthFunc){
    synth = opt.synth;
    playSynthFunc = opt.playSynthFunc;
    ready();
  }else{
    msg("악기 로딩중...");
    if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
      //isToneSynth = true;
      synth = new Tone.PolySynth(68, Tone.Synth).toMaster();
      playSynthFunc = function(synth, noteInfo, time){
        synth.triggerAttackRelease(noteInfo.notes, noteInfo.durations, time);
      }
      ready();
    }else{
      Soundfont.instrument(Tone.context._context, 'acoustic_grand_piano').then(function (piano) {
        console.error("instrument loaded");
        synth = piano;
        playSynthFunc = function(synth, noteInfo, time){
          noteInfo.notes.forEach(function(note, i){
            synth.play(note, time, noteInfo.durations[i]);
          })
        }
        //document["rootElement"].appendChild(progressText);
        ready();
      })
    }
  }



  function createPlayBtn(callback){
    var g = createNSElement("g", {x:10, y:10}) as any;
    var btn = createNSElement("rect", {
      width: 70,
      height: 20,
      x: 10,
      y: 5
    }, g) as any;
    var txt = createNSElement("text", {
      x: 10,
      y: 20
    }, g);
    txt.textContent = "재생/정지";
    txt.setAttribute("pointer-events", "none");
    g.btn = btn;
    g.addEventListener("click", callback);
    g.setColor = function(color){
      btn.style.fill = color;
    }
    g.activeColor = function(){
      btn.style.fill = "rgb(53, 236, 31)";
    }
    g.deactiveColor = function(){
      btn.style.fill = "rgb(238, 51, 25)";
    }
    return g;
  }

  function getTotalTime(playData){
    var max = 0;
    playData.forEach(function(events){
      var last = events[events.length-1];
      var maxDu = 0;
      last[1].durations.forEach(function(d){
        if(d > maxDu){
          maxDu = d;
        }
      })
      if(last[0] + maxDu > max){
        max = last[0] + maxDu;
      }
    })
    return max;
  }

  var isReady;

  function tick(noteInfo, time){
    playSynthFunc(synth, noteInfo, time);
    // if(isToneSynth){
    //   synth.triggerAttackRelease(noteInfo.notes, noteInfo.durations, time);
    // }else{
    //   noteInfo.notes.forEach(function(note, i){
    //     synth.play(note, time, noteInfo.durations[i]);
    //   })
    // }
  }

  function ready(){
    console.error("ready");
    msg("악보 변환중...");
    opt = opt || {};
    opt.scroll = true;
    highlight = create(data, opt);

    msg("재생 데이터 변환중...");
    playData = createPlayData(data);
    totalTime = getTotalTime(playData);
    console.error("totalTime", totalTime);
    msg("스케쥴 생성중...");
    parts = schedule(playData, tick);
    isReady = true;
    msg("재생준비 완료!");
    btn = createPlayBtn(play);
    btn.activeColor();
  }



  function stop(){
    if(!isReady) return;
    if(btn) btn.activeColor();
    console.error("stop");
    highlight.stop();
    parts.forEach(part=>part.stop());
    Tone.Transport.stop();
    Tone.Transport.clear(endScheduleId);
  }

  var endScheduleId;
  function play(){
    if(!isReady) return;
    if(Tone.Transport.state == "started"){
      stop();
    }else{
      stop();
      console.error("play");
      if(btn) btn.deactiveColor();
      parts.forEach(part=>{
        part.start("+0.1");
      });
      highlight.start();
      endScheduleId = Tone.Transport.schedule(function(time){
      	stop();
      }, "+" + (totalTime+0.5));
      Tone.Transport.start("+0.5");
    }
  }
}


//////////////////////////
