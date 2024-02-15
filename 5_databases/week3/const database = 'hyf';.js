const database = 'hyf';
const collection = 'users';
use(database);
db.createCollection(collection);

db.users.insertOne({ name: "Lawan", email: "lawansubba@gmail.com"});
db.users.insertOne({ name: "Lawan", email: "lawansubba@gmail.com", age: 30});
db.users.insertOne({ name: "Lawan", email: "lawansubba@gmail.com", age: 30, address: "Aarhus"} );

db.users.find();
db.users.find({name: "Lawan"});
db.users.countDocuments({age: 30});
db.users.updateOne({name: "Lawan"}, { $set: {age: 23}});

db.users.deleteOne({age: 30});

//Add a user with your name, address, age, country, phonenumer

db.users.insertOne({ name: "Maryam", address:"8200, Aarhus N", age: 32, country: "Iran"});

//Update your address based on name
db.users.updateOne({address: "8200, Aarhus N"}, {$set: {address: "Brendsrupvej, 8200, Aarhus N"}});

//delete your record
db.users.deleteOne({name: "Maryam"});

//find users whose age is either 10 or 30
db.users.find({age: 10}, {age: 30});

db.users.drop();