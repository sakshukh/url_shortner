const shortUrl = require("./routes/shortUrl");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/database");

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);

app.use("/api", shortUrl);

connectDb()
  .then((connect) => {
    console.log(
      `Connected to ${connect.connection.host} and ${connect.connection.name}`
    );
    app.listen(PORT, () => {
      console.log("Listening on http://localhost:" + PORT);
    });
  })
  .catch((e) => {
    console.error("database connection error " + e);
    process.exit(1);
  });
