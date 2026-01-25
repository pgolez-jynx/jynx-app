"use client";

import PageContainer from "@/components/PageContainer";
import { fetchStudent, Student } from "@/services/student.client";
import {
  Breadcrumbs,
  Chip,
  Link as BreadcrumbLink,
  Stack,
  Typography,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import { useEffect, useState } from "react";
import { StudentIcon } from "@/components/Sidebar";
import StudentProfileTab from "./StudentProfileTab";

export default function StudentPage() {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    const loadStudent = async () => {
      const studentId = "1234";
      const student = await fetchStudent(studentId);
      if (student) {
        setStudent(student);
      } else {
        console.error(`Student was not found: (id: ${studentId})`);
      }
    };

    loadStudent();
  }, []);

  const studentName = [
    student?.familyName,
    student?.givenName,
    student?.middleName ? `${student?.middleName?.charAt(0)}.` : "",
    student?.suffix,
  ].join(" ");

  const breadcrumbs = (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <BreadcrumbLink underline="hover" key="1" href="/enrollment">
        <Chip icon={<StudentIcon />} label="Students" color="primary" />
      </BreadcrumbLink>
      <Typography key="2" sx={{ color: "primary.main" }} variant="body2">
        {studentName}
      </Typography>
    </Breadcrumbs>
  );

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">{studentName}</Typography>
        </Stack>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabIndex}
            onChange={(_, newIndex) => setTabIndex(newIndex)}
            aria-label="basic tabs example"
          >
            <Tab label="Overview" />
            <Tab label="Student Profile" />
            <Tab label="Enrollment" />
          </Tabs>
        </Box>

        {tabIndex === 1 && <StudentProfileTab student={student} />}
      </Stack>
    </PageContainer>
  );
}
