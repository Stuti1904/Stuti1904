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
        Task<List<Book>> GetByAuthor(int id);
        Task<Book> Add(Book book);
        Task<Book> Delete(int id);

        Task<Book> Update(int id, Book book);
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

        public async Task<List<Book>> GetByAuthor(int id)
        {
            var booksbyauthor = await ((from li in Context.Books
                                        where li.Author == id
                                        select li).ToListAsync());
            return booksbyauthor;
        }

        public async Task<Book> Add(Book book)
        {
            var newbook = await base.Add(book);
            return newbook;
        }

        public async Task<Book> Delete(int id)
        {
            var deletedbook = await base.Delete(id);
            return deletedbook;
        }

        public async Task<Book> Update(int id, Book book)
        {
            var tobeupdated = await base.GetOne(id);
            tobeupdated.Price = book.Price;
            tobeupdated.Images = book.Images;
            tobeupdated.Description = book.Description;
            tobeupdated.Title = book.Title;
           await base.update(tobeupdated);
            return tobeupdated;
        }
    }
}
