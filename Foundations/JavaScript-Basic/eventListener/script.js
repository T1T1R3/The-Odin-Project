const var1 = document.getElementById("idSelector");
const var2 = document.querySelector("p");

var1.addEventListener("click", helloWorld);

let a = 1;

function helloWorld(){
	if(a === 1){
        var2.textContent = "Primeiro";
    }
    else if(a === 2){
        var2.textContent = "Segundo";
    }
    else if(a === 3){
        var2.textContent = "Terceiro";
    }
}