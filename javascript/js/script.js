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

/*
* Formulario envio de dados para cálculo de média
*/

document.getElementById('formulario-01').addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if(this.getAttribute('class').match(/erro/)){
            return false; 
        }

        let dados = new FormData(this);

        let objeto = {};

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;// é um número e pode ter casa decimal

            if(!isNaN(numero)){
                notas.push(numero)
            }
        }
    
        console.log(notas);

        console.log(objeto);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });

function validaCampo(elemento){
    elemento.addEventListener('focusout', function(event){
        
        event.preventDefault();

        if(this.value == ''){
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento em vermelho';
            this.classList.add('erro')
            this.parentNode.classList.add('erro');
            return false
        }else {
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro');
           
        }
        });
    }

function validaCampoNumerico(elemento){
    
    elemento.addEventListener('focusout', function(event){
            
            event.preventDefault();
    
            if(this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
                document.querySelector('.mensagem').innerHTML = '';
                this.classList.remove('erro')
                this.parentNode.classList.remove('erro');
            }else {
                document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento em vermelho';
                this.classList.add('erro')
                this.parentNode.classList.add('erro');
                return false
            }
            });
        }

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.obrigatorio-numero');
        
for(let emfoco of camposObrigatorios){
    validaCampo(emfoco)
}

for(let emfoco of camposNumericos){
    validaCampoNumerico(emfoco)
}
        