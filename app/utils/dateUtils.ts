import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

function getPunterDayJS(
  date: Nullable<Date | string> = new Date(),
  timezone?: "Australia/Sydney",
) {
  return timezone ? dayjs(date).tz(timezone) : dayjs(date);
}

export { getPunterDayJS };
