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

export interface Guardian {
  name: string;
  relationship: string;
  contactNumber: string;
  emailAddress: string;
  addressSameAsStudent?: boolean;
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

export const fetchStudentGuardians = (studentId: string): Guardian[] => {
  return studentId === "1234"
    ? [
        {
          name: "Jane Doe",
          relationship: "Mother",
          contactNumber: "09171234567",
          emailAddress: "jane.doe@example.com",
          addressSameAsStudent: true,
        },
        {
          name: "John Doe",
          relationship: "Father",
          contactNumber: "09171234568",
          emailAddress: "john.doe@example.com",
          address: "381, Other St, Cityville, Countryland",
        },
      ]
    : [];
};
