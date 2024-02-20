function separarEndereco(endereco) {
    const regex = /([^\d]+) (\d+\w*)/;
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