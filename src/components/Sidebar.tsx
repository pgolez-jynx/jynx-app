"use client";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  SvgIconProps,
  Toolbar,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SchoolIcon from "@mui/icons-material/School";
import ClassIcon from "@mui/icons-material/Class";
import Link from "next/link";
import SchoolYearSelect from "./SchoolYearSelect";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const drawerWidth = 250;

export const EnrollmentIcon: React.FC<SvgIconProps> = (props) => (
  <AppRegistrationIcon {...props} />
);

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ open = true, onClose }: SidebarProps) {
  const schoolYearOptions = [2025, 2026];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? drawerWidth : 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          overflow: "visible",
        },
      }}
    >
      <Toolbar />
      <List>
        <DrawerHeader>
          <Box sx={{ padding: 2 }} flexGrow={1}>
            <SchoolYearSelect schoolYearOptions={schoolYearOptions} />
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              right: -12,
              backgroundColor: "primary.main",
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
              height: 24,
              width: 24,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <ListItemButton component={Link} href="/enrollment">
          <ListItemIcon>
            <EnrollmentIcon />
          </ListItemIcon>
          <ListItemText primary="Enrollment" />
        </ListItemButton>

        <ListItemButton component={Link} href="/dashboard">
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItemButton>

        <ListItemButton component={Link} href="/dashboard/users">
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Faculty" />
        </ListItemButton>

        <ListItemButton component={Link} href="/dashboard/settings">
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Classes" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export { drawerWidth };
