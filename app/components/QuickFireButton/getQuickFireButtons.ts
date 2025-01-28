/**
 * Should be mapped correctly with the database enum type
 */
export const QUICK_FIRE_VALUES = [
  "Blocked_for_a_run",
  "Wide_no_cover",
  "Eye_catching_late",
  "Checked_at_crucial",
  "Track_pattern_bias",
  "Missed_start",
  "Needs_shorter",
  "Needs_further",
  "Bad_barrier",
  "Dominant_winner",
  "Needs_wet_ground",
  "Not_suited_to_wet",
  "Come_from_back",
] as const;

export const getQuickFireOptions = (
  optionsArr: (typeof QUICK_FIRE_VALUES)[number][] = [...QUICK_FIRE_VALUES],
) => {
  return optionsArr.map((key) => key.split("_").join(" "));
};
