import express from "express";

const app = express();

app.get("/", (req, resp) => {
    // console.log(req.rawHeaders);
    resp.send("<h1>Hello Bro!</h1>");
});

app.post("/register", (req, resp) => {
    resp.sendStatus(201);
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});