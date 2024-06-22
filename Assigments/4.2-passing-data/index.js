import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("D:/WebDeveloperClass/Assigments/4.2-passing-data/views/index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("D:/WebDeveloperClass/Assigments/4.2-passing-data/views/index.ejs", { numberOfLetters: numLetters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
