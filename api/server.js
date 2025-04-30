require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");

const { CronJob } = require("cron");

const app = require("./app");
const { maintenance } = require("./testRequests/testReqs");
const deleteAllNewFiles = require("./seed/seed");

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DATABASE_URL);
    console.log("Succesfully connected to MongoDB");

    app.listen(5000, () => {
      console.log(`Listening at http://localhost:5000`);
    });

    deleteAllNewFiles();

    // Scheduling maintenance for 1:00 AM every day
    new CronJob(
      "0 1 * * *",
      async function () {
        console.log("Starting maintenance!");
        deleteAllNewFiles();
        await maintenance();
      },
      null,
      true
    );
  } catch (err) {
    console.log(err);
  }
};

start();
