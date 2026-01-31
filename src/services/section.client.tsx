export type Section = {
  id: string;
  gradeLevel: number;
  name: string;
  adviser: {
    givenName: string;
    middleName: string | null;
    familyName: string;
  };
  studentCount: number;
};

export const fetchSections = async (): Promise<Section[]> => {
  return getAllSections();
};

export const fetchSection = async (id: string): Promise<Section | null> => {
  return getAllSections().find((section) => section.id === id) ?? null;
};

function getAllSections(): Section[] {
  return [
    {
      id: "9b6a8f3e-6c4f-4e6d-8e8a-0b7f5a2d9c41",
      gradeLevel: 7,
      name: "Einstein",
      adviser: {
        givenName: "Maria",
        middleName: "Largosa",
        familyName: "Santos",
      },
      studentCount: 32,
    },
    {
      id: "e2c6f5a1-1f47-4d8e-9b2c-7a9e6c4d3f21",
      gradeLevel: 7,
      name: "Newton",
      adviser: {
        givenName: "John",
        middleName: null,
        familyName: "Reyes",
      },
      studentCount: 30,
    },

    // Grade 8
    {
      id: "4f8d1b72-9c6e-4b9a-a1f5-3c7e2d6a9b84",
      gradeLevel: 8,
      name: "Archimedes",
      adviser: {
        givenName: "Angela",
        middleName: "Maglasang",
        familyName: "Cruz",
      },
      studentCount: 34,
    },
    {
      id: "a6d9c1f3-5e4b-48a2-9d7f-2c8b1e6a4f95",
      gradeLevel: 8,
      name: "Mendel",
      adviser: {
        givenName: "David",
        middleName: null,
        familyName: "Torres",
      },
      studentCount: 33,
    },

    // Grade 9
    {
      id: "7e5b2d6a-4c9f-4f81-b8e3-1a6d9c2f5b74",
      gradeLevel: 9,
      name: "Pythagoras",
      adviser: {
        givenName: "Sophia",
        middleName: "Ruiz",
        familyName: "Lopez",
      },
      studentCount: 35,
    },
    {
      id: "c4b1f7d9-8a6e-4e3f-9c52-5d2a6b1e8f94",
      gradeLevel: 9,
      name: "Galileo",
      adviser: {
        givenName: "Mark",
        middleName: null,
        familyName: "Garcia",
      },
      studentCount: 31,
    },

    // Grade 10
    {
      id: "2a8e6f5d-9b7c-4a31-8f9e-dc1b5a764e92",
      gradeLevel: 10,
      name: "Aristotle",
      adviser: {
        givenName: "Emily",
        middleName: "T.",
        familyName: "Navarro",
      },
      studentCount: 36,
    },
    {
      id: "f9d4c6e8-3a1b-4c2e-97f5-6a8d1b2c5e73",
      gradeLevel: 10,
      name: "Pascal",
      adviser: {
        givenName: "Paul",
        middleName: null,
        familyName: "Mendoza",
      },
      studentCount: 34,
    },

    // Grade 11
    {
      id: "6b5e9a3f-1d8c-4f72-9a4e-2c7b8d6f5e19",
      gradeLevel: 11,
      name: "Faraday",
      adviser: {
        givenName: "Rachel",
        middleName: "A.",
        familyName: "Flores",
      },
      studentCount: 28,
    },
    {
      id: "1f3a8b5d-7e2c-4a96-9d4f-6c8b5e2a719f",
      gradeLevel: 11,
      name: "Curie",
      adviser: {
        givenName: "Daniel",
        middleName: null,
        familyName: "Ramos",
      },
      studentCount: 29,
    },

    // Grade 12
    {
      id: "8c5e7b6a-4d2f-49a1-9e3b-f6a2d1c8e574",
      gradeLevel: 12,
      name: "Turing",
      adviser: {
        givenName: "Nicole",
        middleName: "Sison",
        familyName: "Villanueva",
      },
      studentCount: 27,
    },
    {
      id: "3d7e6c9b-5f1a-4e82-8c9a-2b6d1f5e47a3",
      gradeLevel: 12,
      name: "Kant",
      adviser: {
        givenName: "Andrew",
        middleName: null,
        familyName: "Perez",
      },
      studentCount: 26,
    },
  ];
}
