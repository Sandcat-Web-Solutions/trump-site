using Backend.Models;

namespace Backend.Interfaces;

public interface ICommentRepository {
  public Comment GetById(int id);
  public List<Comment> Get(int article_id);
  public Comment Create(Comment comment);
  public Comment Patch(int id, string text);
  public void Delete(int id);
}