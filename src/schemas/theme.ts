import { z } from "zod";

export const themes = ["dark", "light"] as const;
export const themeSchema = z.enum(themes);
export type Theme = z.infer<typeof themeSchema>;
