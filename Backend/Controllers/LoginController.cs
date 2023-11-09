using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Models;
using Backend.Repositories;
using Microsoft.AspNetCore.Authorization;
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
    public IActionResult GetUsers() {
      var users = _loginRepository.GetAllUsers();

      var gatos = users.Select(u => new {
        u.id,
        u.username,
        u.is_admin,
        u.created_at
      });

      return Ok(gatos);
    }

    // GET: api/login
    [Authorize]
    [HttpGet]
    public IActionResult Get() {
      string token = Request.Headers["Authorization"];
      var usr = _loginRepository.GetUserFromToken(token);
      usr.password = null;
      return Ok(usr);
    }

    // POST: api/login
    [HttpPost]
    public IActionResult Post([FromBody] User user) {
      string token = _loginRepository.GetTokenIfValid(user);
      if (token == "-1") return Unauthorized();
      return Ok(token);
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