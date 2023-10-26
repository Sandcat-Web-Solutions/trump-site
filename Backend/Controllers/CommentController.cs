using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  public class CommentController : ControllerBase {
    // GET: api/comment
    [HttpGet]
    public IActionResult Get() {
      return Ok("Hello World");
    }

    // POST: api/comment
    [HttpPost]
    public IActionResult Post([FromBody] string value) {
      return Ok("Hello World");
    }

    // PATCH: api/comment
    [HttpPatch]
    public IActionResult Patch([FromBody] string value) {
      return Ok("Hello World");
    }

    // DELETE: api/comment
    [HttpDelete]
    public IActionResult Delete([FromBody] string value) {
      return Ok("Hello World");
    }
  }
}