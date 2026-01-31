"use client";

import PageContainer from "@/components/PageContainer";
import { SectionIcon } from "@/components/Sidebar";
import { fetchSection, Section } from "@/services/section.client";
import {
  Breadcrumbs,
  Chip,
  Link as BreadcrumbLink,
  Typography,
  Stack,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SectionInformationTab from "./SectionInformationTab";

export default function SectionPage() {
  const { id: sectionId } = useParams<{ id: string }>();
  const [section, setSection] = useState<Section>();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const loadSection = async (id: string) => {
      const section = await fetchSection(id);
      if (section) {
        setSection(section);
      } else {
        console.error(`Section was not found: (id: ${id})`);
      }
    };

    loadSection(sectionId);
  }, [sectionId]);

  const breadcrumbs = (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <BreadcrumbLink underline="hover" key="1" href="/sections">
        <Chip icon={<SectionIcon />} label="Sections" color="primary" />
      </BreadcrumbLink>
      <Typography key="2" sx={{ color: "primary.main" }} variant="body2">
        {section?.name}
      </Typography>
    </Breadcrumbs>
  );

  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">{section?.name}</Typography>
        </Stack>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabIndex}
            onChange={(_, newIndex) => setTabIndex(newIndex)}
          >
            <Tab label="Information" />
            <Tab label="Students" />
          </Tabs>
        </Box>

        {tabIndex === 0 && section && (
          <SectionInformationTab section={section} />
        )}
      </Stack>
    </PageContainer>
  );
}
