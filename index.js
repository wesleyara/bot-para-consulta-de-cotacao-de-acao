console.log("Eu sou o CodeBot e posso encontrar a cotação de qualquer ação!");

const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');
var tipo = readlineSync.question(`Voce deseja buscar a cotacao de um FII ou uma acao? `)

var tip = tipo.toLowerCase();

if (tip === "fii") {
  var cotação = readlineSync.question(`Insira o FII que deseja ver a cotacao: `);

  async function codeBot() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(`https://statusinvest.com.br/fundos-imobiliarios/${cotação}`);

  const cota = await page.evaluate(() => {
    return document.querySelectorAll(".value")[0].textContent
  });

  const dy = await page.evaluate(() => {
    return document.querySelectorAll(".value")[3].textContent
  });

  var cot = cotação.toUpperCase();
  
  console.log(`A cotação atual de ${cot} é de R$${cota}`);
  console.log(`O Dividend Yield do FII é de ${dy}%`)
  await browser.close();
}

codeBot();

} else {
  var cotação = readlineSync.question(`Insira a acao que deseja ver a cotacao: `);

  async function codeBot() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(`https://statusinvest.com.br/acoes/${cotação}`);

  const cota = await page.evaluate(() => {
    return document.querySelectorAll(".value")[0].textContent
  });
  
  const roe = await page.evaluate(() => {
    return document.querySelectorAll(".value.d-block.lh-4.fs-4.fw-700")[24].textContent
  });
  
  const patrimonioLiquido = await page.evaluate(() => {
    return document.querySelectorAll(".value")[86].textContent
  });

  const dividaLiquida = await page.evaluate(() => {
    return document.querySelectorAll(".value")[91].textContent
  });

  var cot = cotação.toUpperCase();
  
  console.log(`A cotação atual de ${cot} é de R$${cota}`);
  console.log(`O ROE da empresa é de ${roe}`)
  console.log(`O Patrimônio Líquido é de R$${patrimonioLiquido}`)
  console.log(`A Dívida Líquida é de R$${dividaLiquida}`)
  await browser.close();
}

codeBot();
}