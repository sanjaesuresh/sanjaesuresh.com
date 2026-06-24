import { WORLD_W, WORLD_H, WORLD_VIEWBOX } from "./worldPaths";

export interface Trip {
  id: string;
  /** Primary place label shown in the tooltip head (city, region, or country). */
  city: string;
  /** Country — only rendered when it differs from `city`. */
  country: string;
  /** Decimal degrees. East/North positive (e.g. Toronto: lon -79.38, lat 43.65). */
  lon: number;
  lat: number;
  /** Year, range, or status — e.g. "2024", "2024 & 2025", "live here now". */
  when: string;
  /** Optional one-line note shown under the place. */
  note?: string;
  /** Marks the home base — pulsing ring instead of a plain dot. */
  home?: boolean;
}

export const trips: Trip[] = [
  // 2012
  { id: "sri-lanka", city: "Sri Lanka", country: "Sri Lanka", lon: 80.77, lat: 7.87, when: "2012" },
  { id: "india", city: "India", country: "India", lon: 78.96, lat: 22.0, when: "2012" },

  // 2014
  { id: "bahamas", city: "Bahamas", country: "Bahamas", lon: -77.34, lat: 25.06, when: "2014" },
  { id: "miami", city: "Miami", country: "United States", lon: -80.19, lat: 25.76, when: "2014" },
  { id: "montreal", city: "Montréal", country: "Canada", lon: -73.57, lat: 45.5, when: "2014" },

  // 2016
  { id: "cuba", city: "Cuba", country: "Cuba", lon: -79.0, lat: 21.7, when: "2016" },

  // 2021
  { id: "alberta", city: "Alberta", country: "Canada", lon: -114.07, lat: 51.05, when: "2021" },

  // 2024
  { id: "cancun", city: "Cancún", country: "Mexico", lon: -86.85, lat: 21.16, when: "2024 & 2025" },
  { id: "lisbon", city: "Lisbon", country: "Portugal", lon: -9.14, lat: 38.72, when: "2024" },

  // 2025
  { id: "tokyo", city: "Tokyo", country: "Japan", lon: 139.69, lat: 35.69, when: "2025" },
  { id: "osaka", city: "Osaka", country: "Japan", lon: 135.5, lat: 34.69, when: "2025" },
  { id: "kyoto", city: "Kyoto", country: "Japan", lon: 135.77, lat: 35.01, when: "2025" },
  { id: "vancouver", city: "Vancouver", country: "Canada", lon: -123.12, lat: 49.28, when: "2025", note: "Lived here." },

  // 2026
  { id: "hanoi", city: "Hanoi", country: "Vietnam", lon: 105.83, lat: 21.03, when: "2026" },
  { id: "da-nang", city: "Da Nang", country: "Vietnam", lon: 108.22, lat: 16.05, when: "2026" },
  { id: "ho-chi-minh", city: "Ho Chi Minh City", country: "Vietnam", lon: 106.66, lat: 10.82, when: "2026" },
  { id: "maui", city: "Maui", country: "United States", lon: -156.33, lat: 20.8, when: "2026", note: "Hawaii." },
  { id: "san-francisco", city: "San Francisco", country: "United States", lon: -122.42, lat: 37.77, when: "2026", note: "Lived here." },
  { id: "san-diego", city: "San Diego", country: "United States", lon: -117.16, lat: 32.72, when: "2026" },

  // Home roots
  { id: "toronto", city: "Toronto", country: "Canada", lon: -79.38, lat: 43.65, when: "grew up here" },
  { id: "new-york", city: "New York", country: "United States", lon: -74.01, lat: 40.71, when: "live here now", note: "Home base.", home: true },
];

// Equirectangular projection, identical to the one used to generate the country
// outlines (scripts/build-map.mjs) so pins land exactly on the drawn borders.
const [vbX, vbY, vbW, vbH] = WORLD_VIEWBOX.split(" ").map(Number);

/** lon/lat -> percentage offsets within the rendered (cropped) map box. */
export function toPercent(lon: number, lat: number): { left: number; top: number } {
  const x = ((lon + 180) / 360) * WORLD_W;
  const y = ((90 - lat) / 180) * WORLD_H;
  return {
    left: ((x - vbX) / vbW) * 100,
    top: ((y - vbY) / vbH) * 100,
  };
}

/** Distinct countries visited — for the section meta line. */
export const countryCount = new Set(trips.map((t) => t.country)).size;
