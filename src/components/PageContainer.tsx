"use client";

import { Container, Toolbar } from "@mui/material";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {children}
    </Container>
  );
}
