import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

if (!projectId) {
  console.warn("[sanity] VITE_SANITY_PROJECT_ID belum diset — fetch akan gagal. Cek .env.local");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  useCdn: true,
});
