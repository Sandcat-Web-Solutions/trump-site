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

    // GET: api/users
    [Route("/api/Users")]
    [HttpGet]
    public IActionResult Get() {
      var users = _loginRepository.GetAllUsers();

      var gatos = users.Select(u => new {
        id = u.id,
        username = u.username,
        is_admin = u.is_admin,
        created_at = u.created_at
      });

      return Ok(gatos);
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