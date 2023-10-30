using System.Text;
using Backend.Interfaces;
using Backend.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;

namespace Backend {
  public static class Program {
    public static void Main(string[] args) {
      var builder = WebApplication.CreateBuilder(args);

      // Add dependency injected repositories
      builder.Services.AddScoped<ILoginRepository, LoginRepository>();

      var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
      string aspNetCoreUrls = Environment.GetEnvironmentVariable("ASPNETCORE_CONNECTIONSTRINGS_DEFAULTCONNECTION");
      string host = Environment.GetEnvironmentVariable("DB_HOST");

      if (aspNetCoreUrls != null) {
        connectionString = aspNetCoreUrls;

        connectionString = "Host=" + host + ";" + connectionString;
      }

      builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

      // init.sql
      using (var db = new ApplicationDbContext(
               builder.Services.BuildServiceProvider().GetRequiredService<DbContextOptions<ApplicationDbContext>>())) {
        db.Database.ExecuteSqlRaw(File.ReadAllText("init.sql"));
      }

      // Endless boilerplate for JWT
      builder.Services.AddAuthentication(options => {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(o => {
        o.TokenValidationParameters = new TokenValidationParameters {
          ValidIssuer = builder.Configuration["Jwt:Issuer"],
          ValidAudience = builder.Configuration["Jwt:Audience"],
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
          ValidateIssuer = true,
          ValidateAudience = true,
          ValidateLifetime = false,
          ValidateIssuerSigningKey = true
        };
      });
      builder.Services.AddAuthorization();

      // Add services to the container.
      builder.Services.AddControllers();
      // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen();

      var app = builder.Build();

      // Auth
      app.UseAuthentication();
      app.UseAuthorization();

      // CORS
      app.UseCors(options => {
        options.AllowAnyOrigin();
        options.AllowAnyMethod();
        options.AllowAnyHeader();
      });

      // Swagger
      if (app.Environment.IsDevelopment()) {
        app.UseSwagger();
        app.UseSwaggerUI();
      }

      // Endless boilerplate
      app.UseHttpsRedirection();

      app.UseAuthorization();

      app.MapControllers();

      app.Run();
    }
  }
}