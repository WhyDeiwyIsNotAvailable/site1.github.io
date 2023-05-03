const conteiner = document.querySelector(".conteiner");
let hex = [0,1,2,3,4,5,6,7,8,9,"A", "B","C","D","E","F"];

for(let i = 0; i < 35; i++){
    const colorCont = document.createElement("div");
    colorCont.classList.add("color-conteiner");
    colorCont.textContent = randCol();
    colorCont.style.backgroundColor = randCol();
    conteiner.appendChild(colorCont);
}

function randCol(){
    var h = "#";
    for(let i = 0; i < 6; i++){
        h += hex[Math.floor(Math.random() * hex.length)];
    }
    return h;
}