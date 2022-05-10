// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const app = document.getElementById('aaa');
var upate = '';
console.log('aaadddda');
var loop=0;
const set = function () {
  while (app.innerHTML.indexOf('&nbsp;&nbsp;')) {
    console.log(loop);
    upate = app.innerHTML.replaceAll('&nbsp;&nbsp;', '&nbsp;');
    app.innerHTML = upate;
    loop++;
  }
};
setTimeout(function () {
  console.log('eeee');
  app.classList.add('bg-yellow');
  set();
}, 3000);
console.log('dddd');