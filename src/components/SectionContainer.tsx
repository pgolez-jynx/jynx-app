import { Typography, Paper } from "@mui/material";
import { ReactNode } from "react";

type SectionContainerProps = {
  header: string;
  children: ReactNode;
};

export default function SectionContainer({
  header,
  children,
}: SectionContainerProps) {
  return (
    <>
      <Typography variant="h6">{header}</Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
        {children}
      </Paper>
    </>
  );
}
