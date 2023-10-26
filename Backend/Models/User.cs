using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class User {
  [Key] public int id { get; set; }
  public string username { get; set; }
  public string password { get; set; }

  public bool is_admin { get; set; }
  public DateTime createad_at { get; set; }

  public User(string username, string password) {
    this.username = username;
    this.password = password;
    is_admin = false;
    createad_at = DateTime.Now.ToUniversalTime();
  }
}