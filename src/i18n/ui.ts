export const languages = {
  en: "en",
  fr: "fr",
} as const;
export type Language = (typeof languages)[keyof typeof languages];

export const defaultLang: Language = "en";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    title: "The Graveyard of Disastrous Commits",
    description:
      "Lines compile, hope rises. Then the review arrives: a missing edge case, a naming debate, a “quick refactor.” The diff grows, the coffee cools, and somewhere between the comments and the commits, the code gets better—slowly, painfully, beautifully.",
  },
  fr: {},
} as const;
