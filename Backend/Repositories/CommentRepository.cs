using Backend.Interfaces;
using Backend.Models;

namespace Backend.Repositories;

public class CommentRepository : ICommentRepository {
  private readonly IConfiguration _configuration;
  private readonly ApplicationDbContext _context;

  public CommentRepository(ApplicationDbContext context, IConfiguration configuration) {
    _context = context;
    _configuration = configuration;
  }

  public List<Comment> Get(int article_id) {
    return _context.comment.Where(c => c.fk_article_id == article_id).ToList();
  }

  public Comment GetById(int id) {
    return _context.comment.Find(id);
  }

  public Comment Create(Comment comment) {
    _context.comment.Add(comment);
    _context.SaveChanges();
    return _context.comment.ToList().Last();
  }

  public Comment Patch(int id, string text) {
    var c = _context.comment.FirstOrDefault(u => u.id == id);
    if (c == null) return null;
    c.text = text;
    _context.SaveChanges();

    return c;
  }

  public void Delete(int id) {
    _context.comment.Remove(_context.comment.Find(id));
    _context.SaveChanges();
  }
}