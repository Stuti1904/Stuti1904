﻿using Bookstore.Models;
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
    }
    public class BookInLanguageServices: RepositoryService<BooksInLanguage>, IBookInLanguageServices
    {
        public BookInLanguageServices(bookstoreContext context): base(context)
        {

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
    }
}
