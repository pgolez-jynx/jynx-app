"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import DashboardLayout from "../components/DashboardLayout";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DashboardLayout>{children}</DashboardLayout>
        </LocalizationProvider>
      </body>
    </html>
  );
}
