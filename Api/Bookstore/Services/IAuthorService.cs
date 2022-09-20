using Bookstore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services
{
  public   interface IAuthorService
    {
        Task<List<Author>> GetAll();
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
    }
}
