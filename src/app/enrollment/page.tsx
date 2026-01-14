"use client";

import PageContainer from "@/components/PageContainer";
import { Box, Stepper, Step, StepLabel, Stack, Button } from "@mui/material";
import { useState } from "react";
import EnrollmentStudentProfilePanel from "./EnrollmentStudentProfilePanel";

const steps = [
  "Student Profile",
  "School Year Enrollment",
  "Document Submission",
  "Review & Confirm",
];

export default function EnrollmentPage() {
  const [activeStep, _setActiveStep] = useState(0);

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
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === 0 && <EnrollmentStudentProfilePanel />}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          {activeStep > 0 && (
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={() => {}}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
          )}
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={() => {}} sx={{ mr: 1 }}>
            Next
          </Button>
          {/* {activeStep !== steps.length &&
            (completed[activeStep] ? (
              <Typography variant="caption" sx={{ display: "inline-block" }}>
                Step {activeStep + 1} already completed
              </Typography>
            ) : (
              <Button onClick={handleComplete}>
                {completedSteps() === totalSteps() - 1
                  ? "Finish"
                  : "Complete Step"}
              </Button>
            ))} */}
        </Box>
      </Stack>
    </PageContainer>
  );
}
