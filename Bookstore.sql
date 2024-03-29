create database bookstore

use bookstore

create table location(
LocationID int identity(1,1) PRIMARY KEY,
LocationName varchar(100)
)
insert into location values ('Top-right shelf'),
('Middle-right shelf'),
('Bottom-right shelf'),
('Top-left shelf'),
('Middle-left shelf'),
('Bottom-left shelf')

create table Genre(
GenreID int identity(1,1) PRIMARY KEY,
GenreName varchar(100),
Location int FOREIGN KEY REFERENCES Location(LocationID)
)

insert into Genre values ('Horror', 1),
('Thriller', 2),
('Romance', 3),
('Fantasy', 4),
('Self-Help', 5),
('AutoBiography',5)

create table Language(
LanguageID int identity(1,1) PRIMARY KEY,
Name varchar(100)
)

Insert into Language values ('Hindi'), ('English'),
('Gujarati'), ('Japanese'), ('Korean')

create table Authors (
AuthorID int identity(1,1) PRIMARY KEY,
AuthorName varchar(200),
Gender varchar(20) check(Gender in('Male', 'Female', 'Trans', 'Others')),
About varchar(1000)
)


insert into Authors values ('Sara J Mass', 'Female', 'She is a female writer'),
('Adam Silvera', 'Male', 'He is a famous writer'),
('Chitra Banerjee Divakaruni', 'Female', 'she is an Indian writer')


create table Books(
BookID int identity(1,1) PRIMARY KEY,
Title varchar(200),
Description varchar(1000),
ISBN varchar(10),
Genre int FOREIGN KEY REFERENCES Genre(GenreID),
Author int FOREIGN KEY REFERENCES Authors(AuthorID),
Price decimal(5,2),
ReleasedDate date
)

insert into Books values('A court of Thorns and Roses', 'A Court of Thorns and Roses is a new adult high fantasy novel series by American author Sarah J. Maas, beginning with the novel of the same name, released in May 2015. The story follows the journey of mortal Feyre Archeron after she is brought into the faerie lands of Prythian for murdering a faerie', ' 9781408', 4,1, 595.00, '2015-05-05')
insert into Books values('A court of Mist and Fury', 'THE SECOND BOOK IN THE #1 BESTSELLING SERIES With bits of Buffy, Game Of Thrones and Outlander, this is a glorious series of total joy - STYLIST_____________________________Feyre survived Amarantha clutches to return to the Spring Court - but at a steep cost.', ' 97250', 4,1, 600.00, '2016-04-22')


insert into Books values ('Palace Of Illusions', 'The Palace of Illusions: A Novel is a 2008 novel by award-winning novelist and poet Chitra Banerjee Divakaruni. It was released by Doubleday. The novel is a rendition of the Hindu epic Mahabharata as told from Draupadi viewpoint', '955400', 4, 3, 300.00, '2008-01-08')



create table BooksInLanguages(
BooksInLanguageID int identity(1,1) PRIMARY KEY,
Language int FOREIGN KEY REFERENCES Language(LanguageID),
Book int FOREIGN KEY REFERENCES Books(BookID)
)

insert into BooksInLanguages values (1, 5),
(2,5),
(2,3),
(5,3),
(2,4),
(5,4)

alter table books
add Images varchar(225)


alter table booksInLanguages
add Quantity int


alter table Books 
add IsActive bit

alter table Authors
add IsActive bit

alter table Genre
add IsActive bit

alter table Language
add IsActive bit

alter table Location
add IsActive bit




create trigger InsteadOfDelete
on
books
instead of delete
as
update Books
set isActive=0
where BookID= (select BookID from deleted)


create trigger InsteadOfDeletingAuthor
on 
authors
instead of delete
as
update Authors
set isActive=0
where AuthorID= (select AuthorID from deleted)

create trigger InsteadOfDeletingGenre
on genre
instead of delete
as
update genre
set isActive=0
where GenreID=(select GenreID from deleted)

create trigger insteadOfDeletingLanguage
on language
instead of delete
as
update Language
set IsActive=0
where LanguageID=(select LanguageID from deleted)


create table Users(
UserID int identity(1,1) PRIMARY KEY,
UserName varchar(100),
email varchar(225),
password varchar(100),
Role  varchar(20) check(Role in('Admin', 'Operator'))
)


insert into Users values('userOne', 'userOne@gmail.com', 'userOne12', 'Admin'),
('userTwo', 'userTwo@gmail.com', 'userTwo12', 'Admin'),
('userThree', 'userThree@gmail.com', 'userThree12', 'Operator')


alter table users
add isActive bit

create procedure GetInfo
as
select b.Title, b.Price,b. images, g.GenreName,a.AuthorName, l.Name, bl.Quantity from Books as b join BooksInLanguages as bl on b.BookID=bl.Book

join Language as l on bl.Language=l.LanguageID
join Genre as g on g.GenreID=b.Genre
join Authors as a on a.AuthorID=b.Author
where b.IsActive=1 and l.IsActive=1


execute GetInfo