import { db } from "@/lib/db";
import fs from "fs";
import path from "path";

const seedFolder = path.join(__dirname, "seed");

async function loadJSON(file: string) {
  const filePath = path.join(seedFolder, file);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

async function seedDatabase() {
  try {
    console.log("🌱 Starting database seeding...");
    const users = await loadJSON("user.json");
    const richTexts = await loadJSON("richText.json");

    console.log("❌ Removing data");
    await db.user.deleteMany();
    await db.richText.deleteMany();

    console.log("🌱 Seeding...");

    await db.user.createMany({ data: users });
    await db.richText.createMany({ data: richTexts });

    console.log("✅ Seeding complete!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  }
}

seedDatabase();
