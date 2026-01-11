"use client";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SchoolIcon from "@mui/icons-material/School";
import ClassIcon from "@mui/icons-material/Class";
import Link from "next/link";
import SchoolYearSelect from "./SchoolYearSelect";

const drawerWidth = 240;

export default function Sidebar() {
  const schoolYearOptions = [2025, 2026];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem>
          <SchoolYearSelect schoolYearOptions={schoolYearOptions} />
        </ListItem>

        <Divider />

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
