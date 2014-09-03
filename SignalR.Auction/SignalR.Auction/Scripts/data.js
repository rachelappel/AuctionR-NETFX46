(function (Data, $, undefined) {
    Data.getItem = function(id) {
        var items = [
            { "Id": "0", "ItemName": "Auction Opens Soon", "Description": "", "Image": "/Content/Images/idunno.jpg" },
            { "Id": "1", "ItemName": "Macbook Way Retro 2", "Description": "This is a really old macbook. It probably doesn't even get online. We're talking 1994, right?", "Image": "/Content/Images/laptop.jpg" },
            { "Id": "2", "ItemName": "Fancy Car", "Description": "This is a midlife crisis special. A fast car that looks fast too. What more could you want?", "Image": "/Content/Images/car.png" },
            { "Id": "3", "ItemName": "Ahoy There!", "Description": "A boat or a dinghy?", "Image": "/Content/Images/boat.jpg" },
            { "Id": "4", "ItemName": "A Bike", "Description": "2 wheels and ready to go. Ride this bike anywhere - on the streets or on trails. It's multipurpose", "Image": "/Content/Images/bike.png" },
            { "Id": "5", "ItemName": "Television", "Description": "This TV is older than dirt.", "Image": "/Content/Images/tv.jpg" },
            { "Id": "6", "ItemName": "Teddy Bear", "Description": "A nice fluffy toy for any child", "Image": "/Content/Images/teddybear.jpg" },
            { "Id": "7", "ItemName": "Rubik's Cube", "Description": "One of a kind cube puzzle.", "Image": "/Content/Images/cube.jpg" }
        ];
        var item = items[id];
        return item;
    }
}(window.Data = window.Data || {}, jQuery));