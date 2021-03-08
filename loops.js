for (let i = 0; i < 25; i++) {
  if (i=1) {console.log("I am a strange loop")}
  else {console.log "I am ${i} strange loop$"}
}

let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable() < 5);
