import { Typography, Paper, Stack } from "@mui/material";
import { ReactNode } from "react";

type SectionContainerProps = {
  header: string;
  headerRight?: ReactNode;
  children: ReactNode;
};

export default function SectionContainer({
  header,
  headerRight,
  children,
}: SectionContainerProps) {
  return (
    <>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h6">{header}</Typography>
        {headerRight}
      </Stack>
      <Paper elevation={2} sx={{ p: 4 }}>
        {children}
      </Paper>
    </>
  );
}
