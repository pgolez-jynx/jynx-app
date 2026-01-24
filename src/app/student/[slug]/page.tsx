"use client";

import PageContainer from "@/components/PageContainer";
import { fetchStudent, Student } from "@/services/student.client";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "react-hook-form";
import FieldDisplay from "@/components/FieldDisplay";

export default function StudentPage() {
  const [student, setStudent] = useState<Student>();
  const [isEditing, setIsEditing] = useState(false);
  const { control, reset } = useForm();

  useEffect(() => {
    const loadStudent = async () => {
      const studentId = "1234";
      const student = await fetchStudent(studentId);
      if (student) {
        setStudent(student);
        reset(student);
      } else {
        console.error(`Student was not found: (id: ${studentId})`);
      }
    };

    loadStudent();
  }, []);

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  /** Student section **/
  const heading = "Student Profile";

  return (
    <PageContainer>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">{`${student?.familyName}, ${student?.givenName} ${student?.middleName ? `${student?.middleName?.charAt(0)}.` : ""} ${student?.suffix}`}</Typography>
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
                  <Stack>
                    <Typography variant="caption">Student ID</Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {student?.id}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid size={3}>
                  <Stack>
                    <Typography variant="caption">Status</Typography>
                    <Typography variant="body1" fontWeight="bold">
                      ACTIVE
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>

              <Grid container size={12} spacing={4}>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    name="familyName"
                    control={control}
                    label="Family Name"
                  >
                    <TextField variant="standard" />
                  </FieldDisplay>
                </Grid>

                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    name="givenName"
                    control={control}
                    label="Given Name"
                  >
                    <TextField variant="standard" />
                  </FieldDisplay>
                </Grid>

                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    name="middleName"
                    control={control}
                    label="Middle Name"
                  >
                    <TextField variant="standard" />
                  </FieldDisplay>
                </Grid>

                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    name="suffix"
                    label="Suffix"
                    control={control}
                  >
                    <TextField variant="standard" />
                  </FieldDisplay>
                </Grid>
              </Grid>

              <Grid container size={12} spacing={4}>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    name="gender"
                    label="Gender <TODO: format>"
                    control={control}
                  >
                    <TextField variant="standard" />
                  </FieldDisplay>
                </Grid>
                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    name="dateOfBirth"
                    label="Date of Birth"
                    control={control}
                  >
                    <TextField variant="standard" />
                  </FieldDisplay>
                </Grid>

                <Grid size={3}>
                  <Stack>
                    <Typography variant="caption">Age</Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {"<TODO>"}
                    </Typography>
                  </Stack>
                </Grid>

                <Grid size={3}>
                  <FieldDisplay
                    isEditing={isEditing}
                    name="nationality"
                    label="Nationality"
                    control={control}
                  >
                    <TextField variant="standard" />
                  </FieldDisplay>
                </Grid>
              </Grid>

              <Grid container size={12} spacing={4}>
                <Grid size={12}>
                  <FieldDisplay
                    isEditing={isEditing}
                    name="address"
                    label="Address"
                    control={control}
                  >
                    <TextField variant="standard" fullWidth />
                  </FieldDisplay>
                </Grid>
              </Grid>

              {isEditing && (
                <Grid container size={12} justifyContent="end">
                  <Button onClick={handleCancel}>Cancel</Button>
                  <Button variant="contained" onClick={handleSave}>
                    Update
                  </Button>
                </Grid>
              )}
            </Grid>
          </Paper>
        </>
      </Stack>
    </PageContainer>
  );
}
