using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Comment {
  [Key] public int id { get; set; }
  public int fk_user_id { get; set; }
  public string text { get; set; }
  public DateTime created_at { get; set; }

  public Comment(int fk_user_id, string text) {
    this.fk_user_id = fk_user_id;
    this.text = text;
    created_at = DateTime.Now.ToUniversalTime();
  }
}