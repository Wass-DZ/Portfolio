import { en } from "./en";
import { fr } from "./fr";

const dictionaries = {
  en,
  fr,
} as const;

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries.en;
};

export type Dictionary = typeof en;
