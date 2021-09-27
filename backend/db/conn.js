const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we have a good "db" object
      if (db)
      {
        _db = db.db("SEPERDatabase");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};

// const mongoose = require('mongoose');
// const db = process.env.ATLAS_URI;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       db,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       }
//     );

//     console.log('MongoDB is Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;