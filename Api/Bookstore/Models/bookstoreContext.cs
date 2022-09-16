using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Bookstore.Models
{
    public partial class bookstoreContext : DbContext
    {
        public bookstoreContext()
        {
        }

        public bookstoreContext(DbContextOptions<bookstoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<BooksInLanguage> BooksInLanguages { get; set; }
        public virtual DbSet<Genre> Genres { get; set; }
        public virtual DbSet<Language> Languages { get; set; }
        public virtual DbSet<Location> Locations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0753\\MSSQL2019;Database=bookstore;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Author>(entity =>
            {
                entity.Property(e => e.AuthorId).HasColumnName("AuthorID");

                entity.Property(e => e.About)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.AuthorName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.Property(e => e.BookId).HasColumnName("BookID");

                entity.Property(e => e.Description)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Images)
                    .HasMaxLength(225)
                    .IsUnicode(false);

                entity.Property(e => e.Isbn)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("ISBN");

                entity.Property(e => e.Price).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.ReleasedDate).HasColumnType("date");

                entity.Property(e => e.Title)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.AuthorNavigation)
                    .WithMany(p => p.Books)
                    .HasForeignKey(d => d.Author)
                    .HasConstraintName("FK__Books__Author__4316F928");

                entity.HasOne(d => d.GenreNavigation)
                    .WithMany(p => p.Books)
                    .HasForeignKey(d => d.Genre)
                    .HasConstraintName("FK__Books__Genre__4222D4EF");
            });

            modelBuilder.Entity<BooksInLanguage>(entity =>
            {
                entity.Property(e => e.BooksInLanguageId).HasColumnName("BooksInLanguageID");

                entity.HasOne(d => d.BookNavigation)
                    .WithMany(p => p.BooksInLanguages)
                    .HasForeignKey(d => d.Book)
                    .HasConstraintName("FK__BooksInLan__Book__46E78A0C");

                entity.HasOne(d => d.LanguageNavigation)
                    .WithMany(p => p.BooksInLanguages)
                    .HasForeignKey(d => d.Language)
                    .HasConstraintName("FK__BooksInLa__Langu__45F365D3");
            });

            modelBuilder.Entity<Genre>(entity =>
            {
                entity.ToTable("Genre");

                entity.Property(e => e.GenreId).HasColumnName("GenreID");

                entity.Property(e => e.GenreName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.LocationNavigation)
                    .WithMany(p => p.Genres)
                    .HasForeignKey(d => d.Location)
                    .HasConstraintName("FK__Genre__Location__3A81B327");
            });

            modelBuilder.Entity<Language>(entity =>
            {
                entity.ToTable("Language");

                entity.Property(e => e.LanguageId).HasColumnName("LanguageID");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("location");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.LocationName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
