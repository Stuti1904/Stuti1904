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
    public class GenreController : ControllerBase
    {

        private IGenreService service { get; set; }

        public GenreController(IGenreService genre)
        {
            this.service = genre;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await service.GetAll());
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Genre genre)
        {
            return Ok(await service.Add(genre));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Genre genre)
        {
            return Ok(await service.Update(id, genre));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await service.Delete(id));
        }
    }
}
