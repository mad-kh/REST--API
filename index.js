const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const app = express();
// Connection
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("The DATABASE is connected");
  }
);

app.use(express.json());

app.use(require("./routes"));
//Listenning to the port
app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`The DATABASE is connected on port ${process.env.PORT}`);
});
