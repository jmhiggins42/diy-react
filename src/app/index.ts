import * as express from 'express';

const app = express();

app.get('/api', (_, res) => {
  res.status(200).send('Hey there!');
});

app.listen(5000, () => {
  console.log('Like, checkout port 5000 man'); // tslint:disable-line:no-console
});

export default app;
