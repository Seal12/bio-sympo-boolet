/**
 * Venue, connectivity, and emergency information from the booklet.
 * Note: parking details beyond the heading were truncated in the PDF source.
 */
export const venue = {
  title: "Venue information",
  description:
    "The SASBi | SAGS BIO2026 Student Symposium will be held at the Digital Dome on Ocean Science Campus, Summerstrand, Nelson Mandela Bay, Nelson Mandela University.",
  parking:
    "Parking for external guests: details will be confirmed at registration / on site.",
  mapImage: "/assets/hero/venue-map.png",
  wifi: {
    network: "Guest",
    password: "Provided at the venue",
  },
  socials: [
    { label: "LinkedIn", value: "SASBi | SAGS Student Bio-Symposium 2026" },
    { label: "Instagram", value: "@student.biosymposium" },
    { label: "BlueSky", value: "@biosymposium2026.bsky.social" },
  ],
  hashtags: ["#BIO26inNMU", "#Bioinformatics", "#Genetics"],
  emergency: {
    firstAid: "Report directly to the registration desk or call on-site first aid.",
    hospital: "Life St. George's Hospital",
    police: "10111",
    ambulance: "10177 or 112",
  },
} as const;
