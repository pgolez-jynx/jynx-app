import FieldDisplay from "@/components/FieldDisplay";
import { Student } from "@/services/student.client";
import { Typography, Stack, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formatDate } from "@/app/utils/date-utils";
import EditableFormContainer from "@/components/EditableFormContainer";
import SectionContainer from "@/components/SectionContainer";

export default function StudentProfileTab({
  student,
}: {
  student: Student | null;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const { control, reset } = useForm({
    defaultValues: student ?? undefined,
  });

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    if (student) {
      reset(student);
    }
  }, [student, reset]);

  return (
    <SectionContainer header="Student Information">
      <EditableFormContainer
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onSave={handleSave}
        onCancel={handleCancel}
      >
        <Grid container spacing={2}>
          <Grid container size={12} spacing={2}>
            <Grid size={3}>
              <Stack>
                <Typography variant="caption">Student ID</Typography>
                <Typography variant="body1" fontWeight="bold">
                  {student?.studentId}
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

          <Grid container size={12} spacing={2}>
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

          <Grid container size={12} spacing={2}>
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
                valueFormatter={
                  formatDate as (value: string | object) => string
                }
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

          <Grid container size={12}>
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
        </Grid>
      </EditableFormContainer>
    </SectionContainer>
  );
}
