using MapViewer.Database.Types;
using Microsoft.EntityFrameworkCore;

namespace MapViewer.Database
{
    public class MapDbContext : DbContext
    {
        public DbSet<Feature> Features { get; set; }
        public MapDbContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=mapdatabase.db");
        }
    }
}
