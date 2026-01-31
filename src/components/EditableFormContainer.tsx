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
  const handleCancel = () => {
    setIsEditing(false);
    onCancel();
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave();
  };

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
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
