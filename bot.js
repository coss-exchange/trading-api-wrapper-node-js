const Coss = require('./index')();

(async function () {
    try {
//Each function returns an object that is the server's response to the API call: i.e. res.body 
//Returning as an Object makes it easier to use/parse the data from bot.js or any strategy file than as a string or any other form.

//private functionalities: 

    //placeLimitOrder: Returns Object res.body
        const myOrder = await Coss.placeLimitOrder({Symbol: 'coss-eth', Side: 'Buy', Price: 0.00028689, Amount: 500});
        console.log(myOrder);

    //placeMarketOrder: Returns Object res.body
    //DELAYED (COSS SIDE ISSUE, FOR NOW YOU ARE BEST OFF BY: getMarketSides, and placeLimitOrder at the price returned for bid/ask)
        //const marketOrder = await Coss.placeMarketOrder({Symbol: 'coss-eth', Side: 'Buy', Amount: 50});
        //console.log(marketOrder);

    //cancelOrder: Returns Object res.body
        const cancelOrder = await Coss.cancelOrder({ID: '5c9bdabc-017d-4161-b0ae-dc3ecb57466c', Symbol: 'coss-eth'});
        console.log(cancelOrder)

    //getOrderDetails: Returns Object res.body
        const OrderDetails = await Coss.getOrderDetails({ID: '58cead73-474e-4ac7-8f39-ae3875b41ff6'});
        console.log(OrderDetails)

    //getOpenOrders: Returns Object res.body
    //EXCHANGE RETURNS SOME ORDERS THAT WERE MANUALLY CANCELLED AS OPEN; SHOULD BE FIXED UPON EXCHANGE REBOOT/API RELEASE
        const openOrders = await Coss.getOpenOrders({Limit: 10, Symbol: "coss-eth"});
        console.log(openOrders)

    //getCompletedOrders: Returns Object res.body
        const completedOrders = await Coss.getCompletedOrders({Limit: 10, Symbol: "coss-eth"});
        console.log(completedOrders);
    
    //getAllOrders: Returns Object res.body (Limit cannot be >50)
        const allOrders = await Coss.getAllOrders({Symbol: "coss-eth", ID: "YOUR ACCOUNT ID", Limit: 10});
        console.log(allOrders);

    //getAccountBalances: Returns Object res.body
        const getBalance = await Coss.getAccountBalances()
        console.log(getBalance)

    //getAccountDetails: Returns Object res.body
        const accountDetails = await Coss.getAccountDetails()
        console.log(accountDetails)
    
    

//public functionalities:

    //getMarketPrice: Returns Object res.body
        const marketPrice = await Coss.getMarketPrice({Symbol: "eth-btc"});
        console.log(marketPrice);

    //getPairDepth: Returns Object res.body
        const pairDepth = await Coss.getPairDepth({Symbol: "coss-eth"});
        console.log(pairDepth)

    //getMarketSides: Returns a Nested array of data in this order: [[firstBidPrice, firstBidQuantity][firstAskPrice, firstAskQuantity]]
        const marketSides = await Coss.getMarketSides({Symbol: "coss-eth"});
        console.log(marketSides)

    //getExchangeInfo: Returns Object res.body
        const exchangeInfo = await Coss.getExchangeInfo();
        console.log(exchangeInfo);
    
    //getMarketSummary: Returns Object res.body
        const marketSummary = await Coss.getMarketSummary({Symbol: "coss-eth"})
        console.log(marketSummary)


    } catch (err) {
        console.error(err);
    }
})();
