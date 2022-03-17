## Task 1:
### Question:
Given a Polygon network wallet address: 0x008062acA356B5F93F2F14b71Fd73db91A606d0C
…and a list of tokens on the Polygon network:

SHI3LD 0xf239e69ce434c7fb408b05a0da416b14917d934e
KOGE 0x13748d548D95D78a3c83fe3F32604B4796CFfa23
PEAR 0xc8bcb58caEf1bE972C0B638B1dD8B0748Fdc8A44
SING 0xCB898b0eFb084Df14dd8E018dA37B4d0f06aB26D 

Your task is to first investigate how to retrieve the wallet’s token balances by calling/interacting with smart contracts in any programming language of your choice. Note that you must directly interact with smart contracts instead of relying on a 3rd party API such as Moralis to retrieve the balances.

### Implementation:
We Connect to the Polygon server. After this we make smart contracts for each of the token and call the get balance api.
Command to run the script is: node crypto/task1.js

## Task 2:
### Question:
Once you have the token balances, you are to find out the maximum total value of the tokens in DAI (0x8f3cf7ad23cd3cadbd9735aff958023239c6a063) if they can be swapped through the following exchanges: 1inch (https://1inch.io/), Apeswap (https://apeswap.finance/), and Cafeswap (https://cafeswap.finance/). You'll want to consider which exchange gives the best exchange rate. Note the maximum value of each token and the exchange that gives the best rate.
We recommend looking into 1inch’s API along with smart contracts from the other exchanges to retrieve the token’s exchange values in DAI.

### Implementation:

While creating this feature, I found out that these tokens are unavailable on any of the exchanges mentioned in the task,  hence one possible solution will be to convert it into eth (or other token) from various exchanges (I could have done it with moralis I guess) then convert eth to DAI from the above exchanges and compare to get max value. 


