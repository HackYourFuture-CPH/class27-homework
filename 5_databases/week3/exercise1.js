const database = "Todo";
const collection = "Users";
use(database);
db.createCollection("Users");
db.createCollection("Statuses");
db.createCollection("Tasks");

db.Users.insertOne({
  name: "Aarika Ellingworth",
  email: "aellingworth0@harvard.edu",
  phone: "483-396-8795",
});
db.Users.updateOne(
  { name: "Aarika Ellingworth" },
  { $set: { phone: "483-396-8795" } }
);
db.Users.find();
db.Users.insertMany([
  {
    name: "Pren Goldsworthy",
    email: "pgoldsworthy1@spotify.com",
    phone: "635-572-8467",
  },
  { name: "Pablo Kisbee", email: "pkisbee2@lulu.com", phone: "790-962-8683" },
  {
    name: "Rodie Duncan",
    email: "rduncan3@quantcast.com",
    phone: "646-743-6191",
  },
  {
    name: "Aubry Polak",
    email: "apolak4@indiatimes.com",
    phone: "302-678-7931",
  },
  {
    name: "Maryrose Meadows",
    email: "mmeadows5@comcast.net",
    phone: "251-524-6594",
  },
  {
    name: "Pavel Brushneen",
    email: "pbrushneen6@techcrunch.com",
    phone: "316-170-3640",
  },
  { name: "Hedy Gerault", email: "hgerault7@nymag.com", phone: "176-177-5579" },
  {
    name: "Wang Xiuying",
    email: "wang.xiuying@weebly.com",
    phone: "891-952-6749",
  },
  { name: "Elias Github", email: "elias@github.com", phone: "202-517-6983" },
  { name: "Donald Duck", email: "donald@duck.com", phone: "203-517-6983" },
]);
db.Users.find().pretty();

db.Statuses.insertMany([
  { name: "Not started" },
  { name: "In progress" },
  { name: "Done" },
]);

db.Statuses.find().pretty();

db.Tasks.insertMany([
  {
    title: "Wash clothes",
    description: "Title says it all.",
    created: "2017-10-25 06:54:16",
    updated: "2017-10-15 13:05:09",
    due_dated: "2017-11-22 20:58:03",
  },
  {
    title: "Become a billionaire",
    description:
      "This should not take long, just invent a time machine, travel back to 2010 and buy bitcoin",
    created: "2017-09-26 03:06:46",
    updated: "2017-10-08 06:14:31",
    due_date: "2017-12-22 20:58:03",
  },
  {
    title: "Plan meeting with London office",
    description: "We will probably use skype",
    created: "2017-10-04 18:07:37",
    updated: "2017-10-14 16:01:31",
    due_date: "2017-12-05 19:42:15",
  },
  {
    title: "Order groceries online",
    created: "The fridge is almost empty, we need eggs and milk",
    created: "2017-09-20 19:34:43",
    updated: "2017-10-15 23:35:45",
    due_date: "2017-12-24 16:00:46",
  },
  {
    title: "Empty the mailbox",
    description: "check for vital mail before it is emptied",
    created: "2017-09-27 15:17:08",
    updated: "2017-10-08 17:31:16",
    due_date: "2017-09-19 17:01:10",
  },
  {
    title: "Fix the flat tire on the bike",
    description: "Tools are in the garage",
    created: "2017-09-13 23:16:30",
    updated: "2017-10-06 04:03:52",
    due_date: "2017-12-07 11:51:11",
  },
  {
    title: "Wash the car",
    description: "use a good car wash station",
    created: "2017-10-06 19:39:16",
    updated: "2017-10-03 04:49:05",
    due_date: "2017-12-04 17:43:16",
  },
  {
    title: "Walk the dog",
    description: "take the best route",
    created: "2017-09-03 02:47:17",
    updated: "2017-10-12 18:40:08",
    due_date: "2017-12-09 11:00:35",
  },
  {
    title: "Write a book",
    description: "Maybe something about dragons?",
    created: "2017-10-11 06:14:01",
    updated: "2017-10-17 12:19:08",
    due_date: "2017-12-21 20:18:05",
  },
  {
    title: "Do HackYourFuture homework",
    description: "look for reliable lecture source",
    created: "2017-10-04 13:55:16",
    updated: "2017-10-10 00:18:05",
    due_date: "2017-12-19 17:01:10",
  },
  {
    title: "Iron shirts",
    description: "for work purposes",
    created: "2017-09-23 03:59:58",
    updated: "2017-10-19 08:30:48",
    due_date: "2017-12-08 11:00:35",
  },
  {
    title: "Water the potted plants",
    description: "Maybe they need fertilizer as well",
    created: "2017-09-29 23:38:42",
    updated: "2017-10-08 04:24:53",
    due_date: "2017-12-22 20:18:05",
  },
  {
    title: "Buy wine for the birthday party",
    description: "Both red and white wine",
    created: "2017-10-10 14:57:22",
    updated: "2017-10-14 14:03:30",
    due_date: "2017-12-10 23:43:56",
  },
  {
    title: "Buy gift for Paul",
    description: "He could use a shirt or a tie and some socks",
    created: "2017-09-09 05:22:08",
    updated: "2017-10-17 15:58:05",
    due_date: "2017-12-04 20:45:18",
  },
  {
    title: "Change lightbulb in hallway",
    description: "Should be an LED bulb",
    created: "2017-10-01 19:07:35",
    updated: "2017-10-03 10:02:27",
    due_date: "2017-12-08 17:09:03",
  },
  {
    title: "Wash windows",
    description: "wash with clean cloth and window cleaning soap",
    created: "2017-10-02 22:15:17",
    updated: "2017-10-07 22:31:35",
    due_date: "2017-12-06 03:36:09",
  },
  {
    title: "Setup salary databases for accounting",
    description: "Use MySQL",
    created: "2017-10-25 05:35:33",
    updated: "2017-10-10 23:22:33",
    due_date: "2017-12-05 00:19:08",
  },
  {
    title: "Learn how databases work",
    description:
      "find proper websites and research books to learn more about databases",
    created: "2017-09-06 03:16:47",
    updated: "2017-10-10 16:56:58",
    due_date: "2017-12-18 05:08:05",
  },
  {
    title: "Make the databases perform better",
    description: "It should be possible to optimize the indexes",
    created: "2017-10-03 09:27:20",
    updated: "2017-10-01 16:27:46",
    due_date: "2017-12-01 13:28:35",
  },
  {
    title: "Buy beer for the company party",
    description: "2 or 3 cases should be enough",
    created: "2017-10-08 01:39:02",
    updated: "2017-10-13 23:07:41",
    due_date: "2017-12-25 23:37:18",
  },
  {
    title: "Knit sweater",
    description:
      "sweater for bad rainy and stormy days, and cold weather conditions",
    created: "2017-09-22 17:14:55",
    updated: "2017-10-08 09:01:35",
    due_date: "2017-12-15 20:33:57",
  },
  {
    title: "Charge electric bicycle",
    description: "It sucks to ride it without a battery!",
    created: "2017-10-10 12:25:07",
    updated: "2017-10-07 21:45:01",
    due_date: "2017-12-10 19:02:17",
  },
  {
    title: "Buy new phone",
    description: "The battery in the current one only lasts 5 hours 😞",
    created: "2017-09-17 00:25:34",
    updated: "2017-10-09 11:48:12",
    due_date: "2017-12-09 14:25:40",
  },
  {
    title: "Ride bike aroud Sjælland",
    description: "Remember rainclothes and tire repair kit!",
    created: "2017-10-20 19:21:13",
    updated: "2017-10-07 01:38:06",
    due_date: "2017-12-19 15:08:18",
  },
  {
    title: "Look at apartments in Ørestad",
    description: "2 or 3 rooms",
    created: "2017-10-30 09:47:00",
    updated: "2017-10-19 06:11:26",
    due_date: "2017-12-03 23:04:38",
  },
  {
    title: "Empty Mr Fluffy's litterbox",
    description: "done for more space in Litterbox",
    created: "2017-09-28 03:09:06",
    updated: "2017-10-13 10:38:34",
    due_date: "2017-12-20 23:37:18",
  },
  {
    title: "Buy new dining room table and chairs",
    description: "Ikea has some on sale",
    created: "2017-09-21 12:02:34",
    updated: "2017-10-02 02:05:11",
    due_date: "2017-12-06 00:14:30",
  },
  {
    title: "Renew buscard",
    description: "3 zones",
    created: "2017-10-07 22:47:51",
    updated: "2017-10-09 15:50:03",
    updated: "2017-12-01 14:25:40",
  },
  {
    title: "Sign up for linkedin",
    description: "Make the CV awesome! 😄",
    created: "2017-09-04 00:57:47",
    updated: "2017-10-18 18:07:48",
    due_date: "2017-12-07 23:04:38",
  },
  {
    title: "Remove facebook from phone",
    description: "To avoid interruptions when working",
    created: "2017-10-26 17:15:07",
    updated: "2017-10-13 03:36:47",
    due_date: "2017-12-19 11:10:02",
  },
  {
    title: "Backup databases to external disk",
    description: "Remember to store the disk in another physical location",
    created: "2017-09-09 17:32:33",
    updated: "2017-10-01 21:18:59",
    due_date: "2017-12-23 14:21:01",
  },
  {
    title: "Put up the new lamp in the hallway",
    description: "house decoration",
    created: "2017-10-15 05:45:54",
    updated: "2017-10-16 14:05:35",
    due_date: "2017-12-29 02:29:26",
  },
  {
    title: "Hang up paintings in living room",
    description: "doing some house makeover",
    created: "2017-09-10 05:36:11",
    updated: "2017-10-09 17:40:42",
    due_date: "2017-09-23 10:13:42",
  },
  {
    title: "Buy plane ticket to Auckland",
    description: "Check prices online first!",
    created: "2017-09-05 09:07:22",
    updated: "2017-10-15 09:36:06",
    due_date: "2017-12-07 11:10:05",
  },
  {
    title: "Learn about NoSQL databases",
    description: "MongoDB, CouchDB, etc.",
    created: "2017-10-20 01:41:53",
    updated: "2017-10-04 07:19:56",
    due_date: "2017-12-23 10:13:42",
  },
]);

db.Tasks.find().pretty();

const usersLength = db.Users.find().count();
print(`Length of Users collection: ${usersLength}`);

const statusesLength = db.Statuses.find().count();
print(`Length of Statuses collection: ${statusesLength}`);

const tasksLength = db.Tasks.find().count();
print(`Length of Tasks collection: ${tasksLength}`);

db.Tasks.find().limit(1);

db.Tasks.find().skip(2).limit(1);

db.Tasks.find({
  description: "learning Danish during physical working",
}).pretty();
