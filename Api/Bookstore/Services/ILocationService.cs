using Bookstore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services
{
   public  interface ILocationService
    {

        Task<List<Location>> GetAll();
    }

    public class LocationService: RepositoryService<Location>, ILocationService
    {
        public LocationService(bookstoreContext context): base(context)
        {

        }

        public async Task<List<Location>> GetAll()
        {
            var list = await base.GetAll();
            return list;
        }
    }
}
