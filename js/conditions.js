MENU_PRINC = "DETERMINADOR DE IMC"
MENU_SECUN = "1) REGISTRO "
alert(MENU_PRINC);

let running = true;
let hombres = 0;
let mujeres = 0;
let nombre = 0;
let edad = 0;
let edadsumahombres=0;
let edadsumamujeres=0;
let again=true;
let edadsumamenores=0;

do { 
    
    let opcion = prompt(`
        -----------------------
        1).Registro 
        2). Total de hombres y mujeres registrados
        3). Promedio de edad de hombres y mujeres
        4). Total de menores registrados
        5). Total de hombres y mujeres con sobrepeso
        6). Paciente de mas bajo de IMC 
        7). Salir`)

        switch (opcion){
            case "1":
                let continuar1 = true;
                while(continuar1)  {

                let nombre = prompt ("Ingrese su nombre");
                let edad = prompt ("Ingrese su edad");
                let genero = prompt ("Ingrese su genero");
                let peso = prompt("Ingrese el peso");
                let estatura = prompt("Ingrese la estatura en metros");
                let imc = peso / ((estatura/100)**2) ;
                 
                confirm("el resultado es :" + imc);

                if (imc < 18.5 ) {
                    alert("Peso normal a inferior");
                }
                else if (imc>=18.5 && imc<= 24.9) {
                    alert("Peso normal");
                }
                else if (imc >=25 && imc<=29.9 ) {
                    alert("Peso superior al normal");
                }
                else if (imc >30) {
                    alert("Tiene sobrepeso");
                }
                else {
                    alert ("Ingreso Incorrecto");
                }

                let respuesta = prompt("Desea agregar otro paciente? S/N").toLocaleLowerCase;
                if (respuesta == "n") {
                continuar1= false;
                }
                let usuarios = {"Nombre": nombre,"Edad":edad, "Genero":genero,"Peso": peso,"Estatura":estatura, "Imc":imc};
                console.log(usuarios);

                }
               

            case "2":
                if (genero == "m" || genero == "M" ) {
                    hombres +=1;
                    alert(`hay en total ${hombres} hombres`)
                    console.log(hombres);
                }

                else if (genero == "f" || genero == "F" ) {
                    mujeres+=1;
                    alert(`hay en total ${mujeres} mujeres`)
                    console.log(mujeres);
                }



            case "3": 

            if (genero == "m" || genero == "M" ) {

                for (let i = 0; i< edad.length; i++ ) {
                edadsumahombres+= edad[i];
            
                        }

            let promedadeshombres = edadsumahombres/edad.length; 
           alert(`el promedio de edad de los hombres es ${promedadeshombres} `);
           console.log("el promedio de hombres es ", promedadeshombres)
           }

            else if (genero == "f" || genero == "F"){

                for (let i = 0; i< edad.length; i++ ) {
                    edadsumamujeres+= edad[i];

            }

            let promedadesmujeres = edadsumamujeres/edad.length; 
            alert(`el promedio de edad de las mujeres es ${promedadesmujeres} `)
            console.log("el promedio de mujeres es :",promedadesmujeres)

            }

            


            case "4":
                if (edad < 18) {
                    for (i=0; i< edad.length; i++) {
                        sumaedadmenores += edad[i]
                    }

                }

                alert(`La cantidad de menores registrados son: ${sumaedadmenores}`)
                console.log()

            

            case "5":

            if (genero == "m" && imc >=30) {
                hombres +=1;
                console.log(`Hombres con sobrepeso ${hombres}`);
                alert(`la cantidad de hombres con sobre peso es ${hombres}`);
            } else if (genero == "f" && imc >= 30) {
                mujeres +=1;
                console.log(`Mujeres con sobrepeso ${mujeres}`);
                alert(`la cantidad de mujeres con sobre peso es ${mujeres}`);
            }









        }


             
            



    
    let continuar = prompt("Desea continuar S/N");
    if (continuar == "n") {
        running = false;
    }
    


} while (running == true)


