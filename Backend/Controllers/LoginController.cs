using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  public class LoginController : ControllerBase {
    // GET: api/login
    [HttpGet]
    public IActionResult Get() {
      return Ok("Hello World");
    }

    // POST: api/login
    [HttpPost]
    public IActionResult Post([FromBody] string value) {
      return Ok("Hello World");
    }

    // PATCH: api/login
    [HttpPatch]
    public IActionResult Patch([FromBody] string value) {
      return Ok("Hello World");
    }

    // DELETE: api/login
    [HttpDelete]
    public IActionResult Delete([FromBody] string value) {
      return Ok("Hello World");
    }
  }
}