import { createFileRoute } from "@tanstack/react-router";
import {
  Button,
  Container,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { StaticDatePicker } from "@mui/x-date-pickers";

export const Route = createFileRoute("/")({
  loader: ({ context }) => {
    const { theme, queryClient } = context;
    console.log({ theme }, { queryClient });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Button onClick={() => setOpen(true)}>Show calendars</Button>
      <Dialog open={open} onClose={() => setOpen(false)} />
    </Container>
  );
}

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

function Dialog({ open, onClose }: DialogProps) {
  return (
    <MuiDialog open={open} onClose={onClose} maxWidth="mdsm" fullWidth>
      <DialogTitle>Calendars</DialogTitle>
      <DialogContent dividers>
        <Stack direction="row" spacing={2}>
          <StaticDatePicker
            sx={{ flex: 1 }}
            displayWeekNumber
            displayStaticWrapperAs="desktop"
          />
          <Paper sx={{ flex: 1 }}></Paper>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="error">
          Cancel
        </Button>
        <Button color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}
