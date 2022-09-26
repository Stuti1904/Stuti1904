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
        Task<Language> Add(Language language);

        Task<Language> Update(int id, Language language);
        Task<Language> Delete(int id);
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

        public async Task<Language> Add(Language language)
        {
            var newLanguage = await base.Add(language);
            return newLanguage;
        }

        public async Task<Language> Update(int id, Language language)
        {
            var tobeUpdated = await base.GetOne(id);
            tobeUpdated.Name = language.Name;
            await base.update(tobeUpdated);
            return tobeUpdated;
        }

        public async Task<Language> Delete(int id)
        {
            var tobeDeleted = await base.Delete(id);
            await base.Delete(id);
            return tobeDeleted;
        }
    }
}
