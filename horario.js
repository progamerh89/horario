function comprobar() {

  vacacion = document.getElementById("vacacion").value;

  dia = document.getElementById("dia").value;
  
  if (vacacion == "si"){
      window.location = "horario_vacaciones.html";
  }

  else if (vacacion == "no"){
   if(dia == "lunes"){
    window.location = "horario_lunes.html";
    }

     else if (dia == "martes"){
     window.location = "horario_martes.html"
    }

    else if (dia == "miercoles"){
      window.location = "horario_miercoles.html"
     }

     else if (dia == "jueves"){
      window.location = "horario_jueves.html"
     }

     else if (dia == "viernes"){
      window.location = "horario_viernes.html"
     }

     else if (dia == "sabado"){
      window.location = "horario_sabado.html"
     }
     else if (dia == "domingo"){
      window.location = "horario_domingo.html"
     }

     else {
      window.alert ("escribe un dia de la semana, sin acento y con minusculas en que dia de la semana es")
     }




  }

  else {
    window.alert ("escribe si o no en son vacaciones y con minusculas")
  }


}