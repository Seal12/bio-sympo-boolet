/**
 * Venue, connectivity, and emergency information from the booklet.
 */
import { asset } from "@/lib/asset";

export const venue = {
  title: "Venue information",
  description:
    "The SASBi | SAGS BIO2026 Student Symposium will be held at the Digital Dome on Ocean Science Campus, Summerstrand, Nelson Mandela Bay, Nelson Mandela University.",
  parking:
    "Parking for external guests: details will be confirmed at registration / on site.",
  mapImage: asset("/assets/hero/venue-map.png"),
  wifi: {
    network: "wifi05@mandela.ac.za",
    networkHint: "wifi-zero-five",
    password: "IneAqu#99",
    eduroamSteps: [
      "Launch the GetEduroam app.",
      "In the search bar, search for Nelson Mandela University and click Connect.",
      "Enter your username and password in the format username@mandela.ac.za (e.g. wifi01@mandela.ac.za).",
      "Click Log In.",
      "When prompted, allow the app to add a Wi-Fi hotspot to your device.",
      "Select Join when asked to connect to the eduroam Wi-Fi network (when within range of an eduroam hotspot).",
    ],
    eduroamNote:
      "The steps above are generic and may differ slightly from device to device.",
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
