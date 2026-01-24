import { Stack, Typography } from "@mui/material";
import { cloneElement, ReactElement } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type FieldDisplayProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  isEditing: boolean;
  children: ReactElement<unknown>;
};

export default function FieldDisplay<T extends FieldValues>({
  name,
  control,
  label,
  isEditing,
  children,
}: FieldDisplayProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        isEditing ? (
          cloneElement(children as ReactElement<Record<string, unknown>>, {
            ...field,
            label,
          })
        ) : (
          <Stack>
            <Typography variant="caption">{label}</Typography>
            <Typography variant="body1" fontWeight="bold">
              {field.value ?? "-"}
            </Typography>
          </Stack>
        )
      }
    />
  );
}
