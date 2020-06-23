// Further Exploration of after Midnight part 1
// How would you approach this problem if you were allowed to use JavaScript's
// Date class? Suppose you also needed to consider the day of week?
// (Assume that deltaMinutes is the number of minutes before or after midnight
// between Saturday and Sunday; in such a method, a deltaMinutes value of -4231
// would need to produce a return value of Thursday 01:29.)

let daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

function timeOfDay(deltaMinutes) {
  let aSunday = new Date('Sunday 21 June 2020 00:00');
  aSunday.setMinutes(aSunday.getMinutes() + deltaMinutes);

  let day = daysOfWeek[aSunday.getDay()];
  let hours = aSunday.getHours();
  let minutes = aSunday.getMinutes();

  return formatTime(day, hours, minutes);
}

function formatTime(day, hours, minutes) {
  return `${day} ${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

console.log(timeOfDay(-4231));  // => "01:29"
console.log(timeOfDay(0));      // => "00:00"
console.log(timeOfDay(-3));     // => "23:57"
console.log(timeOfDay(35));     // => "00:35"
console.log(timeOfDay(-1437));  // => "00:03"
console.log(timeOfDay(3000));   // => "02:00"
console.log(timeOfDay(800));    // => "13:20"
console.log(timeOfDay(-4231));  // => "01:29"