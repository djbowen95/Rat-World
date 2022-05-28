const db = require('../config/connection');
const { Rat } = require('../models');

const ratData = require('./ratData.json');

db.once('open', async () => {
  // clean database
  await Rat.deleteMany({}); // Need to remove this eventually. It will delete everyone's rats!

  // bulk create each model
  const rats = await School.insertMany(schoolData);

  console.log('Rats have been added to the database!');
  process.exit(0);
});
