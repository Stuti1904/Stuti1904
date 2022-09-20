using Bookstore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services
{
   public  interface IGenreService
    {
        Task<List<Genre>> GetAll();
    }

    public class GenreService : RepositoryService<Genre>, IGenreService
    {
        public GenreService(bookstoreContext context):base(context)
        {

        }

        public async Task<List<Genre>> GetAll()
        {
            var list = await  base.GetAll();
            return list;
        }
    }
}
