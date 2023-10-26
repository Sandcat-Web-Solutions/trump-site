using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  public class ArticleController : ControllerBase {
    // GET: api/article
    [HttpGet]
    public IActionResult Get() {
      return Ok("Hello World");
    }

    // POST: api/article
    [HttpPost]
    public IActionResult Post([FromBody] string value) {
      return Ok("Hello World");
    }

    // PATCH: api/article
    [HttpPatch]
    public IActionResult Patch([FromBody] string value) {
      return Ok("Hello World");
    }

    // DELETE: api/article
    [HttpDelete]
    public IActionResult Delete([FromBody] string value) {
      return Ok("Hello World");
    }
  }
}