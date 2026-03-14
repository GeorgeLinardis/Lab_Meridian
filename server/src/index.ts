import app from './app';

const start = async (): Promise<void> => {
  try {
    await app.listen({ port: Number(process.env.PORT) || 3001, host: '0.0.0.0' });
    app.log.info(`Server listening on port ${process.env.PORT || 3001}`);
  } catch (err: unknown) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
