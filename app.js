const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/user", userRoutes);


app.listen(port, () => {
  console.log("Server started on port: " + port);
});

app.use(function (req, res, next) {
  res.status(404);

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

