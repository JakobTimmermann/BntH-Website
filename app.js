import express from 'express';
import _ from "lodash";
import useragent from 'express-useragent';

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({
    extended: true
})); // Necessary to tap into data recieved via html form
app.use(express.static("public")); // Upload static files in public folder!
app.use(useragent.express());

app.get("/", async (req, res) => {
    const isMobile = req.useragent.isMobile;
    res.render("index", {
        isMobile: isMobile 
    });
});

app.get("/mitglieder/Lorenz", async (req, res) => {
    res.render("lenz", {});
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});