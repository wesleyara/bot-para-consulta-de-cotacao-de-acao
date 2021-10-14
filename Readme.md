# CodeBot: o bot em Puppeteer para ver cotação de ação.

## Motivação

Na busca por novos aprendizados na área de programação, fui em busca de usar o Node.js para automatizar algumas coisas usando JavaScript, me deparei então com a biblioteca Puppeteer (Github: https://github.com/puppeteer/puppeteer), onde vi a oportunidade de conseguir alcançar meu objetivo de estudo.

## O que ele faz?

Esse bot utiliza da biblioteca Puppeteer para acessar um site a partir de um navegador. Com base nisso utilizei ele para pegar informações sobre a cotação atual de ações da bolsa.

## Instalação:

Ao copiar o repositório, tem que ir no terminal do VS Code com a pasta aberta e digitar os seguintes comandos para realizar a instalação:

`npm install puppeteer`

`npm install readline-sync`

## Como usar?

No terminal digite (node index.js), ele vai executar o primeiro console.log e depois vai lhe perguntar que ação deseja consultar, basta digitar a abreviação da ação, exemplo: mglu3.