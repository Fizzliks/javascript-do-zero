const notas = [10, 6.5, 8, 7.5];
let SomaNota = 0;
for (let nota of notas){

    SomaNota += nota;
}
const media = SomaNota/notas.length;
console.log(`A média das notas é ${media}`);