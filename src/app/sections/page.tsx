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
  Button,
  Link,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { StudentIcon } from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { fetchSections, Section } from "@/services/section.client";

const columns: GridColDef[] = [
  {
    field: "gradeLevel",
    headerName: "Grade Level",
    minWidth: 80,
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Section",
    minWidth: 150,
    flex: 2,
  },
  {
    field: "adviser",
    headerName: "Adviser",
    minWidth: 200,
    flex: 3,
    valueFormatter: ({ familyName, givenName }) => {
      return `${familyName}, ${givenName}`;
    },
  },
  {
    field: "studentCount",
    headerName: "Students",
    sortable: false,
    minWidth: 100,
    maxWidth: 100,
    align: "center",
  },
];

const breadcrumbs = (
  <Breadcrumbs separator="›" aria-label="breadcrumb">
    <BreadcrumbLink underline="hover" key="1" href="/sections">
      <Chip icon={<StudentIcon />} label="Sections" color="primary" />
    </BreadcrumbLink>
  </Breadcrumbs>
);

export default function SectionsPage() {
  const theme = useTheme();
  const router = useRouter();
  const [rows, setRows] = useState<GridRowsProp>([]);

  const handleRowClick = ({ id }: GridRowParams<Section>) => {
    router.push(`/sections/${id}`);
  };

  useEffect(() => {
    const loadStudents = async () => {
      const sections = await fetchSections();
      setRows(sections);
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
          <Typography variant="h5">Sections</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            component={Link}
            href="/sections/new"
            disabled
          >
            Add section
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
            showToolbar
            pageSizeOptions={[25, 50, 100, 250]}
            initialState={{
              pagination: { paginationModel: { pageSize: 50 } },
              sorting: {
                sortModel: [
                  { field: "gradeLevel", sort: "asc" },
                  { field: "name", sort: "asc" },
                ],
              },
            }}
            onRowClick={handleRowClick}
          />
        </Paper>
      </Stack>
    </PageContainer>
  );
}
