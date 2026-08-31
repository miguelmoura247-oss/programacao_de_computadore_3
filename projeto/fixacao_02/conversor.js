class Conversor{ 
celsiusParaFahrenheit(celsius){
    let F = (9 / 5) * celsius + 32;
    return F;
}
 quilometrosParaMilhas(km){
    let milhas = km * 0.621371;
    return milhas;
}

minutosParaHoras(minutos){
    let horas = minutos / 60;
    return horas;
    }
}

export { Conversor } ;


