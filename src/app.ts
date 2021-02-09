import express from 'express';
import path from 'path';

const app = express();
console.log("Serving files in " + path.join(__dirname, "public"));
app.use('/', express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log("Up on port 3000!");
})