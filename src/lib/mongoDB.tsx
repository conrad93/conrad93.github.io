import mongoose from "mongoose";

const dbURI = process.env.MONGODB_URI as string;

if (!dbURI) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<mongoose.Connection> {
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false
      };

      cached.promise = mongoose.connect(dbURI, opts).then((mongoose) => {
        return mongoose.connection;
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;