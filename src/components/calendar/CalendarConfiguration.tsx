import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useId, useState } from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";

type ScheduleType = "open" | "closed" | "partial";

interface Props {
  title: string;
}

function isScheduleType(value: string): value is ScheduleType {
  return value === "open" || value === "closed" || value === "partial";
}

export function CalendarConfiguration({ title }: Props) {
  const id = useId();
  const [schedule, setSchedule] = useState<ScheduleType>("open");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  return (
    <Stack sx={{ px: 2, py: 1 }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Divider />
      <FormControl margin="normal">
        <FormLabel id={id}>Schedule</FormLabel>
        <RadioGroup
          aria-labelledby={id}
          value={schedule}
          onChange={(_, value) => isScheduleType(value) && setSchedule(value)}
        >
          <FormControlLabel
            value="open"
            control={<Radio size="small" />}
            label="Open All Day"
          />
          <FormControlLabel
            value="closed"
            control={<Radio size="small" />}
            label="Closed All Day"
          />
          <FormControlLabel
            value="partial"
            control={<Radio size="small" />}
            label="Opening Hours"
          />
          <Stack
            direction="row"
            spacing={1}
            sx={{ py: 1, alignItems: "center" }}
          >
            <TimePicker
              disabled={schedule !== "partial"}
              slotProps={{
                textField: { size: "small" },
              }}
              label="From"
              value={fromDate}
              onChange={(v) => setFromDate(v)}
            />
            <span>-</span>
            <TimePicker
              disabled={schedule !== "partial"}
              slotProps={{
                textField: { size: "small" },
              }}
              label="To"
              value={toDate}
              onChange={(v) => setToDate(v)}
            />
          </Stack>
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
