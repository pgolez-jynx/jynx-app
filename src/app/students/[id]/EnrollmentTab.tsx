import FieldDisplay from "@/components/FieldDisplay";
import { Typography, Stack, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionContainer from "@/components/SectionContainer";
import EditableFormContainer from "@/components/EditableFormContainer";

export default function EnrollmentTab() {
  const [isEditing, setIsEditing] = useState(false);
  const { control } = useForm({
    defaultValues: {
      gradeLevel: "Grade 8",
      section: "Archimedes",
    },
  });

  return (
    <SectionContainer header="Grade Level & Section">
      <EditableFormContainer isEditing={isEditing} setIsEditing={setIsEditing}>
        <Grid container spacing={4}>
          <Grid size={4}>
            <FieldDisplay
              isEditing={isEditing}
              name="gradeLevel"
              label="Grade Level"
              control={control}
            >
              <TextField variant="standard" />
            </FieldDisplay>
          </Grid>
          <Grid size={4}>
            <FieldDisplay
              isEditing={isEditing}
              name="section"
              label="Section"
              control={control}
            >
              <TextField variant="standard" />
            </FieldDisplay>
          </Grid>
          <Grid size={4}>
            <Stack>
              <Typography variant="caption">Adviser</Typography>
              <Typography variant="body1" fontWeight="bold">
                {"<TODO>"}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </EditableFormContainer>
    </SectionContainer>
  );
}
