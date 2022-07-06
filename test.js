new Date().toLocaleDateString('en-UK', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
console.log(new Date().toLocaleDateString('en-UK', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}));
// Wednesday, 6 July 2022
console.log(new Date().toLocaleDateString('en-UK', {weekday: 'long'}));
// Wednesday
console.log(new Date().toLocaleTimeString('en-UK', {hour: 'numeric', minute: 'numeric', second: 'numeric'}));
// 23:13:02