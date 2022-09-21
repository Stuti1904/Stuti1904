using Bookstore.Models;
using Bookstore.Services;
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
    public class AuthorController : ControllerBase
    {
        private IAuthorService service { get; set; }

        public AuthorController(IAuthorService ser)
        {
            this.service = ser;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await service.GetAll());
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Author author)
        {
            return Ok(await service.Add(author));
        }
    }
}
