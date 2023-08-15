const express = require("express");
const path = require("path");
require("./src/db/connect_to_db");
const app = express();
const client_detail_validate_router = require("./src/routers/client_detail_validation");
const router_tranlate = require("./src/routers/convert_into_slangs");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // due to html frontend code else no need of this line

const template_path = path.join(__dirname, "templates/views");

app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/", (req, res) => {
    res.render("index");
});


app.use(client_detail_validate_router);
app.use(router_tranlate);

app.get("*", (req, res) => {
    res.render("404page");
});

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
});