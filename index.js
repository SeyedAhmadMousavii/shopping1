const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const pResult = document.querySelector(".result");
const btn = document.querySelector("button");
btn.addEventListener("click",x);
function x(){
    p1.innerHTML = (input1.value) * 200;
    p2.innerHTML = (input2.value) * 300;
    p3.innerHTML = (input3.value) * 400;
    pResult.innerHTML = parseInt(p1.innerHTML) + parseInt(p2.innerHTML) + parseInt(p3.innerHTML);
}

