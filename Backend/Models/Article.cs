using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Article {
  [Key] public int id { get; set; }
  public int fk_user_id { get; set; }
  public string title { get; set; }
  public string text { get; set; }

  public string image_url { get; set; }
  public DateTime created_at { get; set; }
  public DateTime last_updated_at { get; set; }

  public Article(int fk_user_id, string title, string text, string image_url) {
    this.fk_user_id = fk_user_id;
    this.title = title;
    this.text = text;
    this.image_url = image_url;
    created_at = DateTime.Now.ToUniversalTime();
    last_updated_at = created_at;
  }
}