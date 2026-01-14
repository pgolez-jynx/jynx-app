"use client";

import { Box, Paper, Stack, TextField, Typography } from "@mui/material";

export default function EnrollmentSectionAssignmentPanel() {
  return (
    <>
      <Typography variant="h6">Section Assignment</Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Stack direction="row" spacing={2}>
            <Box flex={1}>
              <TextField label="Assigned Section" fullWidth />
            </Box>
            <Box flex={2} />
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
