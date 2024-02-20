// Para os casos mais complicados precisei apenas alterar a expressão regular para capturar os numeros das ruas
function separarEndereco(endereco) {
    // Número da rua (\d+\w*\s*\w*): Agora permite uma sequencia de digitos seguida por um ou mais espaços seguida por um ou mais alfanumericos
    const regex = /([^\d]+) (\d+\s*\w*)/;
    const aux = endereco.match(regex);
    if (aux) {
        const rua = aux[1].trim();
        const numero = aux[2].trim();
        return [rua, numero];
    } else return null;
}

//Novos endereços teste
const enderecos = [
    "Miritiba 339",
    "Babaçu 500",
    "Cambuí 804B",
    "Rio Branco 23",
    "Quirino dos Santos 23 b"
];

enderecos.forEach(item => {
    const endereco = separarEndereco(item);
    console.log(`${endereco.join(", ")}`);
});