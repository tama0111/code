kiroku= "";

function getNum(){
 var s = document.kazu.mennsuu.value;
 var r = Math.floor(Math.random()*s)+1;
 kiroku = kiroku +" "+ r;
 document.forml.sai.value = r;
 document.getElementById("rireki").innerHTML = kiroku;
}
