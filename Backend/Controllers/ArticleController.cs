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
  public class ArticleController : ControllerBase {
    private readonly IArticleRepository _articleRepository;
    private readonly ILoginRepository _loginRepository;

    public ArticleController(IArticleRepository articleRepository, ILoginRepository loginRepository) {
      _articleRepository = articleRepository;
      _loginRepository = loginRepository;
    }

    // GET: api/articles
    [Route("/api/Articles")]
    [HttpGet]
    public IActionResult GetAll() {
      return _articleRepository.GetAll().Count == 0 ? NotFound() : Ok(_articleRepository.GetAll());
    }


    // GET: api/article
    [HttpGet("{id}")]
    public IActionResult Get(int id) {
      return _articleRepository.GetById(id) == null ? NotFound() : Ok(_articleRepository.GetById(id));
    }

    // POST: api/article
    [HttpPost]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public IActionResult Post([FromBody] Article article) {
      var usr = _loginRepository.GetUserFromToken(Request.Headers["Authorization"]);
      if (!usr.is_admin) return Unauthorized();

      return Ok(_articleRepository.Create(article));
    }

    // PATCH: api/article
    [HttpPatch("{id}")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public IActionResult Patch(int id, [FromBody] Article article) {
      var usr = _loginRepository.GetUserFromToken(Request.Headers["Authorization"]);
      if (!usr.is_admin) return Unauthorized();

      Article a = _articleRepository.Patch(id, article.title, article.text, article.image_url);
      if (a == null) return NotFound();
      return Ok(a);
    }

    // DELETE: api/article
    [HttpDelete("{id}")]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public IActionResult Delete(int id) {
      var usr = _loginRepository.GetUserFromToken(Request.Headers["Authorization"]);
      if (!usr.is_admin) return Unauthorized();

      try {
        _articleRepository.Delete(id);
      }
      catch (Exception e) {
        return NoContent();
      }

      return NoContent();
    }
  }
}