const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToMongo = require('./db')
const authRoutes = require('./routes/auth')
const orderRoutes = require('./routes/order')


dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

connectToMongo();

app.use(cors({
  origin: "*",
}));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.json());
app.use("/uploads" , express.static('uploads'));



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/auth',authRoutes);
app.use('/order',orderRoutes);


app.listen(port, () => {
  console.log(`backend listening on port ${port}`);
});
