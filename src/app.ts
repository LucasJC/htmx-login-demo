import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api/login", function (req: express.Request, res: express.Response) {
  if (req.body.email === "valid@email.com" && req.body.password === "password") {
    setTimeout( () => {
      res.status(302);
      res.setHeader("HX-Redirect", "/home.html");
      res.send("ok!");
    }, 2000);
  } else {
    setTimeout(() => {
      const message = "Invalid credentials";
      res.send(`<div class="notification is-danger" >${message}</div>`);
    }, 2000);
  }
});

app.listen(3000, () => {
  console.log("Up on port 3000!");
})