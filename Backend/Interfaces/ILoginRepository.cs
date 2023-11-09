using Backend.Models;

namespace Backend.Interfaces;

public interface ILoginRepository {
  bool UserExists(string username);
  User Create(User user);
  string GenerateArgon2Hash(string password);
  string GenerateJwtToken(string username);
  string DecodeJwtToken(string token);
}