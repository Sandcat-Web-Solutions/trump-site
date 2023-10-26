using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend;

public class ApplicationDbContext : DbContext {
  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {
  }

  public DbSet<User> user { get; set; }
  public DbSet<Comment> comment { get; set; }
  public DbSet<Article> article { get; set; }
}