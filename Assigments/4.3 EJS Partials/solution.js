import express from "express";

const app = express();
const port = 3000;
app.use(express.static("D:/WebDeveloperClass/Assigments/4.3 EJS Partials/public"));
app.get("/", (req, res) => {
  res.render("D:/WebDeveloperClass/Assigments/4.3 EJS Partials/views/index.ejs");
});

app.get("/about", (req, res) => {
  res.render("D:/WebDeveloperClass/Assigments/4.3 EJS Partials/views/about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("D:/WebDeveloperClass/Assigments/4.3 EJS Partials/views/contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
