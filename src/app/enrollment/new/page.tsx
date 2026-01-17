"use client";

import PageContainer from "@/components/PageContainer";
import { Box, Stepper, Step, Stack, Button, StepButton } from "@mui/material";
import { useState } from "react";
import EnrollmentStudentProfilePanel from "./EnrollmentStudentProfilePanel";
import EnrollmentSectionAssignmentPanel from "./EnrollmentSectionAssignmentPanel";
import EnrollmentReviewAndConfirmPanel from "./EnrollmentReviewAndConfirmPanel";
import { Student } from "@/services/student.client";
import { AddEnrollmentDto } from "./dto";
import EnrollmentGuardianInfoPanel from "./EnrollmentGuardianInfoPanel";

const steps = [
  "Student Profile",
  "Guardian Information",
  "Grade Level",
  "Review & Confirm",
];

export default function EnrollmentPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [addEnrollmentDto, setAddEnrollmentDto] = useState<AddEnrollmentDto>({
    student: null,
    gradeLevel: null,
    section: null,
    guardian: null,
  });

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  /**
   * Student -related handler
   */
  const handleEnrollmentUpdate = (data: {
    student?: Student | null;
    gradeLevel?: string;
    section?: string;
  }) => {
    setAddEnrollmentDto((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <PageContainer>
      <Stack spacing={2}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepButton {...labelProps}>{label}</StepButton>
              </Step>
            );
          })}
        </Stepper>

        {JSON.stringify(addEnrollmentDto)}

        {activeStep === 0 && (
          <EnrollmentStudentProfilePanel
            student={addEnrollmentDto.student}
            onUpdate={handleEnrollmentUpdate}
          />
        )}

        {activeStep === 1 && (
          <EnrollmentGuardianInfoPanel
            student={addEnrollmentDto.student}
            guardian={addEnrollmentDto.guardian}
          />
        )}

        {activeStep === 2 && (
          <EnrollmentSectionAssignmentPanel
            gradeLevel={addEnrollmentDto.gradeLevel}
            section={addEnrollmentDto.section}
            onUpdate={handleEnrollmentUpdate}
          />
        )}
        {activeStep === 3 && (
          <EnrollmentReviewAndConfirmPanel enrollment={addEnrollmentDto} />
        )}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          {activeStep > 0 && (
            <Button color="inherit" onClick={handlePreviousStep} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNextStep} sx={{ mr: 1 }}>
              Next
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNextStep} sx={{ mr: 1 }}>
              Submit
            </Button>
          )}
        </Box>
      </Stack>
    </PageContainer>
  );
}
