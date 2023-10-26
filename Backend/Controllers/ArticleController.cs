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
    // GET: api/Article
    [HttpGet]
    public IActionResult Get() {
      return Ok(new { helloworld = "Hello World!" });
    }
  }
}