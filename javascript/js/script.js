function calculoMedia( notas ) {
    
    var nota = 0
    for( c = 0; c < notas.length; c++ ) {
        notas += notas[c];
    }

    media = notas / notas.length

    return media;
}

function calculoMedia( notas ) {
    
    let soma = 0;
    for( c = 0; c < notas.length; c++ ) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

function aprovacao ( notas ) {

	let media = calculoMedia (notas);
  
	let condicao = media >= 7 ? "aprovado" : "reprovado";
   
  return media + " - Resultado: " + condicao;
   
}

document.addEventListener('submit', function( evento ){

        evento.preventDefault();

        let formulario = document.getElementById('formulario-01');

        let dados = new FormData(formulario);

        let objeto = {};

        let notas = [];

        for(let key of dados.keys()) {
            objeto[key] = dados.get(key);

            notas.push(parseInt(dados.get(key)));

        }

        console.log(notas);

        console.log(objeto);

        document.getElementById('resultado').innerHTML = aprovacao(notas);

    });