export interface InputProps {
  name: string;
  value: string | number;
  placeholder?: string;
  label?: string;

  type: "text" | "password" | "select" | "textarea" | "file" | "date"; // which compoonent to render
  typeValue?: "string" ; // what type of data to assign to instance of Yup
  options?: Opt[]; // select options
  validations: Validation[]; // validation rules
}

export interface Opt {
  value: string | number; // for select (could be for radio too)
  desc: string;
}

export interface Validation {
  // validation rules for yup
  type: "required" | "minLength" | "maxLength";
  value?: string | number;
  message: string;
}

export type loginFormValues = {
    name: string;
    password: string;
};


export const forms: { [x: string]: InputProps[] } =
{
    login: [
        {
            type: "text",
            name: "name",
            placeholder: "Korisničko ime",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 5,
                    message: "Min. 5 karaktera",
                },
                {
                    type: "required",
                    message: "Korisničko ime je obavezno"
                },
            ],

        },
        {
            type: "password",
            name: "password",
            placeholder: "Šifra",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 8,
                    message: "Min. 8 karaktera",
                },
                {
                    type: "required",
                    message: "Šifra je obavezna"
                }
            ],

        }
    ],
    post: [
        {
            type: "text",
            name: "title",
            placeholder: "Naslov",
            value: "",
            validations: [
                {
                    type: "maxLength",
                    value: 50,
                    message: "Max. 50 karaktera",
                },
                {
                    type: "required",
                    message: "Naslov je obavezan"
                },
            ],
        },
        {
            type: "textarea",
            name: "content",
            placeholder: "Sadržaj",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 300,
                    message: "Min. 300 karaktera",
                },
                {
                    type: "required",
                    message: "Sadržaj je obavezan"
                },
            ],
        },
        {
            type: "file",
            name: "image",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Slika je obavezna"
                },
            ],
        },
    ],
    employee: [
        {
            type: "text",
            name: "firstName",
            placeholder: "Ime",
            value: "",
            validations: [
                {
                    type: "maxLength",
                    value: 20,
                    message: "Max. 20 karaktera",
                },
                {
                    type: "required",
                    message: "Ime je obavezno"
                },
            ],
        },
        {
            type: "text",
            name: "lastName",
            placeholder: "Prezime",
            value: "",
            validations: [
                {
                    type: "maxLength",
                    value: 20,
                    message: "Max. 20 karaktera",
                },
                {
                    type: "required",
                    message: "Prezime je obavezno"
                },
            ],
        },
        {
            type: "select",
            name: "role",
            label: "Radno mesto: ",
            value: "",
            options: [
                {
                    value: "professor",
                    desc: "profesor"
                },
                {
                    value: "cleaner",
                    desc: "spremač"
                },
                {
                    value: "lawyer",
                    desc: "pravnik"
                },
                {
                    value: "pedagogue",
                    desc: "pedagog"
                },
                {
                    value: "psychologist",
                    desc: "psiholog"
                },
                {
                    value: "director",
                    desc: "direktor",
                },
                {
                    value: "deputy",
                    desc: "zamenik"
                },
                {
                    value: "librarian",
                    desc: "bibliotekar"
                },
                {
                    value: "janitor",
                    desc: "domar"
                }
            ],
            validations: [
                {
                    type: "required",
                    message: "Radno mesto je obavezno"
                }
            ]
        },
        {
            type: "file",
            name: "image",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Slika je obavezna"
                },
            ],
        },
    ],  
    event: [
        {
            type: "select",
            name: "type",
            label: "Tip događaja: ",
            value: "",
            options: [
                {
                    value: "info",
                    desc: "Informacija "
                },
                {
                    value: "dayOff",
                    desc: "Neradni dan"
                },
                {
                    value: "exam",
                    desc: "Provera znanja"
                },
            ],
            validations: [
                {
                    type: "required",
                    message: "Tip događaja je obavezan"
                }
            ]
        },
        {
            type: "date",
            name: "date",
            label: "Datum ",
            placeholder: "MM/DD/YYYY",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Datum je obavezan"
                }
            ]
        },
        {
            type: "text",
            name: "info",
            placeholder: "Dodatne informacije",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 20,
                    message: "Min. 20 karaktera",
                },
                {
                    type: "required",
                    message: "Dodatne informacije polje je obavezno"
                },
            ],
        },
        {
            type: "select",
            name: "group",
            label: "Grupa: ",
            value: "",
            options: [
                {
                    value: "all",
                    desc: "svi "
                },
                {
                    value: "1a",
                    desc: "1a"
                },
                {
                    value: "1b",
                    desc: "1b"
                },
                {
                    value: "1c",
                    desc: "1c"
                },
                {
                    value: "1d",
                    desc: "1d"
                },
                {
                    value: "2a",
                    desc: "2a"
                },
                {
                    value: "2b",
                    desc: "2b"
                },
                {
                    value: "2c",
                    desc: "2c"
                },
                {
                    value: "2d",
                    desc: "2d"
                },
                {
                    value: "3a",
                    desc: "3a"
                },
                {
                    value: "3b",
                    desc: "3b"
                },
                {
                    value: "3c",
                    desc: "3c"
                },
                {
                    value: "3d",
                    desc: "3d"
                },
                {
                    value: "4a",
                    desc: "4a"
                },
                {
                    value: "5b",
                    desc: "5b"
                },
                {
                    value: "5c",
                    desc: "5c"
                },
                {
                    value: "5d",
                    desc: "5d"
                },
                {
                    value: "6a",
                    desc: "6a"
                },
                {
                    value: "6b",
                    desc: "6b"
                },
                {
                    value: "6c",
                    desc: "6c"
                },
                {
                    value: "6d",
                    desc: "6d"
                },
                {
                    value: "7a",
                    desc: "7a"
                },
                {
                    value: "7b",
                    desc: "7b"
                },
                {
                    value: "7c",
                    desc: "7c"
                },
                {
                    value: "7d",
                    desc: "7d"
                },
                {
                    value: "8a",
                    desc: "8a"
                },
                {
                    value: "8b",
                    desc: "8b"
                },
                {
                    value: "8c",
                    desc: "8c"
                },
                {
                    value: "8d",
                    desc: "8d"
                },
            ],
            validations: [
                {
                    type: "required",
                    message: "Tip događaja je obavezan"
                }
            ]
        },
    ],
}