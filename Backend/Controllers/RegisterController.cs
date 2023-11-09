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
  public class RegisterController : ControllerBase {
    private readonly ILoginRepository _loginRepository;

    public RegisterController(ILoginRepository loginRepository) {
      _loginRepository = loginRepository;
    }

    // POST: api/register
    [HttpPost]
    public IActionResult Post([FromBody] User user) {
      if (_loginRepository.UserExists(user.username)) return Conflict();

      _loginRepository.Create(user);
      return Created("api/register", user.username);
    }
  }
}