1. Get all the tasks assigned to Pavel;
select * from task where  user_id = 7;


2. Find how many tasks each user is responsible for;

Select user.id, user.name, COUNT(task.id) as total_tasks
from user 
join task  on user.id = task.user_id
group by user.id, user.name
order by user.id;

3. Find how many tasks with a status=Done each user is responsible for;
select user.id as user_id, user.name as user_name, COUNT(task.id) as done_tasks_count
FROM user JOIN task  ON user.id = task.user_id
join status  on task.status_id = status.id
WHERE status.name = 'Done'
GROUP BY user.id, user.name
order by user.id