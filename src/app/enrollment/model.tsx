import { Student } from "@/services/student.client";

export interface Enrollment {
  student: Student | null;
  gradeLevel: string | null;
  section: string | null;
}
