function CalcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let classificacao = "";

    if (vitorias < 10) {
        classificacao = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        classificacao = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        classificacao = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        classificacao = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        classificacao = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        classificacao = "Lendário";
    } else if (vitorias >= 101) {
        classificacao = "Imortal";
    }

    return { saldo, classificacao };
}

let resultado = CalcularRank(25, 5);
console.log(`Saldo de Rankeadas: ${resultado.saldo}, Classificação: ${resultado.classificacao}`);