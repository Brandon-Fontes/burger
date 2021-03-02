const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expbs({ defaultLayout: "main", partialsDir: __dirname + './view/partials'}));
app.set('view engine', 'handlebars');

var router = require("./controllers/burgers_controller");
app.use(router);


app.listen(3000, () => {
    console.log('Server is up at PORT ' + PORT);
});

