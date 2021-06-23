alert("Bienvenid@, ingresa los datos solictados");
        var fecha="dia,tarde, noche";
        var horas=fecha.getHours();

        var nombre="";
        var edad =0;
        var localidad="";
        var profesion="";
        nombre = prompt("Cual es tu nombre?");
        edad = prompt("Cual es tu edad?")
        localidad = prompt("Cual es tu localidad");
        profesion = prompt ("cual es tu profesion?");
        var respuesta = confirm("Los datos son correctos?"+ 
                                            "/n Nombre:"+nombre+
                                            "/n Edad:"+edad+
                                            "/n Localidad:"+localidad+
                                            "/n profesion:"+profesion);
        if(respuesta){
           
        document.writeln("<center>");
        document.writeln("<table border='1' width='25%'>");
            //Renglon 1
            document.writeln("<tr>");
                //col 1
                document.writeln("<td rowspan='4'>");
                    document.writeln("Foto")
                document.writeln("</td>");
                //col 2
                document.writeln("<td>");
                    document.writeln("<b>Nombre:</b>" +nombre);
                document.writeln("</td>");
            document.writeln("</tr>");
            //Renglon 2
            document.writeln("<tr>");
                document.writeln("<td>");
                    document.writeln("<b>Edad:</b>" +edad+" Años");
                document.writeln("</td>");
            document.writeln("</tr>");
            // Renglon 3
            document.writeln("<tr>");
                document.writeln("<td>");
                    document.writeln("<b>Localidad:</b> "+localidad);
                document.writeln("</td>");
            document.writeln("</tr>");
            //Renglon 4
            document.writeln("<tr>");
                document.writeln("<td>");
                    document.writeln("<b>Profesion:</b>"+profesion);
                document.writeln("</td>");
            document.writeln("</tr>");
            document.writeln("</table>");
         document.writeln("</center>");

             var btn = document.createElement("button");
             btn.textContent="cambiar nombre";
             btn.setAttribute("type", "button");
             btn.setAttribute("class","btn-successs"); 
             btn.setAttribute("onclick", "cambiarNombre()");
             

             var br=document.createElement("br");
               
             
             var ctrlNombre =document.createElement("input");
             ctrlNombre.setAttribute("type","text");
             ctrlNombre.setAttribute("id","ctrl-nombre");
            
             document.body.appendChild(ctrlNombre);
             document.body.appendChild(btn);
             document.body.appendChild(br);

         
            
        }else{
            alert("Gracias por visitarnos");
        }
        function cambiarNombre(){
            var ctrlNombre=document.getElementById("ctrl-nombre");
            var nombre = document.getElementById("nombre");
           nombre.innerHTML=ctrlNombre.value;
        }