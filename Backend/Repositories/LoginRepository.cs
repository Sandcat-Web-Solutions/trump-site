using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Konscious.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using Backend.Interfaces;

namespace Backend.Repositories;

public class LoginRepository : ILoginRepository {
  private readonly IConfiguration _configuration;
  private readonly ApplicationDbContext _context;

  public LoginRepository(ApplicationDbContext context, IConfiguration configuration) {
    _context = context;
    _configuration = configuration;
  }


  public string GenerateArgon2Hash(string password) {
    string _out;
    using (var hasher = new Argon2id(Encoding.UTF8.GetBytes(password))) {
      hasher.DegreeOfParallelism = 1;
      hasher.Iterations = 20;
      hasher.MemorySize = 19456;
      _out = Convert.ToBase64String(hasher.GetBytes(128));
    }

    return _out;
  }

  public string GenerateJwtToken(string username) {
    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

    var claims = new[] {
      new Claim(JwtRegisteredClaimNames.Sub, username),
      new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
    };

    var token = new JwtSecurityToken(
      _configuration["Jwt:Issuer"],
      _configuration["Jwt:Audience"],
      claims,
      expires: DateTime.UtcNow.AddHours(1), // Token expiration time
      signingCredentials: credentials
    );

    return new JwtSecurityTokenHandler().WriteToken(token);
  }

  public string DecodeJwtToken(string token) {
    var handler = new JwtSecurityTokenHandler();
    var jsonToken = handler.ReadToken(token);
    var tokenS = handler.ReadToken(token) as JwtSecurityToken;
    var jti = tokenS.Claims.First(claim => claim.Type == "jti").Value;
    return jti;
  }
}