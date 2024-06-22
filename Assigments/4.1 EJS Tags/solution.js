import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("D:/WebDeveloperClass/Assigments/4.1 EJS Tags/views/solution.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
