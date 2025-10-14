let numeros = [1,2,3];
numeros.push(4,5); //adiciona item no final do array
console.log(numeros);

let numerais = [1,2]
numeros.unshift = (0); //adiciona no inicio do array 
console.log(numerais);

let nomes = ["carlos","Ans","Bruno"];
nomes.sort(); // organizar os elementos em ordem
console.log(nomes);

let notas = [85,92,78];
notas.sort((a,b) => a - b); // crescente: [78,85,92]
notas.sort((a,b) => b - a); // decrescente: [92,85,78]
console.log(notas);

let sequencia = [1,2,3];
sequencia.reverse(); // sequencia agora é [3,2,1]
console.log(sequencia);