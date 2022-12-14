const path = require("path");
const express = require("express");

const rootDir = require("./util/path");

const bodyParser = require("body-parser");
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");
const useError = require('./controllers/error');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRoutes);
app.use(shopRouter);


app.use(useError.Error);


app.listen(3000);

