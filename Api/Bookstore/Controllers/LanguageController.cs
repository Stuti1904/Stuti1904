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
    public class LanguageController : ControllerBase
    {
        private ILanguageService service { get; set; }

        public LanguageController(ILanguageService lang)
        {
            this.service = lang;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await service.GetAll());
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Language language)
        {
            return Ok(await service.Add(language));
        }

    }
}
