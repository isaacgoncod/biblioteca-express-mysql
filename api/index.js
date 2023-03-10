const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/user.routes");
const bookRoutes = require("./routes/book.routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(express.json());

app.use("/user", userRoutes);
app.use("/book", bookRoutes);

app.listen(3000);
