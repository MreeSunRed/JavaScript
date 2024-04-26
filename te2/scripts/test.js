window.onload = function () {
  //   alert("666");
  document.onclick = function (e) {
    if (e.target.id == "div") {
      if (e.target.style.background == "black")
        e.target.style.background = "red";
      else {
        e.target.style.background = "black";
      }
    }
  };
};
// var error = new Error("cuole!");
// try {
//   // error1 = new error("cuole!");
// //   let i = 1 / 0;
//   console.log("cuolema");
// //   asdasdasd;
//   console.log(i);
// } catch (e) {
//   console.log("cuole!");
//   console.log(e);
// }
// console.log("zmshuo");

//promise
// new Promise((resolve, reject) => {
//     let aaa = 1
//     console.log(aaa)
//     // if (err) reject(err);
//     resolve(aaa)
// })
//     .then((res) => {
//     console.log("this is then")
//     })
//     .catch((err) => {
//     console.log("cuole!")
//     })
// console.log("hello")
//
//try catch 捕捉不到promise的错误除非加上async await
async function a() {
    try {
        await new Promise((resolve, reject) => {
            console.log(aaaa);
        })
    } catch(e) {
        console.log("cuole!")
    }
}
a();