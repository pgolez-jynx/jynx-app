"use client";

import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function EnrollmentReviewAndConfirmPanel() {
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
              <Typography variant="subtitle2">First Name</Typography>
              <Typography fontWeight="bold">John</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Middle Name</Typography>
              <Typography fontWeight="bold">Tavera</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Last Name</Typography>
              <Typography fontWeight="bold">Doe</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Suffix</Typography>
              <Typography fontWeight="bold">Jr</Typography>
            </Grid>
          </Grid>

          <Grid container size={12}>
            <Grid size={2}>
              <Typography variant="subtitle2">Gender</Typography>
              <Typography fontWeight="bold">Male</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Date of Birth</Typography>
              <Typography fontWeight="bold">April 04, 2004</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Nationality</Typography>
              <Typography fontWeight="bold">Filipino</Typography>
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
              Enrollment Information
            </Typography>
          </Grid>
          <Grid container size={12}>
            <Grid size={2}>
              <Typography variant="subtitle2">Grade Level</Typography>
              <Typography fontWeight="bold">13</Typography>
            </Grid>
            <Grid size={2}>
              <Typography variant="subtitle2">Section</Typography>
              <Typography fontWeight="italic">-</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
