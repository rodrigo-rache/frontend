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

