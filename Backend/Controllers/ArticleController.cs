using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  public class ArticleController : ControllerBase {
    private readonly IArticleRepository _articleRepository;

    public ArticleController(IArticleRepository articleRepository) {
      _articleRepository = articleRepository;
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
    public IActionResult Post([FromBody] Article article) {
      return Ok(_articleRepository.Create(article));
    }

    // PATCH: api/article
    [HttpPatch("{id}")]
    public IActionResult Patch(int id, [FromBody] Article article) {
      Article a = _articleRepository.Patch(id, article.title, article.text);
      if (a == null) return NotFound();
      return Ok(a);
    }

    // DELETE: api/article
    [HttpDelete("{id}")]
    public IActionResult Delete(int id) {
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