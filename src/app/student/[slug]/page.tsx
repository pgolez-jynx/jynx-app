"use client";

import PageContainer from "@/components/PageContainer";
import { fetchStudent, Student } from "@/services/student.client";
import { Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import FieldDisplay from "@/components/FieldDisplay";

export default function StudentPage() {
  const [student, setStudent] = useState<Student>();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadStudent = async () => {
      const studentId = "1234";
      const student = await fetchStudent(studentId);
      if (student) {
        setStudent(student);
      } else {
        console.error(`Student was not found: (id: ${studentId})`);
      }
    };

    loadStudent();
  }, []);

  /** Student section **/
  const heading = "Students";

  return (
    <PageContainer>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Students</Typography>
        </Stack>
        <>
          <Typography variant="h6">{heading}</Typography>

          <Paper elevation={2} sx={{ p: 4 }}>
            <Stack direction="row" justifyContent="end">
              <EditIcon
                color="primary"
                onClick={() => setIsEditing(!isEditing)}
              />
            </Stack>
            <Grid container spacing={2}>
              <Grid container size={12} spacing={4}>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Student ID"
                    value={student?.id}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        variant="standard"
                        value={value}
                      />
                    )}
                  </FieldDisplay>
                </Grid>
                <Grid size={3}>
                  <FieldDisplay label="Status" value="ACTIVE" />
                </Grid>
              </Grid>

              <Grid container size={12} spacing={4}>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Family Name"
                    value={student?.familyName}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        value={value}
                        variant="standard"
                      />
                    )}
                  </FieldDisplay>
                </Grid>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Given Name"
                    value={student?.givenName}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        value={value}
                        variant="standard"
                      />
                    )}
                  </FieldDisplay>
                </Grid>

                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Middle Name"
                    value={student?.middleName}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        value={value}
                        variant="standard"
                      />
                    )}
                  </FieldDisplay>
                </Grid>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Suffix"
                    value={student?.suffix}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        value={value}
                        variant="standard"
                      />
                    )}
                  </FieldDisplay>
                </Grid>
              </Grid>

              <Grid container size={12} spacing={4}>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Gender <TODO: format>"
                    value={student?.gender}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        value={value}
                        variant="standard"
                      />
                    )}
                  </FieldDisplay>
                </Grid>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Date of Birth"
                    value={student?.dateOfBirth}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        value={value}
                        variant="standard"
                      />
                    )}
                  </FieldDisplay>
                </Grid>

                <Grid size={3}>
                  <FieldDisplay isEditing={false} label="Age" value="<TODO>" />
                </Grid>

                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Nationality"
                    value={student?.nationality}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        value={value}
                        variant="standard"
                      />
                    )}
                  </FieldDisplay>
                </Grid>
              </Grid>

              <Grid container size={12} spacing={4}>
                <Grid size={12}>
                  <FieldDisplay
                    isEditing={isEditing}
                    label="Address"
                    value={student?.address}
                  >
                    {({ label, value }) => (
                      <TextField
                        label={label}
                        value={value}
                        variant="standard"
                        fullWidth
                      />
                    )}
                  </FieldDisplay>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </>
      </Stack>
    </PageContainer>
  );
}
