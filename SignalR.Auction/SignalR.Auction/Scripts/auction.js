window.auctionHub = $.connection.auctionHub;
$.connection.hub.logging = true;

(function (Auction, $, undefined) {
   
    $.connection.hub.start().done(function () {
        $('#placeBidButton').click(function () {
            var bidder = document.querySelector("#fromBidderTextBox").value;
            var bidAmt = document.querySelector("#bidAmountTextBox").value;
            auctionHub.server.placeBid(bidder, bidAmt);
        });
    });
   
    auctionHub.client.updateBidList = function (name, amt) {
        $('#bidList').append('<li>Bid accepted for: ' + name + ' in the amount of ' + amt + '</li>');
    };

    auctionHub.client.refreshItem = function (id) {
        Admin.loadItem(id);
    };

    auctionHub.client.error = function (message) {
        $('#bidList').append('<li>' + message + '</li>');
    };
   
}(window.Auction = window.Auction || {}, jQuery));





