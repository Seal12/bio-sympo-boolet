/**
 * Global site metadata for SASBi | SAGS BIO2026 Student Symposium.
 * Sourced from the programme booklet cover and connectivity pages.
 */
export const site = {
  shortName: "BIO2026",
  name: "SASBi | SAGS BIO2026 Student Symposium",
  tagline: "Building An Inclusive Bioinformatics Ecosystem",
  theme: "African Genomes in the Global Village: Landscapes to celebrate diversity",
  dateLabel: "31 August 2026",
  dateISO: "2026-08-31",
  venueShort: "Nelson Mandela University, Gqeberha",
  venueFull:
    "Digital Dome on Ocean Science Campus, Summerstrand, Nelson Mandela Bay, Nelson Mandela University",
  organisers: ["SASBi Student Council", "SAGS Student Society"],
  hashtags: ["#BIO26inNMU", "#Bioinformatics", "#Genetics"],
  socials: {
    linkedin: "SASBi | SAGS Student Bio-Symposium 2026",
    instagram: "@student.biosymposium",
    bluesky: "@biosymposium2026.bsky.social",
  },
  pdfPath: "/BIO26-SYMPO-BOOKLET.pdf",
} as const;

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/welcome/", label: "Welcome" },
  { href: "/venue/", label: "Venue" },
  { href: "/programme/", label: "Programme" },
  { href: "/speakers/", label: "Speakers" },
  { href: "/abstracts/", label: "Abstracts" },
  { href: "/sponsors/", label: "Sponsors" },
  { href: "/committee/", label: "Committee" },
  { href: "/city-guide/", label: "City Guide" },
];
