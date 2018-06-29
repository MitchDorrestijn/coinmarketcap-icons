"use strict";

const fs = require("fs");
const https = require("https");

const iconDestination = `${__dirname}/icons/`;
const availableFormats = ["128x128", "64x64", "32x32", "16x16"];
const avaibableNames = ["rank", "slug", "symbol"];

let chosenFormat = availableFormats[0];
let chosenName = avaibableNames[1];

let cryptocurrencyDownloadUrls = [];
let CMCresult = "";

if(process.argv.includes(availableFormats[0])){chosenFormat = availableFormats[0]}
if(process.argv.includes(availableFormats[1])){chosenFormat = availableFormats[1]}
if(process.argv.includes(availableFormats[2])){chosenFormat = availableFormats[2]}
if(process.argv.includes(availableFormats[3])){chosenFormat = availableFormats[3]}
if(process.argv.includes(avaibableNames[0])){chosenName = avaibableNames[0]}
if(process.argv.includes(avaibableNames[1])){chosenName = avaibableNames[1]}
if(process.argv.includes(avaibableNames[2])){chosenName = avaibableNames[2]}
if(process.argv.includes(avaibableNames[3])){chosenName = avaibableNames[3]}

!fs.existsSync(iconDestination) && fs.mkdirSync(iconDestination);

https.get("https://s2.coinmarketcap.com/generated/search/quick_search.json", (response) => {
  response.on("data", (chunk) => {
    CMCresult += chunk;
  });
  response.on("end", () => {
    CMCresult = JSON.parse(CMCresult);
    for (let i = 0; i < CMCresult.length; i++) {
      cryptocurrencyDownloadUrls.push(`https://s2.coinmarketcap.com/static/img/coins/${chosenFormat}/${CMCresult[i].id}.png`);
    }
    (async function loop() {
      console.log("Started saving icons...");
      for (let i = 0; i < cryptocurrencyDownloadUrls.length; i++) {
        await new Promise((resolve, reject) => {
          https.get(cryptocurrencyDownloadUrls[i], (response) => {
            if (response.statusCode !== 200) {
              let err = new Error(`The file ${CMCresult[i].slug}.png couldn\'t be retrieved :(`);
              err.status = response.statusCode;
              return reject(err);
            }
            let chunks = [];
            response.setEncoding("binary");
            response.on("data", (chunk) => {
              chunks += chunk;
            }).on("end", () => {
              let stream;
              if (chosenName === avaibableNames[0]) {
                stream = fs.createWriteStream(`${iconDestination}${i + 1}.png`);
              } else {
                stream = fs.createWriteStream(`${iconDestination}${CMCresult[i][chosenName]}.png`);
              }
              stream.write(chunks, "binary");
              stream.on("finish", () => {
                resolve(`${iconDestination}${CMCresult[i].slug}.png saved succesfully :)`);
                console.log(`Saved ${CMCresult[i][chosenName]}.png in ${iconDestination}`);
              });
              response.pipe(stream);
            });
          }).on("error", (err) => {
            console.log(`Oops, an error occurred: ${err.message}`);
            reject(err.message);
          });
        });
        if (i === cryptocurrencyDownloadUrls.length - 1) {
          console.log("Done! If this tool was helpfull to you please consider a donation:");
          console.log("BTC: 1Lawi284xuNSL2QPPnpeLp637oN74M7LCQ");
          console.log("ETH: 0x06DF41dE423167AD8D761AfBcbcb95D0508CF541");
          console.log("LTC: LYjsYCTn1BgbXkGjizRiurjC4YMh2VZsF2");
        }
      }
    })();
  });
}).on("error", (err) => {
  console.log(`Oops, an error occurred: ${err.message}`);
});
