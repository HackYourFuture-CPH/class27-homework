---homework week 2part 1----

--adding new task--

insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (36, 'enjoy life', 'stability, relaxation, etc.', '2017-02-20 01:42:56', '2017-05-04 07:20:56', '2017-03-23 10:13:42', 2, NULL);

--updating title from wash clothes to paint the walls--

UPDATE task set title = 'paint the walls' where id = 1;

--updating due date from on user id 8 from task ---

UPDATE task set due_date = '2024-05-05 19:42:15' where id = 8;

--updating status from task---

UPDATE task set status_id = '1' where id = 11;

--marking a task as complete/done--

UPDATE task set status_id = '3' where id = 34;

--deleting a task: Empty Mr Fluffys litterbox ------

DELETE FROM task WHERE id = 26;
