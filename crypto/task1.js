const Web3 = require('web3');
const getBalance = require('./util.js')
const axios = require('axios');
const daiTokenAddress = '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063';
const urls = 
  {
      "name": "OneInch",
      "url": 'https://api.1inch.io/v4.0/1/quote?'
  };


// Connect to polygon rpc
const web3 = new Web3('https://polygon-rpc.com/')

// Request balance and display it

let  tokens = require('./json/tokens.json');
const ECR20ABI = require('./json/onesplit.json');

function createContracts() {
  tokens.map(token => {
    token.contract = new web3.eth.Contract(ECR20ABI, token.address);
  });
}

function getBalances() {
  tokens.map(async token => {
    token.amount = await getBalance(token.contract);
    console.log(token.name + " : " + token.amount);
    // getExpectedReturn(token.address, daiTokenAddress, token.amount);
  });
}


function getExpectedReturn(fromToken, toToken, amount) {
  const call = urls.url + 'fromTokenAddress=' + fromToken + '&toTokenAddress=' + toToken + '&amount='+ amount
  console.log(call);
  /*axios.get(call)
      .then(res => {
          console.log(res);
      }).catch(error => {
          console.log("call failed" + error);
      }); */

}

// function creates contract for each coin
createContracts();

//get current token balance in the given wallet. Also call one inch api to get exchange rates.
getBalances();
