const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "helloworld",
  });
});

app.listen(3001, () => {
  console.log(`hello docker 3001`);
});
