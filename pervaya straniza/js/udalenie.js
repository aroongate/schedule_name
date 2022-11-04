document.querySelector("#krestik").onclick = function(){
    let elem = document.getElementById("test__prepoda");
	elem.parentNode.removeChild(elem)
    let elem2 = document.getElementById("test__prepoda__nadpis__2");
	elem.parentNode.removeChild(elem2)
    let elem3 = document.getElementById("krestik");
	elem.parentNode.removeChild(elem3)
}
