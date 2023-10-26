namespace Backend {
  public static class Program {
    public static void Main(string[] args) {
      var builder = WebApplication.CreateBuilder(args);

      // Add dependency injected repositories
      // builder.Services.AddScoped<ILoginRepository, LoginRepository>();

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