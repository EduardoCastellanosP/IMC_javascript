<<<<<<< HEAD
const MENU_PRINC = "DETERMINADOR DE IMC";
alert(MENU_PRINC);

let running = true;
let pacientes = [];

do {
    let opcion = prompt(`
-----------------------
1) Registro 
2) Total de hombres y mujeres registrados
3) Promedio de edad de hombres y mujeres
4) Total de menores registrados
5) Total de hombres y mujeres con sobrepeso
6) Paciente de menor IMC
7) Salir
`);

    switch (opcion) {
        case "1":
            let continuar = true;
            while (continuar) {
                let nombre = prompt("Ingrese su nombre:");
                let edad = parseInt(prompt("Ingrese su edad:"));
                let genero = prompt("Ingrese su género (m/f):").toLowerCase();
                let peso = parseFloat(prompt("Ingrese su peso en kg:"));
                let estatura = parseFloat(prompt("Ingrese su estatura en cm:"));
                let imc = peso / ((estatura / 100) ** 2);

                alert("El resultado de IMC es: " + imc.toFixed(2));

                if (imc < 18.5) {
                    alert("Peso inferior al normal");
                } else if (imc <= 24.9) {
                    alert("Peso normal");
                } else if (imc <= 29.9) {
                    alert("Peso superior al normal");
                } else {
                    alert("Tiene sobrepeso");
                }

                pacientes.push({
                    nombre,
                    edad,
                    genero,
                    peso,
                    estatura,
                    imc
                });

                let respuesta = prompt("¿Desea agregar otro paciente? (s/n)").toLowerCase();
                if (respuesta !== "s") continuar = false;
            }
            break;

        case "2":
            let hombres = pacientes.filter(p => p.genero === "m").length;
            let mujeres = pacientes.filter(p => p.genero === "f").length;
            alert(`Total hombres: ${hombres}, Total mujeres: ${mujeres}`);
            break;

        case "3":
            let hombresEdad = pacientes.filter(p => p.genero === "m");
            let mujeresEdad = pacientes.filter(p => p.genero === "f");

            let promedioHombres = hombresEdad.length > 0 ?
                hombresEdad.reduce((sum, p) => sum + p.edad, 0) / hombresEdad.length : 0;

            let promedioMujeres = mujeresEdad.length > 0 ?
                mujeresEdad.reduce((sum, p) => sum + p.edad, 0) / mujeresEdad.length : 0;

            alert(`Promedio edad hombres: ${promedioHombres.toFixed(1)}, mujeres: ${promedioMujeres.toFixed(1)}`);
            break;

        case "4":
            let menores = pacientes.filter(p => p.edad < 18).length;
            alert(`Total de pacientes menores de edad: ${menores}`);
            break;

        case "5":
            let hombresSobrepeso = pacientes.filter(p => p.genero === "m" && p.imc >= 30).length;
            let mujeresSobrepeso = pacientes.filter(p => p.genero === "f" && p.imc >= 30).length;
            alert(`Hombres con sobrepeso: ${hombresSobrepeso}, Mujeres con sobrepeso: ${mujeresSobrepeso}`);
            break;

        case "6":
            if (pacientes.length === 0) {
                alert("No hay pacientes registrados.");
            } else {
                let menorIMC = pacientes.reduce((min, p) => p.imc < min.imc ? p : min, pacientes[0]);
                alert(`Paciente con menor IMC:
                Nombre: ${menorIMC.nombre}
                Edad: ${menorIMC.edad}
                Género: ${menorIMC.genero}
                IMC: ${menorIMC.imc.toFixed(2)}`);
            }
            break;

        case "7":
            running = false;
            alert("Gracias por usar el sistema de IMC.");
            break;

        default:
            alert("Opción no válida. Intente nuevamente.");
    }

} while (running);
=======
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


>>>>>>> 2ba84bd9cb06cd51e7292deebd23fb9354b768c9
