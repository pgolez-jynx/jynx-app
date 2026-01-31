import ClassScheduleCalendar from "@/app/students/[id]/ClassScheduleCalendar";
import EditableFormContainer from "@/components/EditableFormContainer";
import FieldDisplay from "@/components/FieldDisplay";
import SectionContainer from "@/components/SectionContainer";
import { Section } from "@/services/section.client";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SectionInformationTabProps = {
  section: Section;
};

export default function SectionInformationTab({
  section,
}: SectionInformationTabProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { control } = useForm({
    defaultValues: section,
  });

  // const adviserName = `${section.adviser.familyName}, ${section.adviser.givenName}`;
  const familyNameFormatter: (value: string | object) => string = (({
    familyName,
    givenName,
  }: {
    familyName: string;
    givenName: string;
  }) => {
    return `${familyName}, ${givenName}`;
  }) as (value: string | object) => string;

  return (
    <>
      <SectionContainer header="Section Information">
        <EditableFormContainer
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        >
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
                name="name"
                label="Section"
                control={control}
              >
                <TextField variant="standard" />
              </FieldDisplay>
            </Grid>
            <Grid size={4}>
              <FieldDisplay
                isEditing={isEditing}
                name="adviser"
                label="Section"
                control={control}
                valueFormatter={familyNameFormatter}
              >
                <TextField variant="standard" />
              </FieldDisplay>
            </Grid>
          </Grid>
        </EditableFormContainer>
      </SectionContainer>

      <SectionContainer header="Class Schedule">
        <ClassScheduleCalendar />
      </SectionContainer>
    </>
  );
}
