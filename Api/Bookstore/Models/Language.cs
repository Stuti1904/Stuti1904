using System;
using System.Collections.Generic;

#nullable disable

namespace Bookstore.Models
{
    public partial class Language
    {
        public Language()
        {
            BooksInLanguages = new HashSet<BooksInLanguage>();
        }

        public int LanguageId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<BooksInLanguage> BooksInLanguages { get; set; }
    }
}
