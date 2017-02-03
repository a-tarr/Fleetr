function weightedRand(spec) {
  var i, j, table=[];
  for (i in spec) {
    for (j=0; j<spec[i]*100; j++) {
      table.push(i);
    }
  }
  return function() {
    return table[Math.floor(Math.random() * table.length)];
  }
}
var rand012 = weightedRand({'ship':0.35, 'squadron':0.65});

console.log(rand012()); // random in distribution...
