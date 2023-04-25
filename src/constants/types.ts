export interface Post {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}


export enum EmployeeRoles {
  DIRECTOR = "director",
  DEPUTY = "deputy",
  PROFESSOR = "professor",
  SECRETARY = "secretary",
  JANITOR = "janitor",
  PEDAGOGUE = "pedagogue",
  PSYCHOLOGIST = "psychologist",
  LAWYER = 'lawyer',
  CLEANER = 'cleaner',
  LIBRARIAN = 'librarian'
}

export interface Employee {
  _id: string;
  firstName: string;
  lastName: string;
  role: EmployeeRoles.DIRECTOR | EmployeeRoles.DEPUTY | EmployeeRoles.PROFESSOR | EmployeeRoles.SECRETARY | EmployeeRoles.JANITOR | EmployeeRoles.PEDAGOGUE | EmployeeRoles.PSYCHOLOGIST | EmployeeRoles.LAWYER | EmployeeRoles.CLEANER | EmployeeRoles.LIBRARIAN,
  image: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

export enum Administration {
  DIRECTOR = EmployeeRoles.DIRECTOR,
  SECRETARY = EmployeeRoles.SECRETARY,
}

export enum ProfessionalService {
  PEDAGOGUE = EmployeeRoles.PEDAGOGUE,
  PSYCHOLOGIST = EmployeeRoles.PSYCHOLOGIST,
}

