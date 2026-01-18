"use client";

import { Container, Stack } from "@mui/material";

export default function PageContainer({
  children,
  breadcrumbs,
}: {
  children: React.ReactNode;
  breadcrumbs?: React.ReactNode;
}) {
  return (
    <Container sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {breadcrumbs && (
        <Stack spacing={2} sx={{ pb: 2 }}>
          {breadcrumbs}
        </Stack>
      )}
      {children}
    </Container>
  );
}
