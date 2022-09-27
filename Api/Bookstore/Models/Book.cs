using System;
using System.Collections.Generic;

#nullable disable

namespace Bookstore.Models
{
    public partial class Book
    {
        public Book()
        {
            BooksInLanguages = new HashSet<BooksInLanguage>();
        }

        public int BookId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Isbn { get; set; }
        public int? Genre { get; set; }
        public int? Author { get; set; }
        public decimal? Price { get; set; }
        public DateTime? ReleasedDate { get; set; }
        public string Images { get; set; }
        public bool? IsActive { get; set; }

        public virtual Author AuthorNavigation { get; set; }
        public virtual Genre GenreNavigation { get; set; }
        public virtual ICollection<BooksInLanguage> BooksInLanguages { get; set; }
    }


    public class GetInfoDTO {
        public string Title { get; set; }
        public string Images { get; set; }
        public decimal? Price { get; set; }

        public string AuthorName { get; set; }

        public string GenreName { get; set; }

        public string Name { get; set; }

        public int? Quantity { get; set; }
    }
}
