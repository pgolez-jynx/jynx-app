"use client";

import {
  Paper,
  Typography,
  Box,
  TextField,
  Stack,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import { useState } from "react";

type MODE = "existing" | "new";

export default function EnrollmentStudentProfilePanel() {
  const [mode, setMode] = useState<MODE>("new");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode((event.target as HTMLInputElement).value as MODE);
  };

  return (
    <>
      <Typography variant="h6">Student Profile</Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box>
              <FormControl>
                <FormLabel>Existing/New Student</FormLabel>
                <RadioGroup row value={mode} onChange={handleChange}>
                  <FormControlLabel
                    value="new"
                    control={<Radio size="small" />}
                    label="New Student"
                  />
                  <FormControlLabel
                    value="existing"
                    control={<Radio size="small" />}
                    label="Existing Student"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            {mode === "existing" && (
              <Stack direction="row" alignItems="baseline" spacing={2}>
                <TextField variant="standard" label="Student ID" />
                <Button variant="contained" size="small">
                  Search
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>

        {mode == "new" && (
          <Stack spacing={2}>
            <Divider
              textAlign="left"
              sx={{ borderStyle: "dashed", borderColor: "divider" }}
            >
              <Typography variant="subtitle2" color="primary.main"></Typography>
            </Divider>

            <Stack component="form" spacing={2}>
              <Box>
                <Typography variant="subtitle2" color="primary.main">
                  Student Information
                </Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Box flex={1}>
                  <TextField variant="standard" fullWidth label="First Name" />
                </Box>
                <Box flex={1}>
                  <TextField variant="standard" label="Middle Name" />
                </Box>
                <Box flex={1}>
                  <TextField variant="standard" label="Family Name" />
                </Box>
                <Box flex={1}>
                  <TextField variant="standard" label="Suffix" />
                </Box>
                <Box flex={2} />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box flex={1}>
                  <TextField variant="standard" label="Gender" />
                </Box>
                <Box flex={1}>
                  <TextField variant="standard" label="Date of Birth" />
                </Box>
                <Box flex={1}>
                  <TextField variant="standard" label="Nationality" />
                </Box>
                <Box flex={3} />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box flex={4}>
                  <TextField variant="standard" fullWidth label="Address" />
                </Box>
                <Box flex={2} />
              </Stack>
            </Stack>

            <Divider
              textAlign="left"
              sx={{ borderStyle: "dashed", borderColor: "divider" }}
            />

            <Stack component="form" spacing={2}>
              <Box>
                <Typography variant="subtitle2" color="primary.main">
                  Parent/Guardian Information
                </Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Box flex={3}>
                  <TextField variant="standard" fullWidth label="Name" />
                </Box>
                <Box flex={1}>
                  <TextField variant="standard" label="Relationship" />
                </Box>
                <Box flex={2} />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box flex={1}>
                  <TextField variant="standard" label="Contact Number" />
                </Box>
                <Box flex={1}>
                  <TextField
                    variant="standard"
                    fullWidth
                    label="Email Address"
                  />
                </Box>
                <Box flex={4}>
                  <TextField variant="standard" fullWidth label="Address" />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Paper>
    </>
  );
}
