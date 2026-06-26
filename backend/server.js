const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Mega SicBo Backend OK");
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    time: new Date()
  });
});

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log("SERVER STARTED:", PORT);
});
