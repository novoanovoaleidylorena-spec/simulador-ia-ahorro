const imagenes = {

viaje:"https://cdn-icons-png.flaticon.com/512/201/201623.png",
casa:"https://cdn-icons-png.flaticon.com/512/25/25694.png",
carro:"https://cdn-icons-png.flaticon.com/512/743/743007.png",
moto:"https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
universidad:"https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
negocio:"https://cdn-icons-png.flaticon.com/512/942/942748.png",
computador:"https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
celular:"https://cdn-icons-png.flaticon.com/512/545/545245.png",
inversion:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
vacaciones:"https://cdn-icons-png.flaticon.com/512/854/854894.png",
mudanza:"https://cdn-icons-png.flaticon.com/512/679/679720.png",
boda:"https://cdn-icons-png.flaticon.com/512/833/833472.png",
gaming:"https://cdn-icons-png.flaticon.com/512/686/686589.png",
cursoIA:"https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
ahorro:"https://cdn-icons-png.flaticon.com/512/3135/3135679.png"

}

function cambiarImagen(){

let meta = document.getElementById("meta").value

document.getElementById("imagenMeta").src = imagenes[meta]

}

function calcular(){

let ingresos = parseFloat(document.getElementById("ingresos").value)

let gastos = parseFloat(document.getElementById("gastos").value)

let costo = parseFloat(document.getElementById("costo").value)

let ahorro = ingresos - gastos

if(ahorro <= 0){

document.getElementById("resultado").innerHTML = "No tienes capacidad de ahorro"

return

}

let meses = Math.ceil(costo / ahorro)

document.getElementById("resultado").innerHTML =
"Podrás lograr tu meta en <br><b>"+meses+" meses</b>"

}
