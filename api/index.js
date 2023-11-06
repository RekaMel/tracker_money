const express = require("express");
const app = express();
const port = 4000;

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
