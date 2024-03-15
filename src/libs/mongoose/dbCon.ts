import mongoose from "mongoose";

// c9XddCqLzuNiDNDQ

function getDbURI(dbname: string) {
  const MONGO_DB_URI_DEV = `mongodb://127.0.0.1:27017/${dbname}?retryWrites=true&w=majority`;
  const LIVE_URI = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_USER}:${process.env.NEXT_PUBLIC_MONGO_PWD}@cluster0.2f29nts.mongodb.net/${dbname}?retryWrites=true&w=majority`;
  const ENV = process.env.NODE_ENV || "developemnt";

  return ENV === "production" ? LIVE_URI : MONGO_DB_URI_DEV;
  // return LIVE_URI
}

// export const db = mongoose.createConnection(MONGO_DB_URI);
export async function dbCon() {
  // const MONGO_DB_URI = getDbURI('splendid_media_db')
  const MONGO_DB_URI = getDbURI("navtelemaDb");
  // Connecting to MongoDB using Mongoose
  mongoose.connect(MONGO_DB_URI);
  // mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
    return false;
  });

  db.once("open", () => {
    console.log("Connected to MongoDB database.");
    return db;
  });
}
