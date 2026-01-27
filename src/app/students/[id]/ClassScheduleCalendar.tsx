import { Box } from "@mui/material";
import { GridColDef, DataGrid } from "@mui/x-data-grid";

const slotTimesLookup = {
  0: "09:00 - 10:00",
  1: "10:00 - 11:00",
  2: "11:00 - 12:00",
  3: "12:00 - 13:00",
  4: "13:00 - 14:00",
  5: "14:00 - 15:00",
  6: "15:00 - 16:00",
  7: "16:00 - 17:00",
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

type Subject =
  | "Biology"
  | "Chemistry"
  | "Intermediate Algebra"
  | "Geometry"
  | "English 2"
  | "Physical Education"
  | "History"
  | "Music & Arts"
  | "Filipino 2";

type Row = { id: number; time: string; slots: Array<Subject | ""> };

const rows: Array<Row> = [
  {
    id: 0,
    time: slotTimesLookup[0],
    slots: ["Filipino 2", "Geometry", "Filipino 2", "Geometry", "Filipino 2"],
  },
  {
    id: 1,
    time: slotTimesLookup[1],
    slots: ["History", "Biology", "History", "Biology", "History"],
  },
  {
    id: 2,
    time: slotTimesLookup[2],
    slots: [
      "Intermediate Algebra",
      "Biology",
      "Intermediate Algebra",
      "Biology",
      "Intermediate Algebra",
    ],
  },
  {
    id: 3,
    time: slotTimesLookup[3],
    slots: ["", "", "", "", ""],
  },
  {
    id: 4,
    time: slotTimesLookup[4],
    slots: [
      "English 2",
      "Physical Education",
      "English 2",
      "Physical Education",
      "English 2",
    ],
  },
  {
    id: 5,
    time: slotTimesLookup[5],
    slots: [
      "Chemistry",
      "Music & Arts",
      "Chemistry",
      "Music & Arts",
      "Chemistry",
    ],
  },
  {
    id: 6,
    time: slotTimesLookup[6],
    slots: ["Chemistry", "", "Chemistry", "", "Chemistry"],
  },
  {
    id: 7,
    time: slotTimesLookup[7],
    slots: ["", "", "", "", ""],
  },
];

const slotColumnCommonFields: Partial<GridColDef> = {
  flex: 2,
  sortable: false,
  filterable: false,
  pinnable: false,
  hideable: false,
  cellClassName: (params) => params.value,
};

const columns: GridColDef<Row>[] = [
  {
    field: "time",
    headerName: "Time",
    width: 120,
  },
  {
    field: "0",
    headerName: days[0],
    valueGetter: (value, row) => row?.slots[0],
    ...slotColumnCommonFields,
  },
  {
    field: "1",
    headerName: days[1],
    valueGetter: (value, row) => row?.slots[1],
    ...slotColumnCommonFields,
  },
  {
    field: "2",
    headerName: days[2],
    valueGetter: (value, row) => row?.slots[2],
    ...slotColumnCommonFields,
  },
  {
    field: "3",
    headerName: days[3],
    valueGetter: (value, row) => row?.slots[3],
    ...slotColumnCommonFields,
  },
  {
    field: "4",
    headerName: days[4],
    valueGetter: (value, row) => row?.slots[4],
    ...slotColumnCommonFields,
  },
];

const rootStyles = {
  display: "flex",
  width: "100%",
  "& .Intermediate": {
    backgroundColor: "rgba(157, 255, 118, 0.49)",
  },
  "& .English": {
    backgroundColor: "rgba(255, 255, 10, 0.49)",
  },
  "& .Biology": {
    backgroundColor: "rgba(150, 150, 150, 0.49)",
  },
  "& .Chemistry": {
    backgroundColor: "rgba(255, 150, 150, 0.49)",
  },
  "& .History": {
    backgroundColor: "rgba(10, 150, 255, 0.49)",
  },
  "& .Music": {
    backgroundColor: "rgba(224, 183, 60, 0.55)",
  },
  "& .Geometry": {
    backgroundColor: "rgba(200, 150, 255, 0.49)",
  },
};

export default function ClassScheduleCalendar() {
  return (
    <Box sx={rootStyles}>
      <DataGrid
        columns={columns}
        rows={rows}
        rowSpanning
        disableRowSelectionOnClick
        hideFooter
        showCellVerticalBorder
        showColumnVerticalBorder
        sx={{
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "transparent",
          },
        }}
      />
    </Box>
  );
}
