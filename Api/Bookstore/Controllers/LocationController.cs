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
    public class LocationController : ControllerBase
    {
        private ILocationService service { get; set; }

        public LocationController(ILocationService loco)
        {
            this.service = loco;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await service.GetAll());
        }
    }
}
