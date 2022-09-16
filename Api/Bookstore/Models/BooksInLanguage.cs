using System;
using System.Collections.Generic;

#nullable disable

namespace Bookstore.Models
{
    public partial class BooksInLanguage
    {
        public int BooksInLanguageId { get; set; }
        public int? Language { get; set; }
        public int? Book { get; set; }
        public int? Quantity { get; set; }

        public virtual Book BookNavigation { get; set; }
        public virtual Language LanguageNavigation { get; set; }
    }
}
