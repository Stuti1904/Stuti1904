using Bookstore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Services
{
  public   interface IRepositoryService <TEntity> where TEntity:class
    {

       Task< List<TEntity>> GetAll();
        Task<TEntity> GetOne(int id);
        Task<TEntity> Add(TEntity entity);

        Task<TEntity> update(TEntity entity);
        Task<TEntity> Delete(int id);
    }

    public class RepositoryService<T> where T : class
    {
        public bookstoreContext contexts { get; set; }
        public RepositoryService(bookstoreContext context)
        {
            contexts = context;
        }
        public async Task<T> Add(T entity)
        {
            contexts.Add(entity);
            await contexts.SaveChangesAsync();
            return entity;
        }
        public async Task<List<T>> GetAll()
        {
          var list= await (contexts.Set<T>().Select(x => x).ToListAsync());
            return list;
        }
        public async Task<T> GetOne(int id)
        {
            var temp =  await (contexts.Set<T>().FindAsync(id));
            return temp;
        }

        public async Task<T> update(T entity)
        {

            contexts.Update(entity);
            await contexts.SaveChangesAsync();
            return entity;

        }
        public async Task<T> Delete(int id)
        {
            var emptodelete = await GetOne(id);
            contexts.Remove(emptodelete);
            await contexts.SaveChangesAsync();
            return emptodelete;
        }
    }
    




}
