# JavaScript 

- estudo js (https://2020.stateofjs.com/en-US/technologies)
- onde é executado
- onipresente na web 
- app híbridos
- aplicacao ponta-ponta: banco de dados * frontend
- interagir com DOM (api-web)
- requisicoes dinamicas
- IoT (internet das coisas) o js está presente em tudo
- ECMAScript

## Fundamentos js
- fundamentos do js são essenciais para avançar no desenovlvimento de aplicacoes modernas, base de diversos frameworks

## metodologia progressiva integrada
- solidificar a base para avançar de forma segura
- possibilidade de compreender uma biblioteca/framework
- alem de compreender a complexidade, iremos entender a integracao da ferramenta

### logica de programacao
- Computador:
    -- extrair dados
    -- processar: realizar operacoes nos dados de entrada
- Dado eh o que pode ser processado
- informacao resultado de processamento

E a logica?
cadeia de sentido

Como escrever um programa?
- aplciar logica para descrever os passos para um problema em ordem de execucao

a logica de programacao:
- é a tecnica de sequenciar os passos, fluxos de dados para atingir um objetivo: a informacao
- sequencia de passos que o computador deve seguir eh conhecida como algoritmo

algoritmo
- sequencia logica e finita de instrucoes que resolvem um programa
- exemplo - receita de bolo
- nem todo algoritmo vira um programa de computador, mas todo programa de computador vira algoritmo
- quem viabiliza o funcionamento são as linguagens de programacao

### algoritmo para calcular a meddia de 3 numeros
1. inicio;;
2. receber o primeiro numero: entrada 1;
3. receber o primeiro numero: entrada 2;
4. receber o primeiro numero: entrada 3;
5. processamento: somar os 3 numeros recebidos e dividir por tres;
6. exibir o resultado final com print, echo, console.log;
7. fim;

### torre de hanoi
- mover todos os discos para a direita com o menor numero de passos possiveis, sem colocar um disco em cima de outro menor https://www.somatematica.com.br/jogos/hanoi/

## funcionalidade gerais
- criar algoritmos e programas para executar no navegador: client side
- manipular o DOM; elementos html, eventos, estilos css
- node.js: framework js para backend / runtime em js
- mongo.db / graphQL banco de dados em js
- react / vue.js / angular são frameworks js para desenvolvimento web/mobile
- reactive native eh o framework para desenvolvimento mobile

- recebe e manipula dados
- tomar decisoes baseados na logica computacional
- loop e interacoes
- condicoes de saida

### execucao do js
- console browsers
- editores: sublime, visual studio code
- js fiddle: https://jsfiddle.net/

### instalacao do node.js
- para exec o script js no terminal de comnado, precisa do node.js
- instalacao: https://nodejs.org/pt-br/download/package-manager/

- instalar o chocolatey
- exec o powershell como admn
- choco install nvs
- nvs add lts
- $ nvs use lts
path: -= %localappdata%\nvs\data
path: += %localappdata%\nvs\node\16.15.0\x64

### ao concluir a instalacao
rodar um novo terminal e exec node -v

## variaveis
São utilizadas para armazenar espaço na memoria
- var
- const (variavel fica protegida, n pode sofrer alteracoes, valor imutavel dentro do programa rodado)
- let (é a mesma definição que var, porém, enctraremos diversos codigos com 'var')
- string (tipo de variavel, armazenar palavras, frases, +1 de caracteres, diferente de número)
- tipagem numero ou string 
- array conjunto de valores inputadores entre [ ] e separados por virgulas.

- as memorias são importantes para salvar memorias e trabalhar o codigo de forma efetiva e discreta

## operadores
- soma +
- subtracao -
- multiplicacao *
- divisao /
- modulo (Resto de divisao) %
- math random(), round(), sqrt()

* atribuicao
a = b
a += b
a -= b
a *= b
a /= b
a %= b

* operadores de comparacao
- igual == ou ===
- diferente !=
- maior que >
- menor que <

## comparadores logicos: teste logico, retorno booleano (true/false)
- == igualdade entre sentencas (valor)
- != diferenca entre sentencas (valor)
- === igualdade entre sentencas (valor e tipo)
- !== diferenca entre sentencas (valor e tipo)

a == b > true
a != b > false

## operadores de logica e juncao logica
- ! não (not)
- && e (and)
- || ou (or)

## exemplos
- a != b // o valor de a diferente b
- X !== y // o valor e o tipo de x sao diferentes de y
- !a == b // o valorde a nao e igual ao valor b

### as condicoes logicas sao convertidas em binarios
- true eh equivalente a 1
- false eh equivalente a 02

## If
- serve para atribuir em um algoritmo inteiro

## Else
- serve como alternativa para o If

## Else if

- adicionar mais condicionais

* exemplo: 
if (cor == "preto"){
    meuCarro = "preto";
} else if (cor == "vermelho"){
    meuCarro = "cinza";
} else if (cor == "amarelo"){
    meuCarro = "branco";
} else {
    meuCarro = "azul"
}

## Switch
switch (cor){
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'vermelho' :
        meuCarro = 'vermelho';
        break;
    case 'amarelo' :
        meuCarro = 'amarelo';
        break;
    default :
        console.log('não temos a cor desejada');
}


## media
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;

var media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 8){
    console.log('aluno aprovado')
} else {
    console.log('aluno em recuperacao')
}
## Laços de repetição
- entrada / saida

* for ([expressao-inicial]); [condicao]; [incremento])

* while ([condicao]){
    [execucao]
}

* do {
    [execucao]
} while (condicao)


var contador = 0;
while (contador < 10){
    contador++;
}

var hora = 23;
while (hora > 0){
    hora--;
    console.log(hora);
    }



// fazer a revisão do carro aos 10km //
var km;
var revisao = 4;
for(km = 0; km <= revisao; km++ ){
    console.log("apenas " + km + "kms então pode rodar");
    }

### Cálculo Média dos alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8, 8, 8, 8],
    [6, 6, 6, 6, 6]
]
var nota = 0
for(var i = 0; i < alunos.length; i++){

    nota = 0
    aluno = alunos[i]
    console.log("Aluno: " + aluno);

    for( c = 0; c < aluno.length; c++ ){
        nota += aluno[c];
    }
    media = nota / 4

    if (media >= 7){
        resultado = "aprovado";
        } else {
            resultado = "reprovado";
        }
    }
    console.log("Media: " + media + " - " + resultado);
    
}

## Funções
- evitar repetições do código  
- realizar chamadas dinâmicas de algoritmos

* function calculoMedia( notas ) {
    
    var nota = 0
    for( c = 0; c < notas.length; c++ ) {
        notas += notas[c];
    }

    media = notas / notas.length

    return media;
}

* function calculoMedia( notas ) {
    
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




https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Guide/Expressions_and_operators


## Exercício
1. Descrever algoritmo para resovler o problema da travessia
- homem = h; 
- cabra = c; 
- lobo = l; 
- maço de alfafa = a;
- viagem = v;
- margem inicio = i;
- margem final = f

- 1v ida= h + c (i: l + a; f: /)
- 2v volta= h + 0 (i: l + a; f: c)
- 3v ida= h + l (i: a; f: c)
- 4v volta= h + c (i: a; f: l)
- 5v ida= h + a (i: c; f: l)
- 6v volta= h + / (i: c; f: l + a)
- 7v ida= h + c (i: /; f: l + a) 
- f (h, l, c, a/9

2. Calcular a media de 3 numeros com entradas pelo formulario HTML;
- link da media feito no jsfiddle - https://jsfiddle.net/jr0m632v/

# Exercício:

1. Resolva as operações:
● 10 + 15 = 25 (number)
● “10” + 2 = '12' (string)
● “10” * 2 = 20 (number)
● “10” / 3 = 3,333333333 (number)
● “10” % 3 = 1
● 10 + true = 11
● 10 == ”10” = true
● 10 === “10” = false
● 10 < 11 = true
● 10 > 12 = false
● 10 <= 10.1 = false
● 10 > 9.99 = true
● 10 != “dez” = true
● 10 + true = 11
● “dez” + true = deztrue
● 10 + false = 10
● 10 * false = 0
● true + true = 2
● 10++ = 11
● 10-- = 9
● 1 & 1 = 1
● 1 & 0 = 0
● 0 & 0 = 0
● 1 & 0 = 0
● 0 / 1 = 0
● 5 + 5 == 10 = true
● “5” + ”5” == 10 = false
● “5” * 2 > 9 = true
● (10 + 10) * 2 = 40
● 10 + 10 * 2 = 30
2. Responda as perguntas de acordo com as variáveis.
var branco = “preto”;
var preto = “cinza”;
var cinza = “branco”;
var carro = “preto”;
var valor = 30000;
var prestacao = 750;
a) branco == “branco” = false
b) branco == cinza = false
c) carro === branco = true
d) var cavalo = carro == “preto” ? “cinza” : “marron”; = 'cinza'
e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação. 36

valor total (vt): 30000
entrada (e): 3000
pretacao (p): 750
valor com entrada (ve): 27000

let vt = 30000
let e = 3000
let p = 750

    (vt - e)/p = 36

    vt - e = ve
    ve / p = 'resposta'

    30000 - 3000 = 27000
    27000 / 750 = 36
        
f) Somando as variáveis de cores é formada uma string de quantos caracteres?
(branco + preto + cinza).length = 16

# DOM

- document object model
- estrutura de uma pag web
- representa arquivos html ou xml
- interface de programacao
- NÃO é uma linguagem
- é essencial para o JS compreender o modelo de pág da web

## para que serve?
- alterar estrutura
- alterar estilo
- alterar o conteúdo

## como acontece?
- disponibilida de api (Application Programme Interface)
- rotinas e padrões estabelecidos
- métodos (funções)
- árvore de elementos
- seletores
- objetos (nós/nodes)

### exemplo html
````
<html>
    <head></head>
    <body></body>
</html>`
````
### exemplo objeto
````
objeto = {
    html : {
        head : {},
        body : {
            h1 : {},
            h2 : {}
        }
    }
}
````
## DOM X JS
- DOM pode ser usado em outras paginas
- Sem o DOM o JS não compreenderia a página

### vantagens do JS
- código é executado por navegadores
- tornar as páginas dinâmicas
- evitar requisições desnecessárias (performances)
- Single page aplications (SPA)
- reagir a ações do usuário

### Exemplos
Seleciona o objeto e disponibiliza (métodos/funções).callback

- document.getElementById(id)
- document.getElementByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.setAttribute()
- element.getAttribute()
- element.setAttribute()
- element.addEventListener()
- window.location
- window.onload (en-US)
- console.log
- window.scrollTo()

### Referências

https://dom.spec.whatwg.org/
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
https://pt.wikipedia.org/wiki/lista_de_motores_de_renderização