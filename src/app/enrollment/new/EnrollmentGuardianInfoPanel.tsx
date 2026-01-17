"use client";

import { Guardian, Student } from "@/services/student.client";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Stack,
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import relationships from "@/data/guardian-relationships.json";

export default function EnrollmentGuardianInfoPanel({
  student,
  guardian,
}: {
  student: Student | null;
  guardian?: Guardian | null;
}) {
  const address = guardian?.addressSameAsStudent
    ? student?.address
    : guardian?.address;

  return (
    <>
      <Typography variant="h6">Parent/Guardian Information</Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stack component="form" spacing={2}>
          <Box>
            <Typography variant="subtitle2" color="primary.main">
              Parent/Guardian Information
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Box flex={2}>
              <TextField
                variant="standard"
                fullWidth
                label="Name"
                value={guardian?.name}
              />
            </Box>
            <Box flex={1}>
              <Autocomplete
                freeSolo
                options={relationships}
                value={guardian?.relationship}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Relationship"
                    variant="standard"
                  />
                )}
              />
            </Box>
            <Box flex={1}>
              <TextField
                variant="standard"
                label="Contact Number"
                value={guardian?.contactNumber}
              />
            </Box>
            <Box flex={1}>
              <TextField
                variant="standard"
                fullWidth
                label="Email Address"
                value={guardian?.emailAddress}
              />
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box flex={6} alignItems="center">
              <TextField
                variant="standard"
                label="Address"
                fullWidth
                value={address}
              />
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={guardian?.addressSameAsStudent} />
                  }
                  label="Same as student's address"
                  sx={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                />
              </FormGroup>
            </Box>
            <Box flex={3} />
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
