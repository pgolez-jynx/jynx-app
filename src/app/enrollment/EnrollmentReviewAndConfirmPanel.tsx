"use client";

import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Enrollment } from "./model";

export default function EnrollmentReviewAndConfirmPanel({
  enrollment,
}: {
  enrollment: Enrollment;
}) {
  const { student } = enrollment;

  const gender = student?.gender === "M" ? "Male" : "Female";

  return (
    <>
      <Typography variant="h6">Review & Confirm</Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Grid container spacing={2} sx={{ py: 2 }}>
          <Grid container size={12}>
            <Typography variant="subtitle1" color="primary.main">
              Student Information
            </Typography>
          </Grid>
          <Grid container size={12}>
            <Grid size={2}>
              <Typography variant="subtitle2">Family Name</Typography>
              <Typography fontWeight="bold">{student?.familyName}</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Middle Name</Typography>
              <Typography fontWeight="bold">{student?.middleName}</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Given Name</Typography>
              <Typography fontWeight="bold">{student?.givenName}</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Suffix</Typography>
              <Typography fontWeight="bold">{student?.suffix}</Typography>
            </Grid>
          </Grid>

          <Grid container size={12}>
            <Grid size={2}>
              <Typography variant="subtitle2">Gender</Typography>
              <Typography fontWeight="bold">{gender}</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Date of Birth</Typography>
              <Typography fontWeight="bold">{student?.dateOfBirth}</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Nationality</Typography>
              <Typography fontWeight="bold">{student?.nationality}</Typography>
            </Grid>
          </Grid>

          <Grid container size={12}>
            <Grid size={12}>
              <Typography variant="subtitle2">Address</Typography>
              <Typography fontWeight="bold">Apas, Lahug, Cebu City</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider
          textAlign="left"
          sx={{ borderStyle: "dashed", borderColor: "divider" }}
        />

        <Grid container spacing={2} sx={{ py: 2 }}>
          <Grid container size={12}>
            <Typography variant="subtitle1" color="primary.main">
              Parent/Guardian Information
            </Typography>
          </Grid>
          <Grid container size={12}>
            <Grid size={4}>
              <Typography variant="subtitle2">Name</Typography>
              <Typography fontWeight="bold">Joshua W. Doe</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Relationship</Typography>
              <Typography fontWeight="bold">Father</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Contact Number</Typography>
              <Typography fontWeight="bold">(+63)970000000</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Email Address</Typography>
              <Typography fontWeight="bold">joshua_doe@example.com</Typography>
            </Grid>
          </Grid>

          <Grid container size={12}>
            <Grid size={12}>
              <Typography variant="subtitle2">Address</Typography>
              <Typography fontWeight="bold">Apas, Lahug, Cebu City</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider
          textAlign="left"
          sx={{ borderStyle: "dashed", borderColor: "divider" }}
        />

        <Grid container spacing={2} sx={{ py: 2 }}>
          <Grid container size={12}>
            <Typography variant="subtitle1" color="primary.main">
              Grade Level
            </Typography>
          </Grid>
          <Grid container size={12}>
            <Grid size={2}>
              <Typography variant="subtitle2">Grade Level</Typography>
              <Typography fontWeight="bold">{enrollment.gradeLevel}</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Section</Typography>
              {enrollment?.section ? (
                <Typography fontWeight="bold">{enrollment.section}</Typography>
              ) : (
                <Typography fontWeight="italic">(unassigned)</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
