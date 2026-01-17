import { Guardian, Student } from "@/services/student.client";

export interface AddEnrollmentDto {
  student: Student | null;
  guardian: Guardian | null;
  gradeLevel: string | null;
  section: string | null;
}
