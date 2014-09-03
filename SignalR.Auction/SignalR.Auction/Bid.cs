using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR.Auction
{
    public class Bid
    {
        public string ClientId { get; set; }
        public string Name { get; set; }
        public int ItemId { get; set; }
        public decimal Amount { get; set; }

    }
}

