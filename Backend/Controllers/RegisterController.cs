using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  public class RegisterController : ControllerBase {
    // POST: api/register
    [HttpPost]
    public IActionResult Post([FromBody] string value) {
      return Ok("Hello World");
    }
  }
}