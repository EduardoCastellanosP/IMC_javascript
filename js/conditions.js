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
