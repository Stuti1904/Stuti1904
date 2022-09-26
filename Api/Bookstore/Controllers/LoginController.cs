using Bookstore.Models;
using Bookstore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IJWTManagerRepository jWTManager;

        public LoginController(IJWTManagerRepository jWT)
        {
            jWTManager = jWT;
        }

        [AllowAnonymous]
        [HttpPost]

        public IActionResult Login([FromBody] User user)
        {
            var token = jWTManager.Authenticate(user, null);
            if (token == null)
            {
                return Unauthorized("CREDENTIALS DO NOT MATCH");
            }
            else
            {
                return Ok(token);
            }
        }
    }
}
