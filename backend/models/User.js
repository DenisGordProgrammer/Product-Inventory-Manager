import { initDB } from "./db.js";
import bcrypt from "bcryptjs";

export async function registerUser(username, password) {
  const db = await initDB();
  const hashed = await bcrypt.hash(password, 10);
  await db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashed]);
}

export async function findUser(username) {
  const db = await initDB();
  return await db.get("SELECT * FROM users WHERE username = ?", [username]);
}
