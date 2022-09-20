using Bookstore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services
{
   public interface ILanguageService
    {
        Task<List<Language>> GetAll();
    }

    public class LanguageService: RepositoryService<Language>, ILanguageService
    {
        public LanguageService(bookstoreContext context): base(context)
        {

        }

        public async Task<List<Language>> GetAll()
        {
            var list = await base.GetAll();
            return list;
        }
    }
}
