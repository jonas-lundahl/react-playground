import { queryOptions, useQuery } from "@tanstack/react-query";
import { sleep } from "../../helpers/sleep.ts";
import { Autocomplete, TextField } from "@mui/material";

const calendarNames: string[] = [
  "Work Schedule",
  "Personal Planner",
  "Family Events",
  "Holidays & Vacations",
  "Fitness Tracker",
  "Meal Planning",
  "Project Deadlines",
  "Birthday Reminders",
  "Study Timetable",
  "Appointments & Meetings",
];

const calendarQuery = queryOptions({
  queryKey: ["calendars"],
  queryFn: async () => {
    await sleep(2000);
    return calendarNames;
  },
});

export function CalendarSelector() {
  const query = useQuery(calendarQuery);
  return (
    <Autocomplete
      renderInput={(params) => (
        <TextField
          {...params}
          label="Calendar"
          size="small"
          margin="dense"
          sx={{ width: 300 }}
        />
      )}
      loading={query.isLoading}
      options={query.data ?? []}
    />
  );
}
