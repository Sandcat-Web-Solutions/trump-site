using Backend.Models;

namespace Backend.Interfaces;

public interface ILoginRepository {
  bool UserExists(string username);
  User Create(User user);

  User Patch(int id, string username, string password);

  // void Delete(User user);
  List<User> GetAllUsers();
  string GetTokenIfValid(User user);
  User GetUserFromToken(string token);
  string GenerateArgon2Hash(string password);
  string GenerateJwtToken(int id);
  int DecodeJwtToken(string token);
}