-- Active: 1706445451493@@127.0.0.1@3306@HYFSql
select * from status

Find out how many tasks are in the task table

select count(id) as task_count from task;
Find out how many tasks in the task table do not have a valid due date

select count(task.id) from task
where task.due_date is null

Find all the tasks that are marked as done

select * from task where status_id = 3;
Find all the tasks that are not marked as done

select * from task where status_id != 3;

Get all the tasks, sorted with the most recently created first

select * from task order by created desc;


Get the single most recently created task

select * from task order by created desc limit 1;
Get the title and due date of all tasks where the title or description contains database

select title, due_date from task where title like '%database%' or description like '%database%';

Get the title and status (as text) of all tasks

select task.title, status.name as status
from task 
 join status on task.status_id = status.id;
Get the name of each status, along with a count of how many tasks have that status

select status.name as status, COUNT(task.id) as task_count
from status 
 left join task on status.id = task.status_id
group by status.id;
Get the names of all statuses, sorted by the status with most tasks first


select s.name as status, count(t.id) as task_count
from status s
 left join task t on s.id = t.status_id
GROUP BY s.id
order by task_count desc;