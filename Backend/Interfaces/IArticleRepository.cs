using Backend.Models;

namespace Backend.Interfaces;

public interface IArticleRepository {
  public List<Article> GetAll();
  public Article GetById(int id);

  public Article Create(Article article);
  public Article Patch(int id, string title, string text, string image_url);
  public void Delete(int id);
}