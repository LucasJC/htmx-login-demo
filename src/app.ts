import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
// set up middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true })); 
// serve static content
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/forbidden", function (req: express.Request, res: express.Response) {
  res.status(403).send({});
});

app.use("/api/login", function (req: express.Request, res: express.Response) {
  // here we would retrieve user from database and compare passwords
  if (req.body.email === "valid@email.com" && req.body.password === "password") {
    setTimeout( () => {
      res.setHeader("HX-Redirect", "/home.html");
      res.send("Logged in. Redirecting to home...");
    }, 2000);

  } else {
    setTimeout(() => {
      const message = "Invalid credentials";
      res.send(`<div class="notification is-danger" >${message}</div>`);
    }, 2000);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Up on port ${port}!`);
})