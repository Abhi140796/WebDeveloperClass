import express from "express";

const app = express();
const port = 3000;

// Step 2: Make sure that static files are linked to and the CSS shows up.
app.use(express.static("D:/WebDeveloperClass/Assigments/4.3 EJS Partials/public"));

// Step 1: Render the home page "/" index.ejs
app.get("/", (req, res) => {
  res.render("D:/WebDeveloperClass/Assigments/4.3 EJS Partials/views/index.ejs");
});

// Step 3: Add the routes to handle the render of the about and contact pages.
app.get("/about", (req, res) => {
  res.render("D:/WebDeveloperClass/Assigments/4.3 EJS Partials/views/about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("D:/WebDeveloperClass/Assigments/4.3 EJS Partials/views/contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
