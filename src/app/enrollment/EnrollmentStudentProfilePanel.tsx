"use client";

import { fetchStudent, Student } from "@/services/student.client";
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
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import nationalities from "@/data/nationalities.json";

type MODE = "existing" | "new";

export default function EnrollmentStudentProfilePanel({
  student,
  onUpdate,
}: {
  student: Student | null;
  onUpdate: (student: Student | null) => void;
}) {
  const [mode, setMode] = useState<MODE>("new");
  const [studentId, setStudentId] = useState<string>("");
  const [studentExists, setStudentExists] = useState<boolean>(false);

  const parseDateOfBirth = student?.dateOfBirth
    ? dayjs(student.dateOfBirth)
    : null;
  console.log({ parseDateOfBirth });

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode((event.target as HTMLInputElement).value as MODE);
  };

  const handleSearchStudent = async () => {
    const student = await fetchStudent(studentId);
    onUpdate(student);
    setStudentExists(!!student);
  };

  const handleStudentInfoChange = <K extends keyof Student>(
    key: K,
    value: Student[K]
  ) => onUpdate({ ...student, [key]: value } as Student);

  return (
    <>
      <Typography variant="h6">Student Profile</Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box>
              <FormControl>
                <FormLabel>Existing/New Student </FormLabel>
                <RadioGroup row value={mode} onChange={handleModeChange}>
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
                <TextField
                  variant="standard"
                  label="Student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleSearchStudent}
                >
                  Search
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>

        {(mode == "new" || studentExists) && (
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
                  <TextField
                    variant="standard"
                    label="Family Name"
                    value={student?.familyName}
                    onChange={(e) =>
                      handleStudentInfoChange("familyName", e.target.value)
                    }
                  />
                </Box>
                <Box flex={1}>
                  <TextField
                    variant="standard"
                    label="Middle Name"
                    value={student?.middleName}
                    onChange={(e) =>
                      handleStudentInfoChange(
                        "middleName",
                        e.target.value || undefined
                      )
                    }
                  />
                </Box>
                <Box flex={1}>
                  <TextField
                    variant="standard"
                    fullWidth
                    label="Given Name"
                    value={student?.givenName}
                    onChange={(e) =>
                      handleStudentInfoChange("givenName", e.target.value)
                    }
                  />
                </Box>
                <Box flex={1}>
                  <TextField
                    variant="standard"
                    label="Suffix"
                    value={student?.suffix}
                    onChange={(e) =>
                      handleStudentInfoChange(
                        "suffix",
                        e.target.value || undefined
                      )
                    }
                  />
                </Box>
                <Box flex={2} />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box flex={1}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      value={student?.gender}
                      onChange={(e) =>
                        handleStudentInfoChange("gender", e.target.value)
                      }
                    >
                      <MenuItem value={"F"}>Female</MenuItem>
                      <MenuItem value={"M"}>Male</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box flex={1}>
                  <DatePicker
                    label="Date of Birth"
                    value={parseDateOfBirth}
                    slotProps={{
                      textField: {
                        variant: "standard",
                      },
                    }}
                  />
                </Box>
                <Box flex={1}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel>Nationality</InputLabel>
                    <Select
                      value={student?.nationality}
                      onChange={(e) =>
                        handleStudentInfoChange("nationality", e.target.value)
                      }
                    >
                      {nationalities.map((nationality) => (
                        <MenuItem key={nationality} value={nationality}>
                          {nationality}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box flex={3} />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Box flex={4}>
                  <TextField
                    variant="standard"
                    fullWidth
                    label="Address"
                    value={student?.address}
                    onChange={(e) =>
                      handleStudentInfoChange("address", e.target.value)
                    }
                  />
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
