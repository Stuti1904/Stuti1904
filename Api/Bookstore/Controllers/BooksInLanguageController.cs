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
    public class BooksInLanguageController : ControllerBase
    {

        private IBookInLanguageServices services { get; set; }

        public BooksInLanguageController(IBookInLanguageServices service)
        {
            this.services = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await services.GetAll());
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] BooksInLanguage books)
        {
            return Ok(await services.Add(books));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id)
        {
            return Ok(await services.Update(id));
        }
    }
}
