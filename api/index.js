const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/test", function (req, res) {
  res.json({
    message: "Hello World",
  });
});

app.post("/api/transaction", function (req, res) {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server running on localhost: ${port}`);
});
