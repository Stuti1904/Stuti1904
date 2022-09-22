using System;
using System.Collections.Generic;

#nullable disable

namespace Bookstore.Models
{
    public partial class Author
    {
        public Author()
        {
            Books = new HashSet<Book>();
        }

        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public string Gender { get; set; }
        public string About { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<Book> Books { get; set; }
    }
}
