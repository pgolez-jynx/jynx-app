"use client";

import PageContainer from "@/components/PageContainer";
import { fetchEnrollments } from "@/services/enrollment.client";
import {
  alpha,
  Breadcrumbs,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  Link as BreadcrumbLink,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/date-utils";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import AddIcon from "@mui/icons-material/Add";
import { blue, pink } from "@mui/material/colors";
import Link from "next/link";
import { EnrollmentIcon } from "@/components/Sidebar";

const columns: GridColDef[] = [
  {
    field: "familyName",
    headerName: "Family Name",
    minWidth: 150,
    flex: 2,
  },
  {
    field: "givenName",
    headerName: "Given Name",
    minWidth: 200,
    flex: 2,
  },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    sortable: false,
    minWidth: 150,
    flex: 1,
    valueFormatter: formatDate,
  },
  {
    field: "gender",
    headerName: "Gender",
    sortable: false,
    minWidth: 80,
    flex: 1,
    align: "center",
    renderCell: ({ value: gender }) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {gender === "F" ? (
          <FemaleIcon sx={{ color: pink[500] }} />
        ) : (
          <MaleIcon sx={{ color: blue[500] }} />
        )}
      </div>
    ),
  },
  { field: "gradeLevel", headerName: "Grade Level", minWidth: 150, flex: 1 },
  { field: "section", headerName: "Section", minWidth: 150, flex: 1 },
  {
    field: "enrollmentDate",
    headerName: "Enrollment Date",
    minWidth: 200,
    flex: 1,
    valueFormatter: formatDate,
  },
];

const breadcrumbs = (
  <Breadcrumbs separator="›" aria-label="breadcrumb">
    <BreadcrumbLink underline="hover" key="1" href="/enrollment">
      <Chip icon={<EnrollmentIcon />} label="Enrollment" color="primary" />
    </BreadcrumbLink>
  </Breadcrumbs>
);

export default function EnrollmentPage() {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const theme = useTheme();

  useEffect(() => {
    async function loadEnrollments() {
      const enrollments = await fetchEnrollments();
      const rowData = enrollments.map((enrollment) => ({
        id: enrollment.id,
        familyName: enrollment.student.familyName,
        givenName: enrollment.student.givenName,
        gender: enrollment.student.gender,
        dateOfBirth: enrollment.student.dateOfBirth,
        gradeLevel: enrollment.gradeLevel,
        section: enrollment.section,
        enrollmentDate: enrollment.enrollmentDate,
      }));

      setRows(rowData);
    }
    loadEnrollments();
  }, []);

  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Enrollees</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            component={Link}
            href="/enrollment/new"
          >
            Enroll student
          </Button>
        </Stack>
        <Paper
          elevation={2}
          sx={{
            height: "800px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            sx={{
              flex: 1,
              "& .MuiDataGrid-row:nth-of-type(odd)": {
                backgroundColor: alpha(theme.palette.primary.main, 0.03),
              },
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.03),
              },
            }}
            autoHeight={false}
            density="standard"
            pageSizeOptions={[25, 50, 100, 250]}
            initialState={{
              pagination: { paginationModel: { pageSize: 50 } },
              sorting: {
                sortModel: [{ field: "enrollmentDate", sort: "desc" }],
              },
            }}
          />
        </Paper>
      </Stack>
    </PageContainer>
  );
}
