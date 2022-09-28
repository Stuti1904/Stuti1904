using Bookstore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services
{
   public  interface IBookInLanguageServices
    {
        Task<List<BooksInLanguage>> GetAll();
        Task<BooksInLanguage> Add(BooksInLanguage books);

        Task<BooksInLanguage> Update(int id);
    }
    public class BookInLanguageServices: RepositoryService<BooksInLanguage>, IBookInLanguageServices
    {

        private bookstoreContext Context { get; set; }
        public BookInLanguageServices(bookstoreContext context): base(context)
        {
            Context = new bookstoreContext();
        }

        public async Task<List<BooksInLanguage>> GetAll()
        {
            var list = await base.GetAll();
            return list;
        }

        public async Task<BooksInLanguage> Add(BooksInLanguage books)
        {
            var newlan = await base.Add(books);
            return newlan;
        }

        public async Task<BooksInLanguage> Update(int id)
        {

            var tobeUpdated = await ((from li in Context.BooksInLanguages
                                      where li.Book == id
                                      select li).FirstOrDefaultAsync());
            tobeUpdated.Quantity = (tobeUpdated.Quantity) - 1;
            await base.update(tobeUpdated);
            return tobeUpdated;
        }
    }
}
