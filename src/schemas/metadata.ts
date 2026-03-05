import { z } from "astro/zod";

export const metadataSchema = z.object({
  date: z.coerce.date(),
  featured: z.coerce.boolean().optional(),
});
