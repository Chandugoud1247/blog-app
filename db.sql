SELECT * FROM blog.blogs;

truncate blog.blogs;

INSERT INTO blog.blogs (id, title, description,category,file,created_at)
 VALUES ('1', 'Hanuman', 'Hanuman Chalisa','Book','Deatils on book','2024-01-01');
 use blog;
 create table blogs 
 (id varchar(20),
 title varchar(30), description varchar(50),category varchar(40),file varchar(1000),created_at date)