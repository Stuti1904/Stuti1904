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
    public class BookController : ControllerBase
    {
        private IBookService service { get; set; }


        public BookController(IBookService Book)
        {
            this.service = Book;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await service.GetAll());
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetByName(string name)
        {
            return Ok(await service.GetByName(name));
        }
    }
}
