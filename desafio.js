function separarEndereco(endereco) {
    // Regex: Expressão regular que filtra o nome e o número da rua
    // Nome da rua ([^\d]+): Sequencia de caracteres que não sejam digitos
    // Número da rua (\d+\w*): Sequencia de digitos seguida por um alfanumerico para o endereço Cambuí
    const regex = /([^\d]+) (\d+\w*)/;
    // Passando o regex na string de endereço recebida na função
    const aux = endereco.match(regex);
    // Retornando o nome e o número da rua do array aux
    if (aux) {
        const rua = aux[1].trim();
        const numero = aux[2].trim();
        return [rua, numero];
    } else return null;
}

//Endereços teste
const enderecos = [
    "Miritiba 339",
    "Babaçu 500",
    "Cambuí 804B"
    //No PDF a entrada e saída do Cambuí está diferente, irei utilizar este exemplo da entrada
];

//Passando os elementos de "enderecos" pela função e imprimindo o que retornar em formato de string pelo uso do join
enderecos.forEach(item => {
    const endereco = separarEndereco(item);
    console.log(`${endereco.join(", ")}`);
});