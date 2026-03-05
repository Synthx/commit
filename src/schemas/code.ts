import { z } from "astro/zod";
import { metadataSchema } from "@/schemas/metadata.ts";

export const codeSchema = metadataSchema.extend({
  title: z.string(),
  language: z.string(),
});
