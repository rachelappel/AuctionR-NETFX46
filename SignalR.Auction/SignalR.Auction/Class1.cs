public class AuctionHub : Hub
{
    private static List<Bid> bids = new List<Bid>();
    public static int currentItemId;

    public void OpenBidding()
    {
        Random r = new Random();
        int itemId = r.Next(1, 7);
        bids.Add(new Bid() { Name = "Bidding Opened", ItemId = itemId, Amount = 0 });
        Clients.All.openBidding(itemId);
    }

    public void CloseBidding()
    {
        var i = (bids.Count - 1);
        Clients.All.closeBidding(bids[i].Name, 0, bids[i].Amount.ToString("C"));
    }

    public void PlaceBid(string name, decimal amt)
    {
        if ((amt > bids[bids.Count - 1].Amount) || (bids.Count == 0))
        {
            AuctionHub.AddBid(name, amt);
            Clients.All.updateBidList(name, amt.ToString("C"));
        }
        else
        {
            Clients.Caller.error("Could not place bid for " + name + " for " + amt.ToString("C"));
        }
    }

    private static void AddBid(string name, decimal amt)
    {
        bids.Add(new Bid() { Name = name, ItemId = currentItemId, Amount = amt });
    }
}








//namespace whatever {


//    public class AuctionHub : Hub
//    {
//        public void placeBid(string name, decimal amt) { }
//        public void OpenBidding() { }
//        public void CloseBidding() { }
//    }

////        public static List<string> groups = new List<string>();
////        static AuctionHub()
////        {
////            groups.Add("Electronics");
////            groups.Add("Vehicles");
////            groups.Add("Toys");
////            groups.Add("Other");
////        }

//}








//public abstract class Hub : IHub, IDisposable
//{
//    protected Hub();

//    public IHubCallerConnectionContext Clients { get; set; }
//    public HubCallerContext Context { get; set; }
//    public IGroupManager Groups { get; set; }

//    public void Dispose();
//    protected virtual void Dispose(bool disposing);
//    public virtual Task OnConnected();
//    public virtual Task OnDisconnected();
//    public virtual Task OnReconnected();
//}