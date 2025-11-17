import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
