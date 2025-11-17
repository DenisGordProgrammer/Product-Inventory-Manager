import { initDB } from "./db.js";

export async function getAllProducts() {
  const db = await initDB();
  const rows = await db.all("SELECT * FROM products ORDER BY id DESC");
  return rows;
}

export async function addProduct(product) {
  const db = await initDB();
  const { name, sku, category, quantity, price, description } = product;
  const createdAt = new Date().toISOString();

  await db.run(
    `INSERT INTO products (name, sku, category, quantity, price, description, createdAt)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, sku, category, quantity, price, description, createdAt]
  );
}

export async function updateProduct(id, product) {
  const db = await initDB();
  const { name, sku, category, quantity, price, description } = product;

  await db.run(
    `UPDATE products
     SET name = ?, sku = ?, category = ?, quantity = ?, price = ?, description = ?
     WHERE id = ?`,
    [name, sku, category, quantity, price, description, id]
  );
}

export async function deleteProduct(id) {
  const db = await initDB();
  await db.run("DELETE FROM products WHERE id = ?", [id]);
}
