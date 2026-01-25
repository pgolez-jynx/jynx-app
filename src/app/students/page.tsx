"use client";

import PageContainer from "@/components/PageContainer";
import {
  alpha,
  Breadcrumbs,
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
import { blue, pink } from "@mui/material/colors";
import { StudentIcon } from "@/components/Sidebar";
import { fetchStudents } from "@/services/student.client";

const columns: GridColDef[] = [
  {
    field: "studentId",
    headerName: "Student ID",
    minWidth: 120,
    flex: 1,
  },
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
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    sortable: false,
    minWidth: 150,
    flex: 1,
    valueFormatter: formatDate,
  },
];

const breadcrumbs = (
  <Breadcrumbs separator="›" aria-label="breadcrumb">
    <BreadcrumbLink underline="hover" key="1" href="/students">
      <Chip icon={<StudentIcon />} label="Students" color="primary" />
    </BreadcrumbLink>
  </Breadcrumbs>
);

export default function StudentsPage() {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const theme = useTheme();

  useEffect(() => {
    const loadStudents = async () => {
      const students = await fetchStudents();
      setRows(students);
    };

    loadStudents();
  }, []);

  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Students</Typography>
          {/* <Button
            variant="contained"
            startIcon={<AddIcon />}
            component={Link}
            href="/students/new"
          >
            Add student
          </Button> */}
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
            showToolbar
            pageSizeOptions={[25, 50, 100, 250]}
            initialState={{
              pagination: { paginationModel: { pageSize: 50 } },
              sorting: {
                sortModel: [{ field: "familyName", sort: "asc" }],
              },
            }}
          />
        </Paper>
      </Stack>
    </PageContainer>
  );
}
