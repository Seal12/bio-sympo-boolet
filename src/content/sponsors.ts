/**
 * Sponsor logos extracted from the programme booklet.
 * Page-2 logos (transparent) preferred; page-25 duplicates kept as fallbacks.
 */
export type Sponsor = {
  name: string;
  logo: string;
  darkBackground?: boolean;
};

export const sponsors: Sponsor[] = [
  {
    name: "DIPLOMICS",
    logo: "/assets/sponsors/diplomics.png",
  },
  {
    name: "1KSA — Decoding South Africa's Biodiversity",
    logo: "/assets/sponsors/1ksa.png",
  },
  {
    name: "African Bioinformatics Institute (ABI)",
    logo: "/assets/sponsors/abi.png",
  },
];
