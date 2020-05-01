using Microsoft.EntityFrameworkCore;

namespace BasicVideoChatAngular
{
    public class OpentokContext : DbContext
    {
        public DbSet<Room> Rooms { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=opentok.db");
    }

    public class Room
    {
        public int RoomId { get; set; }
        public string SessionId { get; set; }
        public string RoomName { get; set; }
        public string Token { get; set; }
    }
}
