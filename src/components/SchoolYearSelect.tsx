import {
  Select,
  selectClasses,
  MenuItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

interface SchoolYearSelectProps {
  schoolYearOptions: number[];
}

export default function SchoolYearSelect({
  schoolYearOptions,
}: SchoolYearSelectProps) {
  const [schoolYear, setSchoolYear] = useState(2025);

  return (
    <Select
      value={schoolYear}
      displayEmpty
      inputProps={{ "aria-label": "Select company" }}
      fullWidth
      onChange={(e) => setSchoolYear(e.target.value as number)}
      sx={{
        maxHeight: 56,
        width: 215,
        "&.MuiList-root": {
          p: "8px",
        },
        [`& .${selectClasses.select}`]: {
          display: "flex",
          alignItems: "center",
          gap: "2px",
          pl: 1,
        },
      }}
    >
      {schoolYearOptions.map((year) => (
        <MenuItem value={year} key={year}>
          <ListItemAvatar>
            <Avatar
              alt={`${year - 1}-${year}`}
              sx={{
                bgcolor: "primary.main",
              }}
            >
              {year % 100}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`S.Y. ${year}`}
            secondary={`${year - 1}-${year}`}
          />
        </MenuItem>
      ))}
    </Select>
  );
}
