namespace Backend.Interfaces; 

public interface ILoginRepository {
  string GenerateArgon2Hash(string password);
  string GenerateJwtToken(string username);
  string DecodeJwtToken(string token);
}