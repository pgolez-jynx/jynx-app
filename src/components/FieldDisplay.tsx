import { Stack, Typography } from "@mui/material";
import { cloneElement, ReactElement } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type FieldDisplayProps<T extends FieldValues> = {
  isEditing: boolean;
  name: Path<T>;
  control: Control<T>;
  label: string;
  valueFormatter?: (value: string) => string;
  children: ReactElement<unknown>;
};

export default function FieldDisplay<T extends FieldValues>({
  isEditing,
  name,
  control,
  label,
  valueFormatter,
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
              {field.value && valueFormatter
                ? valueFormatter(field.value)
                : (field.value ?? "-")}
            </Typography>
          </Stack>
        )
      }
    />
  );
}
