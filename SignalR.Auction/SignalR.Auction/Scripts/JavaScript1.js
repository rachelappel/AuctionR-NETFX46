

    (function (Auction, $, undefined) {

        $.connection.hub.start().done(function () {
            $('#placeBidButton').click(function () {
                var bidder = document.querySelector("#fromBidderTextBox").value;
                var bidAmt = document.querySelector("#bidAmountTextBox").value;
                auctionHub.server.placeBid(bidder, bidAmt);
            });
        });

    }(window.Auction = window.Auction || {}, jQuery));





//(function (Data, $, undefined) {
//    Data.getItem = function (id) {
//        var items = [
//            { "Id": "0", "Group": "", "ItemName": "Auction Opens Soon", "": "", "Image": "/Content/Images/idunno.jpg" },
//            { "Id": "1", "Group": "Electronics", "ItemName": "Macbook Way Retro 2", "Description": "This is a really old macbook. It probably doesn't even get online. We're talking 1994, right?", "Image": "/Content/Images/laptop.jpg" },
//            { "Id": "2", "Group": "Vehicles", "ItemName": "Fancy Car", "Description": "This is a midlife crisis special. A fast car that looks fast too. What more could you want?", "Image": "/Content/Images/car.png" },
//            { "Id": "3", "Group": "Vehicles", "ItemName": "Ahoy There!", "Description": "A boat or a dinghy?", "Image": "/Content/Images/boat.jpg" },
//            { "Id": "4", "Group": "Vehicles", "ItemName": "A Bike", "Description": "2 wheels and ready to go. Ride this bike anywhere - on the streets or on trails. It's multipurpose", "Image": "/Content/Images/bike.png" },
//            { "Id": "5", "Group": "Electronics", "ItemName": "Television", "Description": "This TV is older than dirt.", "Image": "/Content/Images/tv.jpg" },
//            { "Id": "6", "Group": "Toys", "ItemName": "Teddy Bear", "Description": "A nice fluffy toy for any child", "Image": "/Content/Images/teddybear.jpg" },
//            { "Id": "7", "Group": "Toys", "ItemName": "Rubik's Cube", "Description": "One of a kind cube puzzle.", "Image": "/Content/Images/cube.jpg" }
//        ];
//        var item = items[id];
//        return item;
//    }
//}(window.Data = window.Data || {}, jQuery));




//$.connection.hub.start().done(function () {
//$('#placeBidButton').click(function () {
//    // client calls server here 
//    cn.server.send(document.querySelector("#fromBidderTextBox").value, document.querySelector("#bidAmountTextBox").value);
//});

//$('#closeBiddingButton').click(function () {
//    // client calls server here 
//    cn.server.closeBidding();
//});

//});

//$.connection.hub.stateChanged(function (change) {
//    var x = change.newState;
//    var y = change.oldState;
//});


//$.connection.hub.error(function (error) {
//    console.log('!!! SignalR error: ' + error)
//});
//$.connection.hub.disconnected(function () {
//    console.log('!!! SignalR disconnected')
//});
//$.connection.hub.reconnected(function () {
//    console.log('!!! SignalR reconnected')
//});
//$.connection.hub.reconnecting(function () {
//    console.log('!!! SignalR reconnecting')
//});
//$.connection.hub.stateChanged(function (change) {
//    console.log('!!! SignalR stateChanged: ' + change.newState + '(0-conn-ng,1=conn-ed,2=reconn,4=disconn)')
//});
//$.connection.hub.connectionSlow(function () {
//    console.log('!!! SignalR connectionSlow')
//});
//$.connection.hub.start();