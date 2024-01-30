Select * from status

Select title, description, created from task
limit 5;

Select * from user;

select name, phone from user;

select name, id from user where id = 10;
select count(id) from user;

select the names of the first 5 users in the  database;
select name from user limit 5

Select the names of the last 3 users in the database;
select * from user order by id desc limit 3;

Sum all the ids in the user table;
select sum(id) from user;
select MIN(id) from user;
select MAX(id) from user;

Select all users and order them alphabetically by name;
select * from user order by name;


Find all tasks that include SQL either on the title or on the description;
select * from task where title like '%sql%' or description like '%sql%';
select * from task where description like 'sql%';
Find the title of all tasks that the user Maryrose is responsible for;
select * from user ; -- maryrose id = 6
select * from user ; -- select * fromn task where  user_id = 6;
select * from task; where user_id = 6;
select * from task join user on user.id = task.user_id;
select * from task join user on user.id = task.user_id where user.name like '%maryrose%';
Find how many tasks each user is responsible for;
Select user.id, user.name, COUNT(task.id) as total_tasks
from user 
join task  on user.id = task.user_id
group by user.id, user.name
order by user.id;

Find how many tasks with a status=Done each user is responsible for;
select user.id as user_id, user.name as user_name, COUNT(task.id) as done_tasks_count
FROM user JOIN task  ON user.id = task.user_id
join status  on task.status_id = status.id
WHERE status.name = 'Done'
GROUP BY user.id, user.name
order by user.id



