function forLoop (array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) {array.push("I am a strange loop")}
  else {array.push("I am ${i} strange loop$")}
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
