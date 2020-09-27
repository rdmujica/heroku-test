import 'reflect-metadata';
import createApp from './app';
import connect from './database';

const PORT = process.env.PORT || 3001;

const main = async () => {
  const app = await createApp();
  app.listen(PORT);
  // eslint-disable-next-line no-console
  console.log(`Server listening in port ${PORT}`);
};

connect();
main();
