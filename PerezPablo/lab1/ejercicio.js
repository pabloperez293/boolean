
let fecha = new Date()
let dia = fecha.getDay()
switch(dia) {
    case 0:
        mensaje = "Por fin es domingo";
        break;
    case 1:
        mensaje = "Por fin es lunes";
        break;
    case 2:
        mensaje = "Por fin es martes";
        break;
    case 3:
        mensaje = "Feliz 25 de mayo cae miercoles";
        break;
    case 4:
        mensaje = "Por fin es jueves";
        break;
    case 5:
        mensaje = "Por fin es viernes";
        break;
    case 6:
        mensaje = "Por fin es sabado";
        break;
}
alert(mensaje)