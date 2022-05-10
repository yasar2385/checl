// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const app = document.getElementById('aaa');
var upate = '';
console.log('aaaa');
const set = function () {
  while (app.innerHTML.indexOf('&nbsp;&nbsp;')) {
    upate = app.innerHTML.replaceAll('&nbsp;&nbsp;', '&nbsp;');
    app.innerHTML = upate;
  }
};
setTimeout(function () {
  console.log('eeee');
  app.classList.add('bg-yellow');
  set();
}, 3000);
console.log('dddd');
