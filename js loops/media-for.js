const notas = [10, 6.5, 8, 7.5];
let SomaNota = 0;
for (let i = 0 ; i <  notas.length; i++){
    SomaNota += notas[i];
    console.log(SomaNota)
}
const media = SomaNota/notas.length;
console.log(`a média das notas é ${media}`);