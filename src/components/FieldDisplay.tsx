import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function FieldDisplay({
  isEditing = false,
  label = "Field Label",
  value = "Value",
  children,
}: {
  isEditing?: boolean;
  label?: string;
  value?: unknown;
  children?: (props: { label?: string; value?: unknown }) => ReactNode;
}) {
  return isEditing && children ? (
    children({ label, value })
  ) : (
    <Stack>
      <Typography variant="caption">{label}</Typography>
      <Typography variant="body1" fontWeight="bold">
        {value as string}
      </Typography>
    </Stack>
  );
}
