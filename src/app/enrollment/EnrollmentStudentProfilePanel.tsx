"use client";

import {
  Paper,
  Typography,
  Box,
  TextField,
  TextFieldProps,
  Stack,
  Divider,
} from "@mui/material";
import { FC } from "react";

const StandardTextField: FC<TextFieldProps> = (props) => {
  return <TextField variant="standard" {...props} />;
};

export default function EnrollmentStudentTable() {
  return (
    <>
      <Typography variant="h6">Student</Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Box>
            <Divider
              textAlign="left"
              sx={{ borderStyle: "dashed", borderColor: "divider" }}
            >
              <Typography variant="subtitle2" color="primary.light">
                Student Details
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
            >
              <Typography variant="subtitle2" color="primary.light">
                Guardian / Parent Details
              </Typography>
            </Divider>

            <Stack component="form" spacing={2}>
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
      </Paper>
    </>
  );
}
