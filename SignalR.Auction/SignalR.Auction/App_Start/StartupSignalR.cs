using Microsoft.Owin;
using Owin;
[assembly: OwinStartup(typeof(SignalR.Auction.Startup))]
namespace SignalR.Auction
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}