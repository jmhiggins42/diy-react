import * as express from "express";
import { join } from "path";

const app = express();

app.use(express.static(join(__dirname, "../public")));

app.listen(5000, () => console.log("Like, checkout port 5000 man"));
