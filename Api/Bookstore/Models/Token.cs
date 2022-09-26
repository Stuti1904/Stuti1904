using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Models
{
    public class Token
    {

        public string Tokens { get; set; }

        public string RefreshToken { get; set; }

        public string Role { get; set; }

    }
}
