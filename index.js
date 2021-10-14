console.log("Eu sou o CodeBot e posso encontrar a cotação de qualquer ação!");

const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');

async function codeBot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const cotação = readlineSync.question(`Insira a acao que deseja ver a cotacao: `);
  await page.goto(`https://www.google.com/search?q=${cotação}&oq=mglu&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j0i512l5.4054j1j9&sourceid=chrome&ie=UTF-8`);

  const resultado = await page.evaluate(() => {
    return document.querySelector(".IsqQVc.NprOob.XcVN5d.wT3VGc").textContent
  });

  var cot = cotação.toUpperCase();
  
  console.log(`A cotação atual de ${cot} é de R$${resultado}`);
  await browser.close();
}

codeBot();