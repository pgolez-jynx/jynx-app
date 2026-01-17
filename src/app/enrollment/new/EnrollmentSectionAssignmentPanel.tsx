"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import gradeLevels from "@/data/grade-levels.json";
import sections from "@/data/sections.json";

export default function EnrollmentSectionAssignmentPanel({
  gradeLevel,
  section,
  onUpdate,
}: {
  gradeLevel: string | null;
  section: string | null;
  onUpdate: (data: { gradeLevel?: string; section?: string }) => void;
}) {
  return (
    <>
      <Typography variant="h6">Section Assignment</Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Stack direction="row" spacing={2}>
            <Box flex={1}>
              <FormControl variant="standard" fullWidth>
                <InputLabel>Grade Level</InputLabel>
                <Select
                  value={gradeLevel}
                  onChange={(e) =>
                    e.target.value &&
                    onUpdate({ gradeLevel: e.target.value ?? null })
                  }
                >
                  {gradeLevels.map((gradeLevel) => (
                    <MenuItem key={gradeLevel} value={gradeLevel}>
                      {gradeLevel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box flex={1}>
              <FormControl variant="standard" fullWidth>
                <InputLabel>Section</InputLabel>
                <Select
                  value={section}
                  onChange={(e) =>
                    e.target.value &&
                    onUpdate({
                      section:
                        e.target.value === "unassigned"
                          ? undefined
                          : e.target.value,
                    })
                  }
                >
                  <MenuItem key={"unassigned"} value={"unassigned"}>
                    <Typography fontStyle="italic">unassigned</Typography>
                  </MenuItem>
                  {sections.map((section) => (
                    <MenuItem key={section} value={section}>
                      {section}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box flex={4} />
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
