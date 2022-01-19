const express = require("express");
const app = express();
const PORT = 8080;

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/tshirt", (req, res) => {
  res.status(200).send({ tshirt: "👕", size: "large" });
});

// create new data on the server
app.post("tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "we need a logo" });
  }

  res.send({ tshirt: `👕 with your ${logo} and ID of ${id}` });
});

app.listen(PORT, () => console.log(`it's alive on port ${PORT}`));
