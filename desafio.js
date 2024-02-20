// Para os casos Complexos tive que separar as strings em 3 casos dentro da função.
function separarEndereco(endereco) {
    // Caso 1: Quando a string de endereço vem com o número da rua antes do nome.
    // O if verifica se a string começa com um número.
    if (endereco[0].match(/\d/)) {
        // Remove a vírgula das strings.
        endereco = endereco.replace(/[^\s\wÀ-ÿ]/gu, "");
        // O regex filtra uma sequencia de digitos e uma sequencia de não digitos
        const regex = /(\d+) ([^\d]+)/;
        const aux = endereco.match(regex);
        if (aux) {
            // Inverti a posição no vetor auxiliar pois o número vem a frente do nome neste caso.
            const rua = aux[2].trim();
            const numero = aux[1].trim();
            return [rua, numero];
        } else return null;
    // Caso 2: Quando o nome da rua possui um número.
    // O if verifica se a string começa com não digitos e verifica se o padrão possui letras seguidas de números duas vezes, para o caso em que o nome da rua é composto de um número.
    } else if (endereco[0].match(/[^\d]/) && endereco.match(/\w+\d+\w+\d+/)) {
        // O regex filtra uma sequencia de não digitos e uma sequencia de digitos como nome da rua e também uma sequencia de não digitos e uma sequencia de digitos como número da rua.
        const regex = /([^\d]+\d+) ([^\d]+\d+)/;
        // Restante do código identico ao das versões anteriores.
        const aux = endereco.match(regex);
        if (aux) {
            const rua = aux[1].trim();
            const numero = aux[2].trim();
            return [rua, numero];
        } else return null;
    // Caso 3: Código reaproveitado das versões anteriores, apenas adicionei uma linha para remover a virgula antes de comparar no match.
    } else {
        // Remove a vírgula das strings.
        endereco = endereco.replace(/[^\s\wÀ-ÿ]/gu, "");
        // Restante do código reaproveitado das versões anteriores.
        const regex = /([^\d]+) (\d+\s*\w*)/;
        const aux = endereco.match(regex);
        if (aux) {
            const rua = aux[1].trim();
            const numero = aux[2].trim();
            return [rua, numero];
        } else return null;
    }
}

//Novos endereços teste
const enderecos = [
    "Miritiba 339",
    "Babaçu 500",
    "Cambuí 804B",
    "Rio Branco 23",
    "Quirino dos Santos 23 b",
    "4, Rue de la République",
    "100 Broadway Av",
    "Calle Sagasta, 26",
    "Calle 44 No 1991"
];

enderecos.forEach(item => {
    const endereco = separarEndereco(item);
    console.log(`${endereco.join(", ")}`);
});