using Project_II.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Project_II.Server.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        public DbSet<User> UserData { get; set; }
        public DbSet<Ticket> TicketData { get; set; }
        public DbSet<Ban> BanList { get; set; }
        public DbSet<Comment> CommentData { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasKey(user => user.id);
            modelBuilder.Entity<Ticket>().HasKey(ticket => ticket.id);
            modelBuilder.Entity<Ban>().HasKey(ban => ban.id);
            modelBuilder.Entity<Comment>().HasKey(comment => comment.id);
        }
    }
}