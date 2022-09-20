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
    }
}
