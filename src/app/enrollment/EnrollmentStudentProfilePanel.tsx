"use client";

import {
  Paper,
  Typography,
  Box,
  TextField,
  TextFieldProps,
  Stack,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FC, useState } from "react";

const StandardTextField: FC<TextFieldProps> = (props) => {
  return <TextField variant="standard" {...props} />;
};

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
          <Stack direction="row" spacing={2}>
            <Box flex={1}>
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
            <Box flex={1}>
              {mode === "existing" && <StandardTextField label="Student ID" />}
            </Box>
          </Stack>
        </Stack>

        {mode == "new" && (
          <Stack spacing={4}>
            <Box>
              <Divider
                textAlign="left"
                sx={{ borderStyle: "dashed", borderColor: "divider" }}
              >
                <Typography variant="subtitle2" color="primary.light">
                  Student Information
                </Typography>
              </Divider>

              <Stack component="form" spacing={2}>
                <Stack direction="row" spacing={2}>
                  <Box flex={1}>
                    <StandardTextField fullWidth label="First Name" />
                  </Box>
                  <Box flex={1}>
                    <StandardTextField label="Middle Name" />
                  </Box>
                  <Box flex={1}>
                    <StandardTextField label="Family Name" />
                  </Box>
                  <Box flex={1}>
                    <StandardTextField label="Suffix" />
                  </Box>
                  <Box flex={2} />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Box flex={1}>
                    <StandardTextField label="Gender" />
                  </Box>
                  <Box flex={1}>
                    <StandardTextField label="Date of Birth" />
                  </Box>
                  <Box flex={1}>
                    <StandardTextField label="Nationality" />
                  </Box>
                  <Box flex={3} />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Box flex={4}>
                    <StandardTextField fullWidth label="Address" />
                  </Box>
                  <Box flex={2} />
                </Stack>
              </Stack>
            </Box>

            <Box>
              <Divider
                textAlign="left"
                sx={{ borderStyle: "dashed", borderColor: "divider" }}
              />

              <Stack component="form" spacing={2}>
                <Box>
                  <Typography variant="subtitle2" color="primary.light">
                    Parent/Guardian Information
                  </Typography>
                </Box>
                <Stack direction="row" spacing={2}>
                  <Box flex={3}>
                    <StandardTextField fullWidth label="Name" />
                  </Box>
                  <Box flex={1}>
                    <StandardTextField label="Relationship" />
                  </Box>
                  <Box flex={2} />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Box flex={1}>
                    <StandardTextField label="Contact Number" />
                  </Box>
                  <Box flex={1}>
                    <StandardTextField fullWidth label="Email Address" />
                  </Box>
                  <Box flex={4}>
                    <StandardTextField fullWidth label="Address" />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        )}
      </Paper>
    </>
  );
}
