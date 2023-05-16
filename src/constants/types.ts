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

export interface BlogPostData {
  content: string,
  title: string,
  image: string,
}

export interface BlogPostDataWithId extends BlogPostData {
  id: string;
}

export enum EmployeeRoles {
  DIRECTOR = "director",
  DEPUTY = "deputy",
  PROFESSOR = "professor",
  SECRETARY = "secretary",
  JANITOR = "janitor",
  PEDAGOGUE = "pedagogue",
  PSYCHOLOGIST = "psychologist",
  LAWYER = "lawyer",
  CLEANER = "cleaner",
  LIBRARIAN = "librarian"
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

export interface EmployeeData {
  firstName: string;
  lastName: string;
  role: EmployeeRoles.DIRECTOR | EmployeeRoles.DEPUTY | EmployeeRoles.PROFESSOR | EmployeeRoles.SECRETARY | EmployeeRoles.JANITOR | EmployeeRoles.PEDAGOGUE | EmployeeRoles.PSYCHOLOGIST | EmployeeRoles.LAWYER | EmployeeRoles.CLEANER | EmployeeRoles.LIBRARIAN, 
  image: string;
}

export interface EmployeeDataWithId extends EmployeeData {
  id: string;
}

export enum Administration {
  DIRECTOR = EmployeeRoles.DIRECTOR,
  SECRETARY = EmployeeRoles.SECRETARY,
  DEPUTY = EmployeeRoles.DEPUTY,
  LAWYER = EmployeeRoles.LAWYER
}

export enum ProfessionalService {
  PEDAGOGUE = EmployeeRoles.PEDAGOGUE,
  PSYCHOLOGIST = EmployeeRoles.PSYCHOLOGIST,
}

export enum AdministrationLevel {
  BASIC = 'basic',
  ADMIN = 'admin',
  SUPER = 'super',
}

export interface User {
  _id: string;
  name: string;
  firstName: string;
  lastName: string;
  administrationLevel: AdministrationLevel.BASIC | AdministrationLevel.ADMIN | AdministrationLevel.SUPER;
}
