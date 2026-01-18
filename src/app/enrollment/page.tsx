"use client";

import PageContainer from "@/components/PageContainer";
import { fetchEnrollments } from "@/services/enrollment.client";
import { alpha, Box, Paper, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/date-utils";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

export default function EnrollmentPage() {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const theme = useTheme();

  useEffect(() => {
    async function loadEnrollments() {
      const enrollments = await fetchEnrollments();
      const rowData = enrollments.map((enrollment) => ({
        id: enrollment.id,
        name: `${enrollment.student.givenName} ${enrollment.student.familyName}`,
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

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Student",
      minWidth: 250,
      flex: 3,
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
            <FemaleIcon color="secondary" />
          ) : (
            <MaleIcon color="primary" />
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

  return (
    <PageContainer>
      <Paper
        elevation={2}
        sx={{
          p: 4,
          height: "800px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        Enrollment Page
        <Box sx={{ flex: 1, mt: 2, display: "flex", minHeight: 0 }}>
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
        </Box>
      </Paper>
    </PageContainer>
  );
}
