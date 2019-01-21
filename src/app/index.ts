import * as express from 'express';
import { join } from 'path';

const app = express();

app.listen(5000, () => {
  console.log('Like, checkout port 5000 man'); // tslint:disable-line:no-console
});
