import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import productRoutes from "./Routes/product.js";
import userRoutes from "./Routes/users.js";

dotenv.config();

connectDB();

const app = express();
app.use(cors());

app.use("/products", productRoutes);
app.use("/user", userRoutes);

app.use(
  bodyParser.json({ parameterLimit: 100000, limit: "50mb", extended: true })
);
app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: "50mb",
    extended: true,
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "--prefic client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
