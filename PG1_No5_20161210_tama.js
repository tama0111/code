var retusuu = 0
var gyousuu = 0
var eigo = ["C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

tatesuuzi();
tatesuuzi();


function yoko(){
 var yoko_obj = document.getElementsByClassName("yoko");
 for(i = 0; i < yoko_obj.length; i++){
  var td_element = document.createElement("td");
  td_element.innerHTML = "<form><input type='text'></form>";
  yoko_obj[i].appendChild(td_element);
 }
 yokoeigo();
}

function tate(){
 var tate_kesu = document.getElementById("kesu")
 tate_kesu.innerHTML = tate_kesu.innerHTML.replace(/1/g,"");
 var tate_obj = document.getElementById("tate");
 var tate_cp = tate_obj.cloneNode(true);
 var tate_bas = document.getElementById("cp");
 tate_bas.appendChild(tate_cp);
 tatesuuzi();
 tate_kesu.innerHTML = "1"
}

function yokoeigo(){
 var yoko_eigobj = document.getElementById("eigo");
 var yoko_eigoele = document.createElement("td");
 yoko_eigoele.innerHTML = eigo[retusuu];
 yoko_eigobj.appendChild(yoko_eigoele);
 retusuu++;
}

function tatesuuzi(){
 var tate_suuzi = document.getElementsByClassName("suuzi");
  var tate_suuziele = document.createElement("td");
  tate_suuziele.innerHTML = gyousuu+1
  tate_suuzi[gyousuu].appendChild(tate_suuziele);
  gyousuu++;
}
