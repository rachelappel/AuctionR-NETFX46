using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNet.SignalR.Hubs;

using SignalR.Auction;
namespace SignalR.Auction
{
    
public class AuctionHub : Hub 
{
    private static List<Bid> bids = new List<Bid>();
    public static int currentItemId;

    public override Task OnConnected()
    {        
        if (currentItemId != 0)
        {
            foreach (Bid b in bids)
            {
                Clients.Caller.updateBidList(b.Name, b.Amount.ToString("C"));
                Clients.Caller.refreshItem(currentItemId);
                
            }
        }
        return base.OnConnected();
    }
    public override Task OnDisconnected()
    {
        return base.OnDisconnected();
    }

    //[Authorize(Roles="Admins")]
    public void OpenBidding()
    {
        Random r = new Random();
        int itemId = r.Next(1, 7);        
        bids.Add(new Bid() { Name = "Bidding Opened", ItemId = 0, Amount = 0 });
        currentItemId = itemId;
        Clients.All.openBidding(itemId);
    }
    
    public void CloseBidding()
    {
        var i = (bids.Count - 1);
        Clients.All.closeBidding(bids[i].Name, 0, bids[i].Amount.ToString("C"));                        
    }
    private static void AddBid(string name, decimal amt)
    {
        bids.Add(new Bid() { Name = name, ItemId = currentItemId, Amount = amt });
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
}

}