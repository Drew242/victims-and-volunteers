var victimsInput = prompt("How many victims?")
var vicNames = [];
var vicNumbers = [];
var vicAddresses = [];

for (i = 0; i < parseInt(victimsInput); i++) {
  vicNames.push(prompt("Victim's Name?"));
  vicNumbers.push(prompt("Victim's Phone Number?"));
  vicAddresses.push(prompt("Victim's Address?"));
}

var volunteersInput = prompt("How many volunteers?")
var volNames = [];
var volNumbers = [];
var volAddresses = [];

for (i = 0; i < parseInt(victimsInput); i++) {
  volNames.push(prompt("Volunteer's Name?"));
  volNumbers.push(prompt("Volunteer's Phone Number?"));
  volAddresses.push(prompt("Volunteers's Address?"));
}

var vics = "Victims " + vicNames.length + ": " + vicNames.join(', ');
var vols = "Volunteers " + volNames.length + ": " + volNames.join(', ');

alert(vics + "\n" + vols);
