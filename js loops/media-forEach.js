const notas = [10, 6.5, 8, 7.5];
let SomaNota = 0;

notas.forEach(function (nota){
    SomaNota += nota;
    
})

console.log(SomaNota/notas.length);  