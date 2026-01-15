"use client";

import PageContainer from "@/components/PageContainer";
import { Box, Stepper, Step, Stack, Button, StepButton } from "@mui/material";
import { useState } from "react";
import EnrollmentStudentProfilePanel from "./EnrollmentStudentProfilePanel";
import EnrollmentSectionAssignmentPanel from "./EnrollmentSectionAssignmentPanel";
import EnrollmentReviewAndConfirmPanel from "./EnrollmentReviewAndConfirmPanel";
import { Student } from "@/services/student.client";
import { Enrollment } from "./model";

const steps = ["Student Profile", "Grade Level", "Review & Confirm"];

export default function EnrollmentPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [enrollment, setEnrollment] = useState<Enrollment>({
    student: null,
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
  const handleStudentUpdate = (student: Student | null) => {
    setEnrollment((prev) => ({
      ...prev,
      student,
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
        {activeStep === 0 && (
          <EnrollmentStudentProfilePanel
            student={enrollment.student}
            onUpdate={handleStudentUpdate}
          />
        )}
        {activeStep === 1 && <EnrollmentSectionAssignmentPanel />}
        {activeStep === 2 && (
          <EnrollmentReviewAndConfirmPanel enrollment={enrollment} />
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
