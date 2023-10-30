using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  public class LoginController : ControllerBase {
    private readonly ILoginRepository _loginRepository;

    public LoginController(ILoginRepository loginRepository) {
      _loginRepository = loginRepository;
    }

    // GET: api/login
    [HttpGet]
    public IActionResult Get() {
      string test = _loginRepository.GenerateArgon2Hash("test");
      return Ok(test);
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