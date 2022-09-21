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
        [HttpGet("authors/{id}")]
        
        public async Task<IActionResult> GetByAuthor(int id)
        {
            return Ok(await service.GetByAuthor(id));
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Book book)
        {
            return Ok(await service.Add(book));
        }
    }
}
