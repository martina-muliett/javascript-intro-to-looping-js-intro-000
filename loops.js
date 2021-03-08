function forLoop [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] {
  for (let i = 0; i < 25; i++) {
  if (i = 1) {console.log("I am a strange loop")}
  else {console.log "I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."}
}
}

let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 5);
