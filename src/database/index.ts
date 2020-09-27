import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
  const USER = process.env.PRODUCT_LIST_USER;
  const PASSWORD = process.env.PRODUCT_LIST_PASSWORD;
  const HOST = process.env.PRODUCT_LIST_HOST;
  const PORT = process.env.PRODUCT_LIST_PORT;

  try {
    await mongoose.connect(
      `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/promotions?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    // eslint-disable-next-line no-console
    console.log('>>> Database connected');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error', error.message);
  }
};

export default connect;
