(function (Admin, $, undefined) { 

    $.connection.hub.start().done(function () {
        $('#openBiddingButton').click(function () {
            auctionHub.server.openBidding();
        });
    });

    $('#closeBiddingButton').click(function () {
        auctionHub.server.closeBidding();
    });

    auctionHub.client.openBidding = function (id) {
        Admin.loadItem(id);
        $('#bidList').append('<li><b>Bidding Open. Start at any amount');
    };

    auctionHub.client.closeBidding = function (name, id, amt) {    
        $('#bidList').append('<li><b>Bidding Closed. ' + name + ' won a ' + Data.getItem(id).ItemName + " for " + amt + '</b></li>');
    };

    Admin.loadItem = function (id) {
        var item = Data.getItem(id === null ? 1 : id);
        document.getElementById("itemName").innerText = item.ItemName;
        document.getElementById("itemImage").src = item.Image;
        document.getElementById("itemDescription").innerText = item.Description;
    }
    Admin.loadItem(0);
}(window.Admin = window.Admin || {}, jQuery));