using Microsoft.EntityFrameworkCore;
using PslibOauthReactDemo.Models;

namespace PslibOauthReactDemo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Note> Notes { get; set; }
    }
}
