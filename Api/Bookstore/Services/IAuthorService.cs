﻿using Bookstore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services
{
  public   interface IAuthorService
    {
        Task<List<Author>> GetAll();
        Task<Author> Add(Author author);
        Task<Author> Delete(int id);
    }

    public class AuthorService:RepositoryService<Author>, IAuthorService
    {
        public AuthorService(bookstoreContext context): base(context)
        {

        }
        public async Task<List<Author>> GetAll()
        {
            var list = await base.GetAll();
            return list;
        }

        public async Task<Author> Add(Author author)
        {
            var newauthor = await base.Add(author);
            return newauthor;
        }

        public async Task<Author> Delete(int id)
        {
            var deletedAuthor = await base.Delete(id);
            return deletedAuthor;
        }
    }
}
