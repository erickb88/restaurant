// const current = new Date();
// const today = current.toLocaleDateString('en-US',{weekday:"long"});
// const clock = current.toLocaleTimeString();
// const output = `Today is: ${today} \nThe current time is: ${clock}`;
// console.log(output);
function displayCount() {
  const refresh = 1000;
  mytime = setTimeout(clock, refresh);
}
function clock() {
  const current = new Date();
  const output = `Today is ${current.toLocaleDateString("en-us", {
    weekday: "long",year:"numeric",month:"numeric", day:"numeric"
  })}<br>\n Current time: ${current.toLocaleTimeString("ro-RO")}`;
  document.getElementById("date").innerHTML = output;
  displayCount();
}
clock();
