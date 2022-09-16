using Bookstore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services
{
   public  interface IBookService
    {
        Task<List<Book>> GetAll();
      Task<Book> GetByName(string name);
    }

    public class BookService: RepositoryService<Book>, IBookService
    {

        private bookstoreContext Context { get; set; }
        public BookService( bookstoreContext context): base(context)
        {
            this.Context = new bookstoreContext();
        }

        public async Task<List<Book>> GetAll()
        {
            var list = await base.GetAll();
            return list;
        }

        public async Task<Book> GetByName(string name)
        {
            var onebook = await ((from li in Context.Books
                                 where li.Title == name
                                 select li).FirstOrDefaultAsync());
            return onebook;
        }
    }
}
