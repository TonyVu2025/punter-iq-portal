export enum RegionCodeToRegionReadable {
  "NSW" = "New South Wales",
  "VIC" = "Victoria",
  "QLD" = "Queensland",
  "SA" = "South Australia",
  "TAS" = "Tasmania",
  "WA" = "Western Australia",
  "ACT" = "Australian Capital Territory",
  "NT" = "Northern Territory",
  "NZL" = "New Zealand",
}

export function getRegionAndCountry(region: string) {
  return {
    region: RegionCodeToRegionReadable[region] || "Unknown Region",
    country:
      region === "NZL"
        ? "New Zealand"
        : RegionCodeToRegionReadable[region]
          ? RegionCodeToRegionReadable[region]
          : "Unknown Country",
  };
}
