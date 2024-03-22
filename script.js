window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenykezeles1();
    esemenykezeles2();
    esemenykezeles3();
});


function elemekElerese1() {
    let TART = $("#f1").html()
    console.log(TART)
}
function elemekElerese2() {
    const ELEM = $("#ide")
    ELEM.html("Jó reggelt!")
}
function elemekElerese3() {
    const CLASSKIIR = $(".ide")
    CLASSKIIR.html("Jó reggelt!")
}
function elemekElerese4(){
    const listaELEM = $(".lista")
    let txt = ""
    txt += `<ul>`
    for(let i = 0; i<5; i++){
        let veletlenSzam = Math.random()*20+10
        txt += `<li>${Math.floor(veletlenSzam)}</li>`
    }
    txt += `</ul>`
    listaELEM.html(txt)
}
function elemekFormazasa1(){
    const STILUSELEM = $(".lista")
    $(STILUSELEM).addClass("formazott")
}
function esemenykezeles1(){
    const STILUSELEM = $(".lista")
    const ESEMENYKEZELO = $(".lista li")
    ESEMENYKEZELO.on("click", function(){
        STILUSELEM.eq(0).prepend('<div class="kattintasutan">')
        STILUSELEM.append("</div>")
    })
}

function esemenykezeles2(){
    const feladatELEM = $("#f1")
    feladatELEM.html("<button>OK</button>")
    const gombELEM = $("#f1 button")
    gombELEM.on("click", function(){
        feladatELEM.html(`<div class="kep"><img src="kep.webp"></div>`)
    })
}

function esemenykezeles3(){
    const kepELEM = $(".kep img")
    kepELEM.on("click",function(){
        console.log("enter")
    })
}