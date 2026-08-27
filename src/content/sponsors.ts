/**
 * Sponsor logos extracted from the programme booklet.
 * Page-2 logos (transparent) preferred; page-25 duplicates kept as fallbacks.
 */
import { asset } from "@/lib/asset";

export type Sponsor = {
  name: string;
  logo: string;
  darkBackground?: boolean;
};

export const sponsors: Sponsor[] = [
  {
    name: "DIPLOMICS",
    logo: asset("/assets/sponsors/diplomics.png"),
  },
  {
    name: "1KSA — Decoding South Africa's Biodiversity",
    logo: asset("/assets/sponsors/1ksa.png"),
  },
  {
    name: "African Bioinformatics Institute (ABI)",
    logo: asset("/assets/sponsors/abi.png"),
  },
];
