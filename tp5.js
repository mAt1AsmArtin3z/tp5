//funcion obetener señal
function getSeniales(losdatos){
    const seniales = losdatos.split('_').map(Number);
    return seniales;
}
//funcion para obtener el cuadrante
function getCuadrantes(seniales) {
    let cuadrantes = [];
    for (let senial of seniales) {
        if (senial < 0) {
            break;
        }
        let cuadrante = "";
        if (senial <= 45 || senial > 315) {
            cuadrante = 'E';
        } else if (senial > 45 && senial <= 135) {
            cuadrante = 'N';
        } else if (senial > 135 && senial <= 225) {
            cuadrante = 'O';
        } else if (senial > 225 && senial <= 315) {
            cuadrante = 'S';
        }
        cuadrantes.push(cuadrante);
    }
    return cuadrantes.join(' ');
}
//funcion para contar los ciclos completos
function contarCiclosCompletos(cuadrantes) {
    const ciclosCompletos = ['NESO', 'NOSE', 'OSEN', 'ESON', 'SENO', 'SONE', 'ENOS', 'ONES'];
    let ciclos = 0;
    let secuenciaStr = cuadrantes.replace(/ /g, "");
    for(let i = 0; i < ciclosCompletos.length;i++){
        if(secuenciaStr.match(ciclosCompletos[i]) != null){
            ciclos++;                                       
        }
    }
    return ciclos;
}
//funcion para calcular porcentaje del cuadrante
function porcentajeCuadrante(cuadrantes) {
    let secuencia = cuadrantes.replace(/ /g, ""); 
    const total = secuencia.length;
    const porcentajeN = ((secuencia.match(/N/g)).length / total * 100).toFixed(2);
    const porcentajeS = ((secuencia.match(/S/g)).length / total * 100).toFixed(2);
    const porcentajeE = ((secuencia.match(/E/g)).length / total * 100).toFixed(2);
    const porcentajeO = ((secuencia.match(/O/g)).length / total * 100).toFixed(2);
    return [porcentajeN, porcentajeS, porcentajeE, porcentajeO];
}
//funcion para procesar la señal
function procesarLasSeniales(){
    const losdatos = "100_200_50_330_250_180_190_200_150_90_165_240_20_340"; 
    const seniales = getSeniales(losdatos);
    const secuencia = getCuadrantes(seniales);
    const ciclos = contarCiclosCompletos(secuencia);
    const porcentajes = porcentajeCuadrante(secuencia);
    
    console.log("Señales ingresadas: " + seniales.join("_"));
    console.log("Secuencia cuadrante: " + secuencia);
    console.log("Ciclos completos: " + ciclos);
    console.log("El orcentaje de cada cuadrante: \nNorte: " + porcentajes[0] + "%\nSur: " + porcentajes[1] + "%\nEste: " + porcentajes[2] + "%\nOeste: " + porcentajes[3] + "%");
}

procesarLasSeniales();
