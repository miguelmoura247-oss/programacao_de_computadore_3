import { Conversor } from './conversor.js';

const conversor = new Conversor();

console.log(`25° C = ${conversor.celsiusParaFahrenheit(25)} °C`);
console.log("10 km =",conversor.quilometrosParaMilhas(10));
console.log(`150 minutos = ${conversor.minutosParaHoras(150)}`);