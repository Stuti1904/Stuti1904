using System;
using System.Collections.Generic;

#nullable disable

namespace Bookstore.Models
{
    public partial class Genre
    {
        public Genre()
        {
            Books = new HashSet<Book>();
        }

        public int GenreId { get; set; }
        public string GenreName { get; set; }
        public int? Location { get; set; }
        public bool? IsActive { get; set; }

        public virtual Location LocationNavigation { get; set; }
        public virtual ICollection<Book> Books { get; set; }
    }
}
