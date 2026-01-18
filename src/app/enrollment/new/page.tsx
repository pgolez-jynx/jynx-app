"use client";

import PageContainer from "@/components/PageContainer";
import {
  Box,
  Stepper,
  Step,
  Stack,
  Button,
  StepButton,
  Breadcrumbs,
  Link as BreadcrumbLink,
  Chip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EnrollmentStudentProfilePanel from "./EnrollmentStudentProfilePanel";
import EnrollmentSectionAssignmentPanel from "./EnrollmentSectionAssignmentPanel";
import EnrollmentReviewAndConfirmPanel from "./EnrollmentReviewAndConfirmPanel";
import { Student } from "@/services/student.client";
import { AddEnrollmentDto } from "./dto";
import EnrollmentGuardianInfoPanel from "./EnrollmentGuardianInfoPanel";
import { EnrollmentIcon } from "@/components/Sidebar";

const steps = [
  "Student Profile",
  "Guardian Information",
  "Grade Level",
  "Review & Confirm",
];

const breadcrumbs = (
  <Breadcrumbs separator="›" aria-label="breadcrumb">
    <BreadcrumbLink
      underline="hover"
      key="1"
      color="inherit"
      href="/enrollment"
    >
      <Chip icon={<EnrollmentIcon />} label="Enrollment" />
    </BreadcrumbLink>
    <Typography key="2" sx={{ color: "primary.main" }} variant="body2">
      Add New
    </Typography>
  </Breadcrumbs>
);

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
    <PageContainer breadcrumbs={breadcrumbs}>
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
