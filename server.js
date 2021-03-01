const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');

var routes = require("./controllers/burgers_controller");


app.listen(3000, () => {
    console.log('Server is up at PORT ' + PORT);
});

