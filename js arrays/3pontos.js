const nomes = ["Rodrigo", "Margie"];
const idades = [36, 35];

const NomesEIdades = [...nomes,...idades];
console.log(`${nomes} tem ${idades}, respectivamente` );
console.log(`Juntando arrays com os ..., temos ${NomesEIdades}`);