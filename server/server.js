import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import productRoutes from "./routes/product.js";
import userRouter from "./routes/users.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use(cors());
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

app.use("api/products", productRoutes);
app.use("api/user", userRouter);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Hello to This StoreFronts API");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
