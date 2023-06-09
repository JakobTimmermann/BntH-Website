import express from 'express';
import _ from "lodash";
// Module to detect mobile devices
import useragent from 'express-useragent';

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({
    extended: true
})); // Necessary to tap into data recieved via html form
app.use(express.static("public")); // Upload static files in public folder!
app.use(useragent.express()); // See above


let reisen = [{
        year: "2017",
        city: "Nizza",
        country: "Frankreich",
        andMore: false,
        motto: "Rolling Stones",
        description: "Lorem ipsum dolor sit amet, at adipiscing , sed do eiusmod tempor ut ...",
        thumbnail: 'images/Reisen/2017_Nizza/thumbnail.jpeg',
    },
    {
        year: "2018",
        city: "Dublin",
        country: "Irland",
        andMore: true,
        motto: "Irish Stew",
        description: "Nunc consequat interdum varius sit amet mattis vulputate enim nulla ...",
        thumbnail: 'images/Reisen/2018_Dublin/thumbnail.jpeg',
    },
    {
        year: "2019",
        city: "Tirana",
        country: "Albanien",
        andMore: true,
        motto: "Blutrache",
        description: "Ornare quam viverra orci sagittis eu volutpat. Nam libero justo laoreet sit ...",
        thumbnail: 'images/Reisen/2019_Albanien/thumbnail_alternativ.jpg',
    },
    {
        year: "2020",
        city: "Tessin",
        country: "Schweiz",
        andMore: true,
        motto: "Blutrache",
        description: "Nunc consequat interdum varius sit amet mattis vulputate enim nulla ...",
        thumbnail: 'images/Reisen/2020_Schweiz/thumbnail_flipped.jpg',
    },
    {
        year: "2021",
        city: "Split",
        country: "Kroatien",
        andMore: true,
        motto: "Grenzen auf",
        description: "Lorem ipsum dolor sit amet, at adipiscing , sed do eiusmod tempor ut ...",
        thumbnail: 'images/Reisen/2021_Kroatien/thumbnail.jpg',
    },
    {
        year: "2022",
        city: "Kitzbühl",
        country: "Österreich",
        andMore: true,
        motto: "",
        description: "Nunc consequat interdum varius sit amet mattis vulputate enim nulla ...",
        thumbnail: 'images/Reisen/2022_Österreich/thumbnail.jpg',
    },
]

app.get("/", async (req, res) => {
    const isMobile = req.useragent.isMobile; // Detects Mobile Phones
    res.render("index", {
        isMobile: isMobile,
        reisen: reisen
    });
});

app.get("/mitglieder/Lorenz", async (req, res) => {
    res.render("lenz", {});
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});