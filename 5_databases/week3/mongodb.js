const database = "HYF-angel";
const collection = "UsersScope";
use(database);
db.createCollection(collection);

db.UsersScope.insertOne({ name: "angel", email: "angelaboah@gmail.com" });
db.UsersScope.insertOne({
  name: "angel",
  email: "angelaboah@gmail.com",
  age: 21,
});
db.UsersScope.insertOne({
  name: "bob",
  email: "angelaboah@gmail.com",
  age: 20,
  address: "Aarhus",
});
db.UsersScope.find();
db.UsersScope.find({ name: "bob" });
db.UsersScope.countDocuments({ age: 20 });
db.UsersScope.updateOne({ name: "sharon" }, { $set: { age: 30 } });

db.UsersScope.insertOne({
  name: "Henrietta",
  address: "Heimsdalparken 20",
  age: 27,
  country: "Liberia",
  PhoneNumber: "71514405",
});
db.UsersScope.updateOne({ name: "bob" }, { $set: { email: "bob@gmail.com" } });
db.UsersScope.updateOne(
  { name: "Henrietta" },
  { $set: { address: "Thomas Windings Gade 950" } }
);
db.UsersScope.deleteOne({ age: 27 });
db.UsersScope.find({ age: { $in: [10, 30] } });
db.UsersScope.drop({ collection: "UsersScope" });
