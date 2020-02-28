### Queries
create table areas (
	id serial primary key not null,
	deion varchar not null
);

create table disciplines (
	id serial primary key not null,
  area_id integer references areas(id) not null,
  deion varchar not null
);

create table topics (
	id serial primary key not null,
  discipline_id integer references disciplines(id) not null,
  book_id integer references books(id) not null,
  deion varchar not null,
  chapter integer not null,
  page integer not null
);

create table books (
	id serial primary key not null,
  deion varchar not null
);

drop schema public cascade
create schema public

insert into books (deion) values ('Livro SAS 1'), ('Livro SAS 2'), ('Livro SAS 3');

insert into areas (deion) values ('Ciências da Natureza'), ('Matemática'), ('Ciências Humanas'), ('Linguagens');

insert into disciplines (area_id, deion) values (1, 'Física'), (1, 'Química'), (1, 'Biologia');

insert into disciplines (area_id, deion) values (2, 'Matemática');

insert into disciplines (area_id, deion) values (3, 'História do Brasil'), (3, 'História Geral'), (3, 'Geografia'), (3, 'Filosofia e Sociologia');

insert into disciplines (area_id, deion) values (4, 'Literatura'), (4, 'Língua Portuguesa'), (4, 'Educação Física e Artes');

insert into topics (discipline_id, deion, book_id, chapter, page) values (1, 'Eletricidade', 1, 2, 30), (1, 'Hidrostática', 1, 2, 36), (1, 'Ondas', 1, 1, 25), (1, 'Óptica', 1, 1, 29);

insert into topics (discipline_id, deion, book_id, chapter, page) values (2, 'Unidades de concentração', 2, 3, 51), (2, 'Estequiometria', 2, 3, 62), (2, 'pH e pOH', 2, 4, 70), (2, 'Cadeias Carbônicas', 2, 4, 82);

insert into topics (discipline_id, deion, book_id, chapter, page) values (3, 'Ecologia e Sustentabilidade', 3, 5, 102), (3, 'Evolução',3, 5, 102), (3, 'Imunização',3, 6, 67), (3, 'Genética e mutações',3, 6, 87);

insert into topics (discipline_id, deion, book_id, chapter, page) values (4, 'Porcentagem', 3, 3, 67), (4, 'Razões e proporções',3, 3, 25), (4, 'Leitura e interpretação de gráficos',3, 4,56), (4, 'Medidas para dados simples',3, 4,31);

insert into topics (discipline_id, deion, book_id, chapter, page) values (5, 'Período Colonial',1, 1, 9), (5, 'República',1, 1,26), (5, 'Período de escravidão',1, 2,64), (5, 'Era Vargas',1,2,35);

insert into topics (discipline_id, deion, book_id, chapter, page) values (6, 'Período de Idade Média e Moderna', 2,7, 54), (6, 'Revolução industrial',2,7,59), (6, 'Primeira e Segunda Guerra Mundial',2,8,64), (6, 'Nazismo,Holocausto e Fascismo',2,8,75);

insert into topics (discipline_id, deion, book_id, chapter, page) values (7, 'Agricultura Brasileira',3,9,91), (7, 'Impactos no meio ambiente',3,9,114), (7, 'Planos e blocos econômicos',3,10,125), (7, 'Geopolítica mundial',3,10, 133);

insert into topics (discipline_id, deion, book_id, chapter, page) values (8, 'Globalização e suas consequências',1,3,24), (8, 'Iluminismo',1,3, 54), (8, 'Existencialismo',1,4,65), (8, 'Marxismo',1,4,78);

insert into topics (discipline_id, deion, book_id, chapter, page) values (9, 'Figuras de linguagem',2,7,81), (9, 'Poesias Concretas',2,7,76);

insert into topics (discipline_id, deion, book_id, chapter, page) values (10, 'Funções de linguagem e gramática',3,3,58), (10, 'Compreensão e interpretação de texto',3,4,63);

insert into topics (discipline_id, deion, book_id, chapter, page) values (11, 'Esportes',1,11,129), (11, 'Música',1,11,134);

select id, deion from areas;
select id, deion from areas where deion=''

select d.id discipline_id, d.deion discipline, a.id area_id, a.deion area from disciplines d join areas a on a.id=d.area_id
select d.id discipline_id, d.deion discipline, a.id area_id, a.deion area from disciplines d join areas a on a.id=d.area_id where d.deion=''

select t.id topic_id, t.deion topic, b.deion book, t.chapter, t.page, d.id discipline_id, d.deion discipline from topics t join disciplines d on d.id=t.discipline_id join books b on b.id=t.book_id

select t.id topic_id, t.deion topic, d.id, d.deion discipline from topics t join disciplines d on d.id=t.discipline_id where t.deion=''

