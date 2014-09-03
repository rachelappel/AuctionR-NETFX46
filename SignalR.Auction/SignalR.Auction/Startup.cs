using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SignalR.Auction.SignalRStartup))]
namespace SignalR.Auction
{
    public partial class SignalRStartup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
