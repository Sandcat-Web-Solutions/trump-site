using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  public class CommentController : ControllerBase {
    private readonly ILoginRepository _loginRepository;
    private readonly ICommentRepository _commentRepository;

    public CommentController(ILoginRepository loginRepository, ICommentRepository commentRepository) {
      _loginRepository = loginRepository;
      _commentRepository = commentRepository;
    }


    // GET: api/comment
    [HttpGet("{article_id}")]
    public IActionResult Get(int article_id) {
      return _commentRepository.Get(article_id).Count > 0 ? Ok(_commentRepository.Get(article_id)) : NotFound();
    }

    // POST: api/comment
    [HttpPost("{article_id}")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public IActionResult Post(int article_id, [FromBody] string value) {
      var usr = _loginRepository.GetUserFromToken(Request.Headers["Authorization"]);

      Comment c = new Comment(usr.id, article_id, value);
      return Ok(_commentRepository.Create(c));
    }

    // PATCH: api/comment
    [HttpPatch("{id}")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public IActionResult Patch(int id, [FromBody] string value) {
      var usr = _loginRepository.GetUserFromToken(Request.Headers["Authorization"]);

      if (_commentRepository.GetById(usr.id) == null) return NotFound();
      if (_commentRepository.GetById(usr.id).fk_user_id != usr.id) return Unauthorized();

      return Ok(_commentRepository.Patch(id, value));
    }

    // DELETE: api/comment
    [HttpDelete("{id}")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public IActionResult Delete(int id) {
      var usr = _loginRepository.GetUserFromToken(Request.Headers["Authorization"]);
      var c = _commentRepository.GetById(id);
      if (c == null) return NotFound();
      if (c.fk_user_id != usr.id && !usr.is_admin) return Unauthorized();
      _commentRepository.Delete(id);
      return NoContent();
    }
  }
}