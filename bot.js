const Coss = require('./index')();

(async function () {
    try {
//Each function returns an object that is the server's response to the API call: i.e. res.body 
//Returning as an Object makes it easier to use/parse the data from bot.js or any strategy file than as a string or any other form.

//private functionalities: 

    //placeLimitOrder: Returns Object res.body
    //STATUS: WORKING
        const myOrder = await Coss.placeLimitOrder({Symbol: 'COSS_ETH', Side: 'Buy', Price: 0.00002, Amount: 500});
        console.log(myOrder);

    //placeMarketOrder: Returns Object res.body
    //STATUS: WORKING
        const marketOrder = await Coss.placeMarketOrder({Symbol: 'COSS_ETH', Side: 'Buy', Amount: 25});
        console.log(marketOrder);

    //cancelOrder: Returns Object res.body
    //STATUS: WORKING
        const cancelOrder = await Coss.cancelOrder({ID: 'e913e191-78fe-44c7-ab3b-0cdf7b8104c4', Symbol: 'COSS_ETH'});
        console.log(cancelOrder)

    //getOrderDetails: Returns Object res.body
    //STATUS: WORKING
        const OrderDetails = await Coss.getOrderDetails({ID: 'e913e191-78fe-44c7-ab3b-0cdf7b8104c4'});
        console.log(OrderDetails)

    //getOpenOrders: Returns Object res.body
    //STATUS: WORKING
        const openOrders = await Coss.getOpenOrders({Limit: 10, Symbol: "COSS_ETH"});
        console.log(openOrders)

    //getCompletedOrders: Returns Object res.body
    //STATUS: WORKING
        const completedOrders = await Coss.getCompletedOrders({Limit: 10, Symbol: "COSS_ETH"});
        console.log(completedOrders);
    
    //getAllOrders: Returns Object res.body (Limit cannot be >50)
    //STATUS: WORKING
        const allOrders = await Coss.getAllOrders({Symbol: "COSS_ETH", ACCT_ID: "0", Limit: 10});
        console.log(allOrders);

    //getAccountBalances: Returns Object res.body
    //STATUS: WORKING
        const getBalance = await Coss.getAccountBalances()
        console.log(getBalance)

    //getAccountDetails: Returns Object res.body
    //STATUS: WORKING
        const accountDetails = await Coss.getAccountDetails()
        console.log(accountDetails)
    
    

//public functionalities:

    //getMarketPrice: Returns Object res.body
    //STATUS: WORKING
        const marketPrice = await Coss.getMarketPrice({Symbol: "COSS_ETH"});
        console.log(marketPrice);

    //getPairDepth: Returns Object res.body
    //STATUS: WORKING
        const pairDepth = await Coss.getPairDepth({Symbol: "COSS_ETH"});
        console.log(pairDepth)

    //getMarketSides: Returns a Nested array of data in this order: [[firstBidPrice, firstBidQuantity][firstAskPrice, firstAskQuantity]]
    //STATUS: WORKING
        const marketSides = await Coss.getMarketSides({Symbol: "COSS_ETH"});
        console.log(marketSides)

    //getExchangeInfo: Returns Object res.body
    //STATUS: WORKING
        const exchangeInfo = await Coss.getExchangeInfo();
        console.log(exchangeInfo);
    
    //getMarketSummary: Returns Object res.body
    //STATUS: BROKEN
        //const marketSummary = await Coss.getMarketSummary({Symbol: "COSS_ETH"})
        //console.log(marketSummary)


    } catch (err) {
        console.error(err);
    }
})();
