# Coss-API-Node

ETH/ERC-20 Donation Address: 0xD8a6A57133Aba6672f338a988b4D2fE1899A369e


#### About Coss-API-Node

A modular, open source/free use wrapper written in node.js for the coss.io API. All functionalities have been tested and work. API keys set as vars w/i index.js (for the time being). Bot.js serves as an example of how to call all of the wrapper's functions; every API call function returns the res.body response from the server as an object when the function is called (excluding getMarketSides() which returns a nested array formatted as such: [[firstBidPrice, firstBidQuantity][firstAskPrice, firstAskQuantity]].


#### Installation

* Ensure you have Node.js installed:
https://nodejs.org/en/download/

* Clone repository
```
$ git clone https://github.com/cryptodeal/Coss-API-Node.git

```
* Install dependencies

```
$ npm install
```

* Insert your API keys into the index.js file (temporary solution as we will be adding functionality to set Keys from your strategy file)
* Develop your strategy in yourFileName.js (utilizing the API wrapper & its functions as shown in bot.js example)

* Run your strategy file
```
$ node yourFileName.js
```


#### Current Issues (COSS side problems; i.e. not the wrapper, but wrapper will be updated as COSS dev teams makes fixes)

Please note that the wrapper (and bot.js example use of wrapper) do not provide a strategy for utilizing the API. The wrapper has been tested and known issues are associated with COSS side errors:

1. placeMarketOrder() does not currently work, but the error will be fixed by COSS developers (COSS side error). FOR NOW YOU ARE BEST OFF BY: getMarketSides(), and placeLimitOrder() at the price returned for bid/ask depending on which side of the order books you wish to execute a trade on)
2. getOpenOrders() has been returning some orders that were cancelled as still being open; this is a coss side error and dev team has said this issue should correct itself after exchange maintentance for API release.


#### Contact the Developer

For any inquiries about use, please contact the developer: telegram @cryptodeal20


#### TODO:
1. Write up more thorough documentation beyond the examples in bot.js 
2. Add set Options function, so keys can be set from bot.js 
3. Publish as npm package
