let timmer = setTimeout(function () {
  console.log(timmer);
}, 1000);
setTimeout("console.log(timmer);", 1000);
var obj = {
  foo: function () {
    console.log(this);
  }
};
obj.foo()
let time1 =setTimeout(obj.foo.bind(obj), 1000);
let time2 = setTimeout(obj.foo.bind(this), 1000);
let time3 = setTimeout(obj.foo.call(obj), 1000);
let time4=setTimeout(() => {
  console.log(time4);
}, 1000);
clearTimeout(time4);
clearTimeout(6);
clearInterval();
let seti = setInterval(() => {//每个一段时间
  console.log("setInterval");
}, 1000);
setTimeout(()=> {
  clearInterval(seti)
}, 3000)
let div = document.getElementById("test");
let x = 0, y = 0;
div.style.left = "0px";
div.style.top = "0px";
div.style.position = "absolute";
let test = setInterval(()=> {
  x++, y++;
  div.style.left = `${x}px`;
  div.style.top= `${y}px`;
  console.log(x,y)
}, 10)
setTimeout(() => {
  clearInterval(test);
}, 6000);