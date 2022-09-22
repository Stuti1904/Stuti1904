using System;
using System.Collections.Generic;

#nullable disable

namespace Bookstore.Models
{
    public partial class Location
    {
        public Location()
        {
            Genres = new HashSet<Genre>();
        }

        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<Genre> Genres { get; set; }
    }
}
