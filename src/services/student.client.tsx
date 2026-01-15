export interface Student {
  id: string;
  givenName: string;
  middleName?: string;
  familyName: string;
  suffix?: string;
  gender: string;
  dateOfBirth: string;
  nationality: string;
  address?: string;
}

export const fetchStudent = (studentId: string): Student | null => {
  switch (studentId) {
    case "1234":
      return {
        id: studentId,
        givenName: "John",
        middleName: "Tavera",
        familyName: "Doe",
        suffix: "Jr",
        gender: "M",
        dateOfBirth: "1998-04-23",
        nationality: "Filipino",
        address: "123 Main St, Cityville, Countryland",
      };
    default:
      return null;
  }
};
