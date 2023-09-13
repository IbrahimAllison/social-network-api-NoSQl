// Codes in line 2 and 3 import the necessary dependencies models  
const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

// Imports a connection module from ".../config/connection"
const connection = require("../config/connection");

const users = [
  {
    username: "ibrahimallison",
    email: "ibrola5@gmail.com",
    thought: [],
  },
];

console.log(connection);

// The code snippets in line 19 through 22 below will connect to Mongoose database and remove the existing database.
connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  // The code to insert user data into the MongoDB databases
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Database seeded!");
  process.exit(0);
});