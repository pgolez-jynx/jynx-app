import { Stack, Button } from "@mui/material";
import { Dispatch, SetStateAction, ReactNode } from "react";
import EditIcon from "@mui/icons-material/Edit";

type EditableFormContainerProps = {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  onSave?: () => void;
  onCancel?: () => void;
};

export default function EditableFormContainer({
  isEditing,
  setIsEditing,
  children,
  onSave,
  onCancel,
}: EditableFormContainerProps) {
  return (
    <Stack spacing={4}>
      <Stack direction="row" justifyContent="end">
        <EditIcon
          color="primary"
          sx={{
            visibility: isEditing ? "hidden" : "visible",
          }}
          onClick={() => setIsEditing(!isEditing)}
        />
      </Stack>
      {children}
      {isEditing && (
        <Stack direction="row" justifyContent="end" spacing={2}>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSave}>
            Save
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
