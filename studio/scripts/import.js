// Import semua data JSON dari src/data/ ke Sanity.
// Jalankan: npm run import
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = resolve(__dirname, "../../src/data");

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId) throw new Error("SANITY_STUDIO_PROJECT_ID belum diset di studio/.env");
if (!token) throw new Error("SANITY_API_TOKEN belum diset di studio/.env (butuh token write dari sanity.io/manage)");

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

const readJson = (name) => JSON.parse(readFileSync(resolve(DATA_DIR, name), "utf-8"));

async function run() {
  const site = readJson("site.json");
  const copy = readJson("copy.json");
  const perks = readJson("perks.json");
  const services = readJson("services.json");

  const tx = client.transaction();

  // Singleton: site
  tx.createOrReplace({ _id: "site", _type: "site", ...site });

  // Singleton: siteCopy (semua section copy)
  tx.createOrReplace({ _id: "siteCopy", _type: "siteCopy", ...copy });

  // Collection: perks
  perks.forEach((p, idx) => {
    const id = `perk-${p.title.toLowerCase().replace(/\s+/g, "-")}`;
    tx.createOrReplace({
      _id: id,
      _type: "perk",
      order: idx + 1,
      icon: p.icon,
      title: p.title,
      desc: p.desc,
    });
  });

  // Collection: services
  services.forEach((s, idx) => {
    tx.createOrReplace({
      _id: `service-${s.id}`,
      _type: "service",
      order: idx + 1,
      id: { _type: "slug", current: s.id },
      icon: s.icon,
      title: s.title,
      desc: s.desc,
      price: s.price || "",
    });
  });

  const result = await tx.commit();
  console.log(`✓ Imported ${result.results.length} dokumen ke dataset "${dataset}"`);
}

run().catch((err) => {
  console.error("Import gagal:", err.message);
  process.exit(1);
});
