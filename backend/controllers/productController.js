import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from "../models/Product.js";

export async function getProducts(req, res) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createProduct(req, res) {
  try {
    await addProduct(req.body);
    res.json({ message: "Товар додано" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function editProduct(req, res) {
  try {
    const id = req.params.id;

    await updateProduct(id, req.body);

    res.json({ message: "Товар оновлено" });
  } catch (err) {
    console.log("❌ Edit error:", err);
    res.status(400).json({ error: err.message });
  }
}

export async function removeProduct(req, res) {
  try {
    const id = req.params.id;

    await deleteProduct(id);

    res.json({ message: "Товар видалено" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function exportCSV(req, res) {
  try {
    const products = await getAllProducts();

    const header = "ID,Name,Category,Price,Quantity,Description,CreatedAt\n";

    const rows = products
      .map(p =>
        [
          p.id,
          `"${p.name}"`,
          `"${p.category}"`,
          p.price,
          p.quantity,
          `"${p.description}"`,
          p.createdAt
        ].join(",")
      )
      .join("\n");

    const csv = header + rows;

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="products.csv"');

    res.send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
