import getKeres from "./async.js";

const megjelenitBored = (content) => {
  console.log(content);
  $("body").append(`<h2>${content.chartName}</h2>`);
  $("body").append(`<h2>${content.bpi.EUR.code}</h2>`);
  $("body").append(`<h2>${content.time.updated}</h2>`);
};

const megjelenitPoke = (data) => {
  $("body").append(`<img src=${data.sprites.front_default}>`);
};

console.log("1. üzenet");
getKeres("https://api.coindesk.com/v1/bpi/currentprice.json", megjelenitBored);
getKeres(" https://pokeapi.co/api/v2/pokemon/ditto", megjelenitPoke);
console.log("2. üzenet");
