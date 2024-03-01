window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenykezeles1()
});


function elemekElerese1() {
    const elsoELEM = document.querySelectorAll("section h2")[0]
    console.log(elsoELEM)
}
function elemekElerese2() {
    const IDE = document.getElementById("ide")
    IDE.innerHTML = `<p>Jó reggelt</p>`
}
function elemekElerese3() {
    const classIDE = document.querySelectorAll(".ide")[0]
    classIDE.innerHTML = `<p>Jó reggelt</p>`
}
function elemekElerese4(){
    const listaELEM = document.querySelectorAll(".lista")[0]
    let txt = ""
    txt += `<ul>`
    for(let i = 0; i<5; i++){
        let veletlenSzam = Math.random()*20+10
        txt += `<li>${Math.floor(veletlenSzam)}</li>`
    }
    txt += `</ul>`
    listaELEM.innerHTML += txt;
}
function elemekFormazasa1(){
    const ELEM = document.querySelectorAll(".lista")[0]
    ELEM.classList.add("formazott")
}
function esemenykezeles1(){
    const ESEMENYKEZELO = document.querySelectorAll(".lista li")[0]
    for(let i = 0; i<ESEMENYKEZELO.length;i++){
        ESEMENYKEZELO[i].addEventListener("click")
    }
}
