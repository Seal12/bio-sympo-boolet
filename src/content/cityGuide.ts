/**
 * Gqeberha travel city guide from the booklet.
 */
export const cityGuide = {
  title: "Gqeberha Travel City Guide",
  subtitle: "Welcome to the “Friendly City”",
  intro:
    "Port Elizabeth, officially renamed Gqeberha, is located on the breathtaking shores of Algoa Bay in the Eastern Cape Province. Known for its rich cultural history, pristine wind-swept coastlines, and exceptional wildlife access, it offers delegates a perfect blend of academic atmosphere and natural beauty.",
  heroImage: "/assets/city/donkin-lighthouse.png",
  secondaryImage: "/assets/city/beachfront.png",
  highlights: [
    {
      title: "The Beachfront Promenade",
      body: "Take a walk along Hobie Beach, Humewood Beach or King’s Beach right outside the central hub. Ideal for clearing your head between dense scientific tracks.",
    },
    {
      title: "The Boardwalk Precinct",
      body: "Located in Summerstrand, this area features excellent dining, shopping, and entertainment walks surrounding an artificial lake.",
    },
    {
      title: "Addo Elephant National Park",
      body: "Situated just 30–40 minutes outside the city, it is the third largest national park in South Africa and offers world-class viewing of the “Big Seven” in a malaria-free environment.",
    },
    {
      title: "Route 67",
      body: "A fascinating cultural arts heritage trail consisting of 67 public artworks symbolizing the 67 years Nelson Mandela dedicated to the freedom of South Africa.",
    },
  ],
  culinary: [
    {
      title: "Seafood",
      body: "Try the local catch (especially Kingklip or Calamari) at restaurants along the beachfront or near the harbor.",
    },
    {
      title: "Coffee Shops",
      body: "Summerstrand and the nearby Walmer area host superb artisan cafes perfect for morning prep or informal meetings.",
    },
  ],
} as const;
