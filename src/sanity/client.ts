import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8bz4x9ms",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});