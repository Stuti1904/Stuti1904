﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Bookstore.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public bool? IsActive { get; set; }
    }
}
