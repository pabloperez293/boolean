let rol = Number(prompt("Cual es tu rol?"))
let clave = Number(prompt("cual es tu clave?"))
let name = Number(prompt("caul es su nombre"))

if("admin" || "recursos"  === rol  ){
    if(clave == "1234"){
        let name = document.querySelector("h1")

        name.innerHTML = "Bienvenido "+[name]+" ingresa a la app"
}
}
else{        
    alert("Datos incorrectos, vuelva a intentarlo porfavor") 
}

