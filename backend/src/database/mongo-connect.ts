/* eslint-disable no-console */
import { connect, set } from 'mongoose';

const connectMongoDB = async () => {
  try {
    set('strictQuery', false);
    await connect(process.env.MONGO_URI!);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error((err as Error).message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectMongoDB;
