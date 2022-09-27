using Bookstore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InfoController : ControllerBase
    {

        private bookstoreContext context { get; set; }
        
        public InfoController(bookstoreContext con)
        {
            context = con;
        }

        [HttpGet]

        public IActionResult Getall()
        {
            var list = context.GetInfoDTOs.FromSqlRaw("EXECUTE dbo.GetInfo").ToList();
            return Ok(list);
        }
    }
}
