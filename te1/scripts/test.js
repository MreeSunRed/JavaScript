// window.open("https://baidu.com", "100px", "100px");
// window.moveBy(200, 100);
let but = document.getElementById("bt");
but.addEventListener("click", () => {
    console.log("button has been clicked!");
}, false);
function out() {//闭包
    let a= 0;
    function f() {
        a++;
        console.log(`a被使用了${a}次`);
    }
    return f;
}
let arr = new Array(1,2,3);
let outer = out();
console.log(arr.__proto__.__proto__);