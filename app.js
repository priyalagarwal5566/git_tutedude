const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/submitform", async (req, res) => {
  const { itemName, itemDescription } = req.body;

  try {
    await axios.post("http://backend:5000/submit", {
      itemName,
      itemDescription
    }, { timeout: 5000 });
    res.send("<h3>Form submitted successfully! ✅</h3><a href=\"/\">Go back</a>");
  } catch (error) {
    console.error("Error sending to backend:", error.message || error);
    res.status(500).send("<h3>Error: Could not reach backend</h3><a href=\"/\">Go back</a>");
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Frontend running on port", PORT));
