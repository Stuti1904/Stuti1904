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
        Task<Genre> Add(Genre genre);
         Task<Genre> Update(int id, Genre genre);
        Task<Genre> Delete(int id);
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

        public async Task<Genre> Add(Genre genre)
        {
            var newgenre = await base.Add(genre);
            return newgenre;
        }

        public async Task<Genre> Update(int id, Genre genre)
        {
            var tobeupdated = await base.GetOne(id);
            tobeupdated.Location = genre.Location;
                await base.update(tobeupdated);
            return tobeupdated;
        }

        public async Task<Genre> Delete(int id)
        {
            var tobeDeleted = await base.GetOne(id);
            await base.Delete(id);
            return tobeDeleted;
        }
    }
}
