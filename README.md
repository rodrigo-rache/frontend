# GIT
## versionamento
- Histórico
- Controle de versão
- Quem alterou
- O que alterou
- Quando alterou
- Todos os arquivos
- Evolução contínua


Arquivo A | Versão 1 | Versão 2
Arquivo B | Versão 1 | Versão 2

## Instalação do Git

## Criação conta GitHub

## Clonar projetos

## Commits
Informação da alteração
- após o teste do código
- git add *
- git commit -m "mensagem"
- git push (enviar alterações para o repositório)
- git pull (puxar alterações do repositório para as maquinas)


## Gitflow
Fluxo do Git

### Branchs
são ramificações / versões paralelas

- main / master (projeto principal, tudo fechado na develop e pronto para ser publicado)
- develop (todasgit as alterações para teste)
- DOD (Definition of Done): critérios de aceite
- versionamento 0(versão - vai para produção).1(grandes mudanças).10(pequenas mudanças)

- git checkout -b (cria uma branch)
- git checkout (muda a branch)

### Merge
Mescla de branchs
Você pode precisar desenvolver conflitos manualmente
- git merge (mediar o código)

### Pull Request
Mescla de branchs no repositório
Permite o Code Review
O repositório resolve os conflitos automaticamente

### configurando o gitflow
- git flow int
- git flow feature start (nome-da-feature)
=======