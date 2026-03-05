import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { codeSchema } from "@/schemas/code.ts";

const codeCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./contents/code" }),
  schema: codeSchema,
});

export const collections = {
  code: codeCollection,
};
